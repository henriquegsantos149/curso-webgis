import {
  GRAPH_API_VERSION,
  buildEventPayload,
  buildUserData,
  clientIpFromHeader,
  filterCustomData,
  filterEventSourceUrl,
  isAllowedEvent,
  parseCookies,
} from './_lib/capi.js';

const META_REQUEST_TIMEOUT_MS = 3000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const pixelId = process.env.META_PIXEL_ID || '1373287802810243';
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  
  if (!accessToken) {
    console.error('Meta CAPI: META_CAPI_ACCESS_TOKEN is not configured in environment variables');
    return res.status(500).json({ error: 'Not configured' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch {
    console.error('Meta CAPI: malformed request body');
    return res.status(400).json({ error: 'Malformed request body' });
  }

  const eventName = body.event_name;
  if (!isAllowedEvent(eventName)) {
    console.error('Meta CAPI: rejected event outside allowlist:', eventName);
    return res.status(400).json({ error: 'Unsupported event' });
  }

  const eventId = typeof body.event_id === 'string' ? body.event_id : '';
  if (eventId.length === 0) {
    console.error('Meta CAPI: missing event_id for event:', eventName);
    return res.status(400).json({ error: 'Missing event_id' });
  }

  const cookies = parseCookies(req.headers.cookie);
  const userAgent = req.headers['user-agent'];

  const payload = buildEventPayload({
    eventName,
    eventId,
    eventTime: Math.floor(Date.now() / 1000),
    accessToken,
    eventSourceUrl: filterEventSourceUrl(body.event_source_url),
    customData: filterCustomData(body.custom_data),
    testEventCode: process.env.META_TEST_EVENT_CODE || undefined,
    userData: buildUserData({
      email: body.email,
      telefone: body.telefone || body.whatsapp || body.phone,
      nome: body.nome || body.name,
      fbp: cookies._fbp || (typeof body.fbp === 'string' ? body.fbp : undefined),
      fbc: cookies._fbc || (typeof body.fbc === 'string' ? body.fbc : undefined),
      clientIpAddress: clientIpFromHeader(req.headers['x-forwarded-for']),
      clientUserAgent: typeof userAgent === 'string' ? userAgent : undefined,
    }),
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), META_REQUEST_TIMEOUT_MS);

  try {
    const metaRes = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      }
    );

    if (!metaRes.ok) {
      const detail = await metaRes.json().catch(() => null);
      console.error('Meta CAPI rejected the event', {
        event_name: eventName,
        status: metaRes.status,
        fbtrace_id: detail?.error?.fbtrace_id,
        message: detail?.error?.message,
      });
    }
  } catch (error) {
    console.error('Meta CAPI request failed', {
      event_name: eventName,
      reason: error instanceof Error ? error.name : 'unknown',
    });
  } finally {
    clearTimeout(timeout);
  }

  return res.status(204).end();
}

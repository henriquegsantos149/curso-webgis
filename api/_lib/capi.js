import { createHash } from 'node:crypto';

export const GRAPH_API_VERSION = 'v21.0';

export const ALLOWED_EVENTS = ['Lead', 'lead_qualificado', 'ViewContent'];

export function isAllowedEvent(value) {
  return typeof value === 'string' && ALLOWED_EVENTS.includes(value);
}

export function sha256(value) {
  return createHash('sha256').update(value, 'utf8').digest('hex');
}

export function normalizeEmail(value) {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().toLowerCase();
  return normalized.length > 0 ? normalized : undefined;
}

export function normalizePhoneBR(value) {
  if (typeof value !== 'string') return undefined;
  const digits = value.replace(/\D/g, '');
  if (digits.length < 10) return undefined;
  if (digits.length > 11 && digits.startsWith('55')) return digits;
  return `55${digits}`;
}

export function normalizeName(value) {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().toLowerCase().replace(/\s+/g, ' ');
  return normalized.length > 0 ? normalized : undefined;
}

export function splitName(value) {
  const normalized = normalizeName(value);
  if (!normalized) return {};
  const parts = normalized.split(' ');
  const lastName = parts.slice(1).join(' ');
  return { firstName: parts[0], lastName: lastName.length > 0 ? lastName : undefined };
}

export function buildUserData(input) {
  const userData = {};

  const email = normalizeEmail(input.email);
  if (email) {
    const hashedEmail = sha256(email);
    userData.em = [hashedEmail];
    userData.external_id = [hashedEmail];
  }

  const phone = normalizePhoneBR(input.telefone || input.phone || input.whatsapp);
  if (phone) userData.ph = [sha256(phone)];

  const { firstName, lastName } = splitName(input.nome || input.name);
  if (firstName) userData.fn = [sha256(firstName)];
  if (lastName) userData.ln = [sha256(lastName)];

  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;
  if (input.clientIpAddress) userData.client_ip_address = input.clientIpAddress;
  if (input.clientUserAgent) userData.client_user_agent = input.clientUserAgent;

  return userData;
}

export function parseCookies(header) {
  if (typeof header !== 'string' || header.length === 0) return {};
  const cookies = {};
  for (const part of header.split(';')) {
    const separator = part.indexOf('=');
    if (separator < 1) continue;
    const name = part.slice(0, separator).trim();
    if (name.length === 0) continue;
    const rawValue = part.slice(separator + 1).trim();
    try {
      cookies[name] = decodeURIComponent(rawValue);
    } catch {
      cookies[name] = rawValue;
    }
  }
  return cookies;
}

export function clientIpFromHeader(value) {
  const raw = Array.isArray(value) ? value[0] : value;
  if (typeof raw !== 'string') return undefined;
  const first = raw.split(',')[0]?.trim();
  return first && first.length > 0 ? first : undefined;
}

const ALLOWED_CUSTOM_DATA_KEYS = ['content_name', 'content_category'];

export function filterCustomData(value) {
  if (value === null || typeof value !== 'object') return undefined;

  const source = value;
  const filtered = {};

  for (const key of ALLOWED_CUSTOM_DATA_KEYS) {
    const candidate = source[key];
    if (typeof candidate === 'string') filtered[key] = candidate;
  }

  return Object.keys(filtered).length > 0 ? filtered : undefined;
}

export function filterEventSourceUrl(value) {
  if (typeof value !== 'string') return undefined;
  try {
    const url = new URL(value);
    // Allow local development and production domains
    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return value;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

export function buildEventPayload(input) {
  const event = {
    event_name: input.eventName,
    event_time: input.eventTime,
    event_id: input.eventId,
    action_source: 'website',
    user_data: input.userData,
  };
  if (input.eventSourceUrl) event.event_source_url = input.eventSourceUrl;
  if (input.customData) event.custom_data = input.customData;

  const payload = {
    data: [event],
    access_token: input.accessToken,
  };
  if (input.testEventCode) payload.test_event_code = input.testEventCode;
  return payload;
}

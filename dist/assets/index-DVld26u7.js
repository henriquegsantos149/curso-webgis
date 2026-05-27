(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{typeof lucide<"u"&&lucide.createIcons(),l(),d(),u(),f(),g(),p(),m(),h()});function l(){const e=document.getElementById("main-header");if(!e)return;const t=()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",t),t()}function d(){const e=document.getElementById("mobile-menu-btn"),t=document.getElementById("site-nav"),s=document.querySelectorAll(".nav-link");if(!e||!t)return;const n=()=>{const i=t.classList.toggle("open");e.querySelector("i")&&typeof lucide<"u"&&(i?e.innerHTML='<i data-lucide="x"></i>':e.innerHTML='<i data-lucide="menu"></i>',lucide.createIcons())};e.addEventListener("click",n),s.forEach(i=>{i.addEventListener("click",()=>{t.classList.contains("open")&&n()})})}function u(){const e=document.querySelectorAll(".accordion-item");e.length!==0&&e.forEach(t=>{const s=t.querySelector(".accordion-toggle"),n=t.querySelector(".accordion-content");!s||!n||s.addEventListener("click",()=>{const i=t.classList.contains("active");e.forEach(o=>{if(o!==t){o.classList.remove("active");const r=o.querySelector(".accordion-toggle"),a=o.querySelector(".accordion-content");r&&r.setAttribute("aria-expanded","false"),a&&(a.setAttribute("aria-hidden","true"),a.style.maxHeight="0px")}}),i?(t.classList.remove("active"),s.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true"),n.style.maxHeight="0px"):(t.classList.add("active"),s.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.style.maxHeight=n.scrollHeight+"px")})})}function f(){const e=document.querySelectorAll(".faq-item");e.length!==0&&e.forEach(t=>{const s=t.querySelector(".faq-toggle"),n=t.querySelector(".faq-content");!s||!n||s.addEventListener("click",()=>{const i=t.classList.contains("active");e.forEach(o=>{if(o!==t){o.classList.remove("active");const r=o.querySelector(".faq-toggle"),a=o.querySelector(".faq-content");r&&r.setAttribute("aria-expanded","false"),a&&(a.setAttribute("aria-hidden","true"),a.style.maxHeight="0px")}}),i?(t.classList.remove("active"),s.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true"),n.style.maxHeight="0px"):(t.classList.add("active"),s.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.style.maxHeight=n.scrollHeight+"px")})})}function g(){const e=document.querySelectorAll(".reveal");if(e.length===0)return;const t={root:null,rootMargin:"0px",threshold:.15},s=new IntersectionObserver((n,i)=>{n.forEach(o=>{o.isIntersecting&&(o.target.classList.add("active"),i.unobserve(o.target))})},t);e.forEach(n=>{s.observe(n)})}function p(){const e=document.querySelectorAll("#enrollment-form, #hero-enrollment-form");e.length!==0&&e.forEach(t=>{t.addEventListener("submit",s=>{s.preventDefault();const n=t.querySelector('button[type="submit"]');n&&(n.disabled=!0,n.innerHTML='<i data-lucide="loader" class="animate-spin"></i> Processando inscrição...',typeof lucide<"u"&&lucide.createIcons(),setTimeout(()=>{const i=t.closest(".registration-card");i&&(i.innerHTML=`
            <div class="text-center success-screen" style="padding: 20px 0;">
              <div class="success-icon-wrapper" style="width: 80px; height: 80px; background-color: rgba(93, 224, 230, 0.1); color: #5de0e6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; font-size: 2.5rem; border: 2px solid rgba(93, 224, 230, 0.3); animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                <i data-lucide="check-check"></i>
              </div>
              <h2 class="card-title" style="margin-bottom: 16px;">Inscrição Confirmada!</h2>
              <p class="card-subtitle" style="font-size: 1.05rem; margin-bottom: 30px; line-height: 1.6;">
                Parabéns! Sua vaga no <strong>Curso Livre de WebGIS</strong> foi garantida com sucesso.
              </p>
              <div class="next-steps glassmorphism" style="text-align: left; padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); background: rgba(7, 12, 25, 0.4); margin-bottom: 30px;">
                <h4 style="margin-bottom: 12px; color: #5de0e6; font-size: 1.1rem;">Próximos Passos Importantes:</h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: #cbd5e1;">
                  <li style="display: flex; gap: 10px;">
                    <i data-lucide="mail" style="color: #5de0e6; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;"></i>
                    <span>Acesse seu e-mail cadastrado para obter seus dados de acesso à plataforma de aulas.</span>
                  </li>
                  <li style="display: flex; gap: 10px;">
                    <i data-lucide="users" style="color: #5de0e6; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;"></i>
                    <span>Entre no nosso grupo exclusivo de alunos no WhatsApp para receber atualizações.</span>
                  </li>
                </ul>
              </div>
              <a href="https://ambientalpro.com.br" class="btn btn-primary btn-lg" style="width: 100%;">
                Acessar Área do Aluno <i data-lucide="arrow-right"></i>
              </a>
            </div>
          `,typeof lucide<"u"&&lucide.createIcons())},1500))})})}const c=document.createElement("style");c.textContent=`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  @keyframes scaleUp {
    0% { transform: scale(0.6); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
`;document.head.appendChild(c);function m(){const e=(t,s,n)=>{const i=document.getElementById(t),o=document.getElementById(s),r=document.getElementById(n);!i||!o||i.addEventListener("change",()=>{i.value==="sim"?(o.classList.remove("hidden"),r&&r.setAttribute("required","required")):(o.classList.add("hidden"),r&&(r.removeAttribute("required"),r.value=""))})};e("hero-user-education","hero-education-area-group","hero-user-education-area"),e("user-education","education-area-group","user-education-area")}function h(){const e=document.getElementById("image-lightbox"),t=document.getElementById("lightbox-img"),s=document.querySelector(".lightbox-close"),n=document.querySelector(".vibecoding-visual .vibe-card");if(!e||!t||!n)return;const i=()=>{const r=n.querySelector("img");r&&(t.src=r.src,e.style.display="flex",e.offsetHeight,e.classList.add("active"),document.body.style.overflow="hidden")},o=()=>{e.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>{e.classList.contains("active")||(e.style.display="none")},300)};n.addEventListener("click",i),e.addEventListener("click",r=>{(r.target===e||r.target===s)&&o()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&e.classList.contains("active")&&o()})}

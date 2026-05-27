(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{typeof lucide<"u"&&lucide.createIcons(),l(),d(),u(),f(),p(),g(),m()});function l(){const n=document.getElementById("main-header");if(!n)return;const e=()=>{window.scrollY>50?n.classList.add("scrolled"):n.classList.remove("scrolled")};window.addEventListener("scroll",e),e()}function d(){const n=document.getElementById("mobile-menu-btn"),e=document.getElementById("site-nav"),s=document.querySelectorAll(".nav-link");if(!n||!e)return;const r=()=>{const t=e.classList.toggle("open");n.querySelector("i")&&typeof lucide<"u"&&(t?n.innerHTML='<i data-lucide="x"></i>':n.innerHTML='<i data-lucide="menu"></i>',lucide.createIcons())};n.addEventListener("click",r),s.forEach(t=>{t.addEventListener("click",()=>{e.classList.contains("open")&&r()})})}function u(){const n=document.querySelectorAll(".accordion-item");n.length!==0&&n.forEach(e=>{const s=e.querySelector(".accordion-toggle"),r=e.querySelector(".accordion-content");!s||!r||s.addEventListener("click",()=>{const t=e.classList.contains("active");n.forEach(i=>{if(i!==e){i.classList.remove("active");const o=i.querySelector(".accordion-toggle"),a=i.querySelector(".accordion-content");o&&o.setAttribute("aria-expanded","false"),a&&(a.setAttribute("aria-hidden","true"),a.style.maxHeight="0px")}}),t?(e.classList.remove("active"),s.setAttribute("aria-expanded","false"),r.setAttribute("aria-hidden","true"),r.style.maxHeight="0px"):(e.classList.add("active"),s.setAttribute("aria-expanded","true"),r.setAttribute("aria-hidden","false"),r.style.maxHeight=r.scrollHeight+"px")})})}function f(){const n=document.querySelectorAll(".faq-item");n.length!==0&&n.forEach(e=>{const s=e.querySelector(".faq-toggle"),r=e.querySelector(".faq-content");!s||!r||s.addEventListener("click",()=>{const t=e.classList.contains("active");n.forEach(i=>{if(i!==e){i.classList.remove("active");const o=i.querySelector(".faq-toggle"),a=i.querySelector(".faq-content");o&&o.setAttribute("aria-expanded","false"),a&&(a.setAttribute("aria-hidden","true"),a.style.maxHeight="0px")}}),t?(e.classList.remove("active"),s.setAttribute("aria-expanded","false"),r.setAttribute("aria-hidden","true"),r.style.maxHeight="0px"):(e.classList.add("active"),s.setAttribute("aria-expanded","true"),r.setAttribute("aria-hidden","false"),r.style.maxHeight=r.scrollHeight+"px")})})}function p(){const n=document.querySelectorAll(".reveal");if(n.length===0)return;const e={root:null,rootMargin:"0px",threshold:.15},s=new IntersectionObserver((r,t)=>{r.forEach(i=>{i.isIntersecting&&(i.target.classList.add("active"),t.unobserve(i.target))})},e);n.forEach(r=>{s.observe(r)})}function g(){const n=document.querySelectorAll("#enrollment-form, #hero-enrollment-form");n.length!==0&&n.forEach(e=>{e.addEventListener("submit",s=>{s.preventDefault();const r=e.querySelector('button[type="submit"]');r&&(r.disabled=!0,r.innerHTML='<i data-lucide="loader" class="animate-spin"></i> Processando inscrição...',typeof lucide<"u"&&lucide.createIcons(),setTimeout(()=>{const t=e.closest(".registration-card");t&&(t.innerHTML=`
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
`;document.head.appendChild(c);function m(){const n=(e,s,r)=>{const t=document.getElementById(e),i=document.getElementById(s),o=document.getElementById(r);!t||!i||t.addEventListener("change",()=>{t.value==="sim"?(i.classList.remove("hidden"),o&&o.setAttribute("required","required")):(i.classList.add("hidden"),o&&(o.removeAttribute("required"),o.value=""))})};n("hero-user-education","hero-education-area-group","hero-user-education-area"),n("user-education","education-area-group","user-education-area")}

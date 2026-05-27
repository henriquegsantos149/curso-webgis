(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{typeof lucide<"u"&&lucide.createIcons(),l(),d(),u(),f(),p(),g()});function l(){const n=document.getElementById("main-header");if(!n)return;const e=()=>{window.scrollY>50?n.classList.add("scrolled"):n.classList.remove("scrolled")};window.addEventListener("scroll",e),e()}function d(){const n=document.getElementById("mobile-menu-btn"),e=document.getElementById("site-nav"),s=document.querySelectorAll(".nav-link");if(!n||!e)return;const i=()=>{const t=e.classList.toggle("open");n.querySelector("i")&&typeof lucide<"u"&&(t?n.innerHTML='<i data-lucide="x"></i>':n.innerHTML='<i data-lucide="menu"></i>',lucide.createIcons())};n.addEventListener("click",i),s.forEach(t=>{t.addEventListener("click",()=>{e.classList.contains("open")&&i()})})}function u(){const n=document.querySelectorAll(".accordion-item");n.length!==0&&n.forEach(e=>{const s=e.querySelector(".accordion-toggle"),i=e.querySelector(".accordion-content");!s||!i||s.addEventListener("click",()=>{const t=e.classList.contains("active");n.forEach(r=>{if(r!==e){r.classList.remove("active");const o=r.querySelector(".accordion-toggle"),a=r.querySelector(".accordion-content");o&&o.setAttribute("aria-expanded","false"),a&&(a.setAttribute("aria-hidden","true"),a.style.maxHeight="0px")}}),t?(e.classList.remove("active"),s.setAttribute("aria-expanded","false"),i.setAttribute("aria-hidden","true"),i.style.maxHeight="0px"):(e.classList.add("active"),s.setAttribute("aria-expanded","true"),i.setAttribute("aria-hidden","false"),i.style.maxHeight=i.scrollHeight+"px")})})}function f(){const n=document.querySelectorAll(".faq-item");n.length!==0&&n.forEach(e=>{const s=e.querySelector(".faq-toggle"),i=e.querySelector(".faq-content");!s||!i||s.addEventListener("click",()=>{const t=e.classList.contains("active");n.forEach(r=>{if(r!==e){r.classList.remove("active");const o=r.querySelector(".faq-toggle"),a=r.querySelector(".faq-content");o&&o.setAttribute("aria-expanded","false"),a&&(a.setAttribute("aria-hidden","true"),a.style.maxHeight="0px")}}),t?(e.classList.remove("active"),s.setAttribute("aria-expanded","false"),i.setAttribute("aria-hidden","true"),i.style.maxHeight="0px"):(e.classList.add("active"),s.setAttribute("aria-expanded","true"),i.setAttribute("aria-hidden","false"),i.style.maxHeight=i.scrollHeight+"px")})})}function p(){const n=document.querySelectorAll(".reveal");if(n.length===0)return;const e={root:null,rootMargin:"0px",threshold:.15},s=new IntersectionObserver((i,t)=>{i.forEach(r=>{r.isIntersecting&&(r.target.classList.add("active"),t.unobserve(r.target))})},e);n.forEach(i=>{s.observe(i)})}function g(){const n=document.querySelectorAll("#enrollment-form, #hero-enrollment-form");n.length!==0&&n.forEach(e=>{e.addEventListener("submit",s=>{s.preventDefault();const i=e.querySelector('button[type="submit"]');i&&(i.disabled=!0,i.innerHTML='<i data-lucide="loader" class="animate-spin"></i> Processando inscrição...',typeof lucide<"u"&&lucide.createIcons(),setTimeout(()=>{const t=e.closest(".registration-card");t&&(t.innerHTML=`
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
`;document.head.appendChild(c);

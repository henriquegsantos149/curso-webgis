// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initHeader();
  initMobileMenu();
  initCurriculumAccordion();
  initFaqAccordion();
  initScrollReveal();
  initEnrollmentForm();
  initEducationToggle();
});

// Sticky Header behavior
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Run once on load in case page is refreshed while scrolled
  handleScroll();
}

// Mobile navigation menu toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    const icon = toggleBtn.querySelector('i');
    
    // Update icon between menu and x
    if (icon && typeof lucide !== 'undefined') {
      if (isOpen) {
        toggleBtn.innerHTML = '<i data-lucide="x"></i>';
      } else {
        toggleBtn.innerHTML = '<i data-lucide="menu"></i>';
      }
      lucide.createIcons();
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

// Curriculum Accordion logic
function initCurriculumAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (items.length === 0) return;

  items.forEach(item => {
    const toggle = item.querySelector('.accordion-toggle');
    const content = item.querySelector('.accordion-content');

    if (!toggle || !content) return;

    toggle.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Collapse all other curriculum items
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherToggle = otherItem.querySelector('.accordion-toggle');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          if (otherContent) {
            otherContent.setAttribute('aria-hidden', 'true');
            otherContent.style.maxHeight = '0px';
          }
        }
      });

      if (isActive) {
        item.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
        content.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// FAQ Accordion logic
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');

    if (!toggle || !content) return;

    toggle.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Collapse all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherToggle = otherItem.querySelector('.faq-toggle');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          if (otherContent) {
            otherContent.setAttribute('aria-hidden', 'true');
            otherContent.style.maxHeight = '0px';
          }
        }
      });

      if (isActive) {
        item.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
        content.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Scroll reveal animations using IntersectionObserver
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const observerOptions = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once animated, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(element => {
    observer.observe(element);
  });
}

// Enrollment form simulation
function initEnrollmentForm() {
  const forms = document.querySelectorAll('#enrollment-form, #hero-enrollment-form');
  if (forms.length === 0) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;

      // Loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Processando inscrição...';
      if (typeof lucide !== 'undefined') lucide.createIcons();

      // Simulate server request
      setTimeout(() => {
        const card = form.closest('.registration-card');
        if (card) {
          // High-fidelity success screen
          card.innerHTML = `
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
          `;
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      }, 1500);
    });
  });
}

// Add simple animation styles for loader and success
const customStyle = document.createElement('style');
customStyle.textContent = `
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
`;
document.head.appendChild(customStyle);

// Toggle education area field based on degree select
function initEducationToggle() {
  const setupToggle = (selectId, groupId, inputId) => {
    const selectEl = document.getElementById(selectId);
    const groupEl = document.getElementById(groupId);
    const inputEl = document.getElementById(inputId);

    if (!selectEl || !groupEl) return;

    selectEl.addEventListener('change', () => {
      if (selectEl.value === 'sim') {
        groupEl.classList.remove('hidden');
        if (inputEl) inputEl.setAttribute('required', 'required');
      } else {
        groupEl.classList.add('hidden');
        if (inputEl) {
          inputEl.removeAttribute('required');
          inputEl.value = ''; // Clean field
        }
      }
    });
  };

  setupToggle('hero-user-education', 'hero-education-area-group', 'hero-user-education-area');
  setupToggle('user-education', 'education-area-group', 'user-education-area');
}

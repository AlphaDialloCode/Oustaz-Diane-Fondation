/* ================================================
   Oustaz Diané Fondation — script.js
   ================================================ */

/* ── LANGUAGE TOGGLE ── */
function setLang(lang) {
  document.body.classList.toggle('lang-fr', lang === 'fr');
  document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('.lang-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && lang === 'fr') || (i === 1 && lang === 'en'));
  });
}

/* ── DONATION AMOUNT SELECTOR ── */
function selectAmt(el) {
  document.querySelectorAll('.amt').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── CONTACT FORM SUBMIT ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const isEn = document.body.classList.contains('lang-en');
  btn.textContent = isEn ? '✓ Message sent!' : '✓ Message envoyé !';
  btn.style.background = '#1a7a50';

  setTimeout(() => {
    btn.innerHTML = '<span class="fr">Envoyer →</span><span class="en">Send →</span>';
    btn.style.background = '';
    e.target.reset();
    if (document.body.classList.contains('lang-en')) {
      btn.querySelectorAll('.fr').forEach(el => el.style.display = 'none');
    }
  }, 3000);
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

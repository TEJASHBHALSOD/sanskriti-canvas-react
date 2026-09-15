document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.nav-links');
  const menuBtn = document.querySelector('.mobile-menu');
  const searchBtn = document.querySelector('.mobile-search');
  const searchBox = document.querySelector('.search-box');
  const searchInput = document.querySelector('.search-box input');
  const results = document.querySelector('.search-results');
  const backTop = document.querySelector('.back-top');
  const toast = document.querySelector('.toast');

  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => { if (a.dataset.page === page) a.classList.add('active') });

  menuBtn?.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open)); searchBox?.classList.remove('mobile-open') });
  searchBtn?.addEventListener('click', () => { const open = searchBox.classList.toggle('mobile-open'); searchBox?.classList.toggle('open', open); searchInput?.focus(); menu?.classList.remove('open'); menuBtn?.setAttribute('aria-expanded', 'false'); if (!open) results?.classList.remove('show') });
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => { menu?.classList.remove('open'); menuBtn?.setAttribute('aria-expanded', 'false') }));

  const data = [
    ['Indian Heritage', 'Heritage', 'index.html#heritage'], ['Timeless Traditions', 'Traditions', 'index.html#traditions'], ['Culture & Stories', 'Culture', 'index.html#culture'], ['Sanskriti Canvas', 'About the project', 'about.html'], ['Explore India', 'Explore', 'explore.html'], ['Contact', 'Project contact', 'contact.html']
  ];
  function renderSearch(value = '') {
    if (!results) return; const q = value.trim().toLowerCase();
    const matches = q ? data.filter(x => (x[0] + ' ' + x[1]).toLowerCase().includes(q)) : data.slice(0, 4);
    results.innerHTML = matches.length ? matches.map(x => `<a class="search-result" href="${x[2]}"><strong>${x[0]}</strong><small>${x[1]}</small></a>`).join('') : `<div class="search-result"><strong>No matching section</strong><small>Try heritage, culture, explore or contact.</small></div>`;
    results.classList.add('show');
  }
  searchInput?.addEventListener('focus', () => renderSearch(searchInput.value));
  searchInput?.addEventListener('input', () => renderSearch(searchInput.value));
  searchInput?.addEventListener('keydown', e => { if (e.key === 'Escape') { results?.classList.remove('show'); searchBox?.classList.remove('mobile-open'); return } if (e.key === 'Enter') { const first = results?.querySelector('a.search-result'); if (first) location.href = first.href } });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap') && !e.target.closest('.mobile-search')) results?.classList.remove('show') });

  function scrollState() { header?.classList.toggle('scrolled', scrollY > 8); backTop?.classList.toggle('show', scrollY > 420) }
  addEventListener('scroll', scrollState, { passive: true }); scrollState();
  backTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelector('#contactForm')?.addEventListener('submit', e => { e.preventDefault(); e.currentTarget.reset(); if (toast) { toast.textContent = 'Thank you. Your message has been received in this demo.'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200) } });
});

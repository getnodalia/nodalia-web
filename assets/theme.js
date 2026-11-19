// Theme switch: light and dark follow the system until a choice is made, then the choice is kept.
const root = document.documentElement;
const resolved = () => root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const sync = (button) => button.setAttribute('aria-pressed', String(resolved() === 'dark'));
for (const button of document.querySelectorAll('[data-theme-toggle]')) {
  sync(button);
  button.addEventListener('click', () => {
    const next = resolved() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('nodalia-theme', next); } catch { /* private mode: the choice just isn't kept */ }
    sync(button);
  });
}

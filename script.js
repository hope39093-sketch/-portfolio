const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? '' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '72px';
      nav.style.right = '18px';
      nav.style.flexDirection = 'column';
      nav.style.gap = '14px';
      nav.style.padding = '18px';
      nav.style.background = '#fff';
      nav.style.border = '1px solid #eee7ec';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 12px 35px rgba(120,100,120,.08)';
      nav.style.zIndex = '10';
    }
  });
}

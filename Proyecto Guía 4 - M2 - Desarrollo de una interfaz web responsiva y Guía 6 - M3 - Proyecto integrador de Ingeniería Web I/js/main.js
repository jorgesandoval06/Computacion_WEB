// Menú móvil
const btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Filtro de programas
const chips = document.querySelectorAll('.chip'), cards = document.querySelectorAll('.card');
chips.forEach(c => c.addEventListener('click', () => {
  chips.forEach(x => x.classList.remove('is-active'));
  c.classList.add('is-active');
  cards.forEach(card => { card.hidden = c.dataset.filter !== 'todos' && card.dataset.area !== c.dataset.filter; });
}));

// Detalles de programa
const info = document.getElementById('info');
document.querySelectorAll('.link-btn').forEach(b => b.addEventListener('click', () => {
  info.textContent = b.closest('.card').querySelector('h3').textContent + ' — ' + b.dataset.info;
}));

// Validación del formulario
const form = document.getElementById('form'), msg = document.getElementById('msg');
form.addEventListener('submit', e => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle('err', bad);
    if (bad) ok = false;
  });
  msg.className = 'msg ' + (ok ? 'ok' : 'bad');
  msg.textContent = ok ? '¡Gracias! Te contactaremos pronto.' : 'Revisa los campos marcados.';
  if (ok) form.reset();
});

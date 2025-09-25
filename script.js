
// Filter gallery
const chips = document.querySelectorAll('.chip');
const items = document.querySelectorAll('.item');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  const f = chip.dataset.filter;
  items.forEach(it => {
    const cat = it.dataset.cat;
    it.style.display = (f==='all'|| f===cat) ? '' : 'none';
  });
}));
// Year
document.getElementById('year').textContent = new Date().getFullYear();


// Presupuesto form -> WhatsApp
const form = document.getElementById('presupuesto-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const tel = document.getElementById('telefono').value.trim();
    const servicio = document.getElementById('servicio').value;
    const localidad = document.getElementById('localidad').value.trim();
    const detalle = document.getElementById('detalle').value.trim();
    const msg = encodeURIComponent(`Hola Ferreyra Construcciones, soy ${nombre}.\nServicio: ${servicio}.\nLocalidad: ${localidad}.\nTel: ${tel || '—'}.\nDetalle: ${detalle}`);
    const url = `https://wa.me/542281500633?text=${msg}`;
    window.open(url, '_blank');
  });
}

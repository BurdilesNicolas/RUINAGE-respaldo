function Ocultar() {
  const textoElemento = document.getElementById('textoOculto');
  if (textoElemento.style.display === 'none') {
    textoElemento.set.display = 'block'; // O 'inline' si es un párrafo, etc.
  } else {
    textoElemento.set.display = 'none';
  }
}
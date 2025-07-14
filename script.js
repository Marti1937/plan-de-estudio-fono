document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('bloqueada')) return;

    // Cambiar color al hacer clic
    materia.style.backgroundColor = "#a2f0a2";

    // Desbloquear correlativas
    const id = materia.dataset.id;
    const correlativas = document.querySelectorAll(`.materia[data-correlativas*="${id}"]`);
    correlativas.forEach(mat => {
      mat.classList.remove('bloqueada');
    });
  });
});


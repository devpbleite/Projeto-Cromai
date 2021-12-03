const calcular = document.getElementById('calcular');

function hipotenusa() {

  const cat1 = document.getElementById('cat1').value;
  const cat2 = document.getElementById('cat2').value;
  const resultado = document.getElementById('resultado');

  if (cat1 !== '' && cat2 !== '') {

    const valorHypo = Math.round(Math.sqrt((cat1 * cat1) + (cat2 * cat2)));


    resultado.textContent = `O valor da Hipotenusa é ${valorHypo}.`;

  } else {
    resultado.textContent = 'Preencha todos os campos!!!';
  }

}

calcular.addEventListener('click', hipotenusa);
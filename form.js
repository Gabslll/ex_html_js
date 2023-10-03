const campoA = document.getElementById('num1');
const campoB = document.getElementById('num2');
let res = document.getElementById('res');
const dados = document.getElementById('dados');

dados.addEventListener('Verificar', function(e) {
    e.preventDefault();
})

function verificar () {
    let A = Number(campoA.value);
    let B = Number(campoB.value);

    if (A == 0 && B == 0) {
        window.alert('[ERRO] Preencha os campos!');
    } else if (B > A) {
        res.innerHTML = '<br>Campo B maior que campo A';
        res.style.color = 'red';
    } else {
        res.innerHTML = '<br>Valores dos campos correto!';
        res.style.color = 'green';
    }

    campoA.value = ' ';
    campoB.value = ' ';
    res.style.textAlign = 'center';
}




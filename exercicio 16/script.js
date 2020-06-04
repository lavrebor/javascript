function calcular() {
    var msg = window.document.getElementById('msg'),
        img = window.document.getElementById('imagem'),
        foto = window.document.querySelector('div#foto'),
        data = new Date(),
        anoInformado = window.document.getElementById('txtAno'),
        anoAtual = data.getFullYear(),
        fSexo = window.document.getElementsByName('radSexo');

    if (anoInformado.value.lenght == 0 || anoInformado.value > anoAtual) {
        window.alert('[ERRO] Ano inválido. Tente novamente!');
    } else {
        var idade = anoAtual - Number(anoInformado.value);
        var genero = '';

        if (fSexo[0].checked) {
            genero = 'Mulher';
            if (idade <= 12) {
                img.src = 'menina.png';
            } else if (idade <= 18) {
                img.src = 'jovemmulher.png';
            } else {
                img.src = 'velhamulher.png';
            }
        } else if (fSexo[1].checked) {
            genero = 'Homem';
            if (idade <= 12) {
                img.src = 'menino.png';
            } else if (idade <= 18) {
                img.src = 'homemjovem.png';
            } else {
                img.src = 'velhohomem.png';
            }
        }
        foto.innerHTML = `${genero} de ${idade} anos de idade.`;
    }

}
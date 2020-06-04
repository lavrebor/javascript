function carregar() {
    var msg = window.document.getElementById('msg'),
        img = window.document.getElementById('imagem'),
        data = new Date(),
        hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#d6a764'
    } else if (hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#905309'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#111e26'
    }
}
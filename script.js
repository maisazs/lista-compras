function abrirOpt() {
    let opt = document.getElementsByClassName('opt');

    if (opt[1].classList.contains('.fechado')) {
        opt[1].classList.add('aberto');
        opt[1].classList.remove('fechado');
    }
}

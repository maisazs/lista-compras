function abrirOpt(thing, categ) {
    if (thing.classList.contains('fechado')) {
        thing.classList.remove('fechado');
        thing.classList.add('aberto');
        categ.classList.add('fechado');
    } else {
        thing.classList.add('fechado');
        thing.classList.remove('aberto');
        categ.classList.add('aberto');
        categ.classList.remove('fechado');
    }
}
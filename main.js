
function navShow() {
    document.getElementById('nav').classList.toggle("nav-show");
}

function col1NavShow() {
    document.getElementById('footer__col-nav-1').classList.toggle("footer__col-nav-1-show");
    document.getElementById('footer__title-col-1').classList.toggle("footer__title-col-color");
    document.getElementById('arrow-icon-1').classList.toggle("arrow-icon-show");
}
function col2NavShow() {
    document.getElementById('footer__col-nav-2').classList.toggle("footer__col-nav-2-show");
    document.getElementById('footer__title-col-2').classList.toggle("footer__title-col-color");
    document.getElementById('arrow-icon-2').classList.toggle("arrow-icon-show");
}
function col3NavShow() {
    document.getElementById('footer__col-nav-3').classList.toggle("footer__col-nav-3-show");
    document.getElementById('footer__title-col-3').classList.toggle("footer__title-col-color");
    document.getElementById('arrow-icon-3').classList.toggle("arrow-icon-show");
}

let blockFaq = document.getElementsByClassName('question-answer');

for (var i = 0; i < blockFaq.length; i++) {
    blockFaq[i].addEventListener('click', function() {
    this.classList.toggle('question-answer-show');
})
}

function headerHiddenBlockShow() {
    document.getElementById('header__hidden-block').classList.toggle('header__hidden-block-show');
}
function howGetCreditNavShow() {
    document.getElementById('how-get-credit-nav').classList.toggle('how-get-credit-nav-show');
    document.getElementById('header__hidden-block__block-nav__a__svg').classList.toggle('header__hidden-block__block-nav__a__svg-rotate');
}

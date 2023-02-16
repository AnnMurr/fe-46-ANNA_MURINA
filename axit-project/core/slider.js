const buttons = document.getElementById('dots');
const content = document.querySelectorAll('.box');

const chengeClass = el => {
    for (let i = 0; i < buttons.children.length; i++) {
        buttons.children[i].classList.remove('dots__item_active');
    }
    el.classList.add('dots__item_active');
}

buttons.addEventListener('click', e => {
    const currBtn = e.target.dataset.btn;
    chengeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('box_active');
        if(content[i].dataset.content === currBtn) {
            content[i].classList.add('box_active');
        }
    }
})
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        container.innerHTML = this.dataset.text;
    });
});
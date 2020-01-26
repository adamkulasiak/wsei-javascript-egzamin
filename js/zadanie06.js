document.addEventListener('DOMContentLoaded', function() {
    
    const btn1 = document.querySelector('#button-1');
    const btn2 = document.querySelector('#button-2');
    const btn3 = document.querySelector('#button-3');
    const shopppingList = document.querySelector('#shopping-list');

    btn1.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = 'chleb';
        shopppingList.appendChild(li);
    });

    btn2.addEventListener('click', function() {
        shopppingList.removeChild(shopppingList.children[shopppingList.children.length-1]);
    });

    btn3.addEventListener('click', function() { 
        shopppingList.appendChild(shopppingList.children[1].cloneNode(true));
    });

});


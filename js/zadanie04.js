//1
const sampleClass = document.querySelectorAll('.sample_class');
function getTagsOfElements(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].tagName);
    }
    return array;
}

console.log(getTagsOfElements(sampleClass));

//2
const sampleId = document.querySelector('#sample_id');
function getClassesOfElement(element) {
    let array = [];
    element.classList.forEach(el => {
        array.push(el);
    });
    return array;
}

console.log(getClassesOfElement(sampleId));

//3
const listElements = document.querySelectorAll('.sample_class_2 li');
function getInnerTextsOfElements(elements) {
    let array = [];
    elements.forEach(el => {
        array.push(el.innerText);
    });
    return array;
}

console.log(getInnerTextsOfElements(listElements));

//4
const links = document.querySelectorAll('a');
function getAddressesOfElements(elements) {
    let array = [];
    elements.forEach(el => {
        array.push(el.getAttribute('href'));
    });
    return array;
}
console.log(getAddressesOfElements(links));

//5
const children = document.querySelector('.sample_class_3').children;
console.log(getTagsOfElements(children));
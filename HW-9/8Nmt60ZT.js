
let div= document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.innerText='Hello!';

document.body.append(div);
let cloneNode = div.cloneNode(true);
document.body.cloneNode(true);
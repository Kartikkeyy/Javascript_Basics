let a=document.getElementsByClassName('contain')[0]

let div=document.createElement('div');
div.innerHTML = `<h1>Hello World!</h1>`;
a.prepend(div);
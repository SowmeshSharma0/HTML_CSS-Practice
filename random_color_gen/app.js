function GenRand(minR, maxR){
    return Math.floor(Math.random()*(maxR - minR + 1)) + minR
}

let col1=0;
let col2=0;
let col3=0;
function GetRandomColor(){
    col1= GenRand(0,255);
    col2= GenRand(0,255);
    col3 = GenRand(0,255);
    return `#${col1}${col2}${col3}`
}

const change_color_btn = document.querySelector('#change_color');
const body_ele = document.querySelector('body');
const h1_ele = document.querySelector('body h1');

change_color_btn.addEventListener('click', ()=>{
    body_ele.style.backgroundColor = GetRandomColor();
    h1_ele.innerText = `rgb(${col1}, ${col2}, ${col3})`;
});
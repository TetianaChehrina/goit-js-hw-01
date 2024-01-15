function getElementWidth (content, padding, border) {
let a = Number.parseFloat(content);
let p = Number.parseFloat(padding);
let b = Number.parseFloat(border);
return a + 2*p + 2*b;
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
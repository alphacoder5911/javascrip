const form=document.querySelector("form");
console.log(form)
form.addEventListener('submit',function(e){
e.preventDefault();
const h=parseInt(document.querySelector('#height').value)
const w=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#results');
if(h<0 || h==''||isNaN(h)){
    result.innerText="Enter value properly";
}
else if(w<0 ||w==''||isNaN(w)){
    result.innerText="Enter value properly";
}
else{
    const bmi=(w/((h*h)/1000)).toFixed(2);
    result.innerText=bmi;
}
})
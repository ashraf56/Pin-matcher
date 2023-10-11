
function getPin() {

    let Pin=generPin();

    let pnSt=Pin+'';

if(pnSt.length === 4){
    return Pin;
}
else{
    return getPin();
}
}

function generPin() {
    let Pin = Math.round(Math.random()*10000);
    return Pin;
}


document.getElementById('gen-button').addEventListener('click', function(){

let displaytf=document.getElementById('gen-input');

displaytf.value=getPin()





})


document.getElementById('calculator').addEventListener('click' , function(event){

   let number=event.target.innerText;
   let M=document.getElementById('matcher');
   let Previousnumber= M.value;
   if(isNaN(number)){
if(number === 'C'){
    M.value='';
}
else if(number === '<'){
let dg=Previousnumber.split('');
dg.pop()
let remainDG= dg.join('');
M.value=remainDG
}
   }
   else{
    
   let ne=Previousnumber + number;
   M.value=ne

   }
  

})


document.getElementById('submit-action').addEventListener('click', function(){

let generateFeild=document.getElementById('gen-input');
let x=generateFeild.value
let currentfeild=document.getElementById('matcher');
let Y=currentfeild.value;
let z=document.getElementById('notify-hide');
let n=document.getElementById('notify-unhide');

if(x == Y){
    alert('correct')
    z.style.display='none';
    n.style.display='block';
generateFeild.value='';
currentfeild.value='';
}else{
    alert('not correct');
   
     z.style.display='block';
    n.style.display='none';
    currentfeild.value='';
}





})
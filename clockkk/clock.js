const datee=document.getElementById("clockk");



setInterval(function(){
    let date= new Date();
   
    datee.innerText=date.toLocaleTimeString();
},1000);
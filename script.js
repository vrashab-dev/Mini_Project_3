let date = document.getElementById('D')
console.log(Date);
let time = document.getElementById('T')

setInterval(() => {
     let D=new Date();
     let T =D.toLocaleTimeString();
     let Dt =D.toDateString();
time.textContent = T;
date.textContent=Dt;
}, 1000);
const button1 = document.getElementById('btn1')
const button2 = document.querySelector('#btn2')
const button3 = document.querySelector('#btn3')
const button4 = document.querySelector('#btn4')

const apr=document.getElementById("changeapr")
const cost=document.getElementById("changecost")
const amount =document.getElementById("amount")


const arr=[50, 60, 70, 80]
const months={
    3: 50, 
    6:60,
    12: 70,
    24:80
}

button1.onclick= function() {
    calculateApr(3)
}
button2.onclick= function() {
    calculateApr(6)
}
button3.onclick= function() {
    calculateApr(12)
}
button4.onclick= function() {
    calculateApr(24)
}
function calculateApr(month) {
    const profit= month*((100*months[month])/12)
    const profit2 = ((100*months[month])/12)
    amount.innerHTML = '$ '+ (10000 + profit)
    apr.innerHTML =  (months[month])
    cost.innerHTML = Math.floor(profit2)  
}


// var button1,result,count=0;
// button1=document.querySelector('#btn1');
// result=document.querySelector()

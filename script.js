alert("Hi! I'll help you calculate Simlpe interest");
let principal, ri, time;
principal = prompt("Enter the principal amount");
ri = prompt("Enter the rate of interest");
time = prompt('Enter time in years');
var si = (principal * ri * time)/100;
document.write('<h1 id="script">The simple interest is $' + si )
//change the temperature in kelvin 
const kelvin = 0;
const celsius =  kelvin - 273;
let newton = celsius * (33/100);

newton = Math.floor(newton);
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
//can be changed to celsius, kelvin or newton
console.log(`the temperature is ${fahrenheit} degrees fahrenheit`);



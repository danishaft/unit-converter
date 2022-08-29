/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('count')
const btn = document.getElementById('convert-btn')
let conatiner = document.getElementById('container')

let meter = 1
let feet = 2
let gallon = 3
let liter = 4
let killos = 5
let pound = 6
let answer = '';


btn.addEventListener('click', () => {
    feet = inputEl.value*3.281
    meter = feet/inputEl.value

    gallon = inputEl.value*0.264
    liter = (inputEl.value/gallon)*inputEl.value

    pound = inputEl.value*2.204
    killos = inputEl.value*0.4537
    console.log(killos)

     answer = `
                    <div class="unit">
                        <h3>Length (Meter/Feet)</h3>
                        <p>${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet =  ${meter}  meters</p>
                    </div>
                    <div class="unit">
                        <h3>Volume (Liters/Gallons)</h3>
                        <p>${inputEl.value} liters =  ${gallon}  gallons | ${inputEl.value} gallons =  ${liter}  liters</p>
                    </div>
                    <div class="unit">
                        <h3>Mass (Kilograms/Pounds)</h3>
                        <p>${inputEl.value} kilos =  ${pound}  pounds | ${inputEl.value} pounds =  ${killos}  kilos</p>
                    </div>

                    `;

                    
                    
conatiner.innerHTML = answer
})



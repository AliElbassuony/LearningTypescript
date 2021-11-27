//interface
const me = {
    name: 'Ali',
    age: 19,
    speak(text) {
        console.log(text);
    }
};
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Ali', 'Salaf', 19);
const invTwo = new Invoice('Lolo', 'tax', 10);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

//interface
interface IsPerson {
    name: string;
    age: number;
    speak(word: string): void;
}

const me: IsPerson = {
    name: 'Ali',
    age: 19,
    speak(text: string): void {
        console.log(text);
    }
};


import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('Ali', 'Salaf', 19);
const invTwo = new Invoice('Lolo', 'tax', 10);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount,inv.format());
})


//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})
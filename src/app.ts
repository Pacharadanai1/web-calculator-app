import { Calculator } from './components/Calculator';

const calculator = new Calculator();
const display = document.getElementById('display') as HTMLInputElement;
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = (button as HTMLButtonElement).getAttribute('data-value');
        if (value === 'C') {
            display.value = '';
        } else if (value === 'B') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value).toString();
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});


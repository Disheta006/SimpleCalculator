const display= document.getElementById('display');
const buttons= document.querySelectorAll('.button-item');
function calculateResult() {
try {
    // handle the order of operation(BODMAS)
    display.value= eval(display.value);
}
catch (error) {
    display.value= 'Error';
}
}
buttons.forEach(button => {
    button.addEventListener('click',()=> {
        const buttonValue= button.textContent;
        switch(true) {
            case button.classList.contains('clear'):
                display.value='';
                break;
            case button.classList.contains('equals'):
                calculateResult();
                break;
            case button.classList.contains('delete'):
                display.value= display.value.slice(0,-1);
                break;
            default:
                display.value += buttonValue;
                break;
        }
    });
});

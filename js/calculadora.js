document.addEventListener('DOMContentLoaded', function() {
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');
    const dot = document.getElementById('dot');

    const clear = document.getElementById('clear');
    const equal = document.getElementById('equal');

    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const multiply = document.getElementById('multiply');
    const divide = document.getElementById('divide');

    const display = document.getElementById('display');
    const deleteButton = document.getElementById('delete-last');

    let numbers = [one, two, three, four, five, six, seven, eight, nine, zero];
    let operators = [plus, minus, multiply, divide];

    let operator = "";
    let equalPressed = false;


    deleteButton.addEventListener('click', () => {
        if(display.textContent.length === 1){
            display.textContent = '0';
        } else{
            display.textContent = display.textContent.slice(0, -1);
        }
    });


    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if(operator === "" && equalPressed === true){
                display.textContent = number.textContent;
                equalPressed = false;
            } else{
                if(display.textContent === '0'){
                    display.textContent = number.textContent;
                } else{

                    display.textContent += number.textContent;


                }
            }

        });
    });


    dot.addEventListener('click', () => {
        if(display.textContent.includes('.')){
            return;
        } else{
            display.textContent += '.';
        }
    });

    clear.addEventListener('click', () => {
        display.textContent = '0';
    });

    operators.forEach(item => {
        item.addEventListener('click', () => {
            operatorIcons = ['+', '-', '*', '/'];
            for(let i = 0; i < operatorIcons.length; i++){
                if(display.textContent.split("")[display.textContent.length - 1] === operatorIcons[i]){
                    display.textContent = display.textContent.slice(0, -1);
                }
            }
            display.textContent += item.textContent;
            operator = item.textContent;
            equalPressed = false;
            
        });
    });

    equal.addEventListener('click', () => {
        display.textContent = eval(display.textContent);
        operator = "";
        equalPressed = true;
    });


});
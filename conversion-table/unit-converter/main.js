$(document).ready(initializeApp)

function initializeApp(){
    $('.convert-button').click(convert)
}

function calculateAnswer(value, units){
    var answer = value * .865;
    answer = answer.toFixed(4)
    appendAnswer(answer, units)
}

function appendAnswer(answer, units){
    $('.answer-number').text(answer);
    $('.answer-units').text(units)
}

function pintConversion(inputValue, units){
    console.log(inputValue);
}

function convert(){
    var inputValue = parseFloat($('input').val())
    switch($('.unit-drop-down option:selected').val()) {
        case 'grams':
            switch($('.to-unit-drop-down option:selected').val()){
                case 'mL':
                calculateAnswer(inputValue, 'mL');
                break;
                case 'L':
                convertedValue = inputValue/1000;
                calculateAnswer(convertedValue, 'L')
                break;
                case 'oz':
                var answer = inputValue * 0.035274
                appendAnswer(answer, 'oz')
                break;
                case 'kg':
                var answer = inputValue / 1000;
                appendAnswer(answer, 'kg')
                break;
                case 'pint':
                pintConversion(inputValue, 'pints')
                var mLConversion = inputValue * .865;
                var pintAnswer = mLConversion * 0.00211338;
                appendAnswer(pintAnswer, 'pints')
                break;
            }
            break;
        case 'kg':
            console.log('kg')
            break;
        default:
            console.log('error')
    }
}
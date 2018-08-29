$(document).ready(initializeApp)



function initializeApp() {
    
    $('.convert-button').click(checkIfValid);
    $('.grams').css('display', 'none')
    
}

function removeDuplicate() {
    if ($('.unit-drop-down option:selected').val() === 'grams') {
        $('.grams').css('display', 'none')
        $('.kilograms').css('display', 'block')
    }
    else {
        $('.kilograms').css('display', 'none')
        $('.grams').css('display', 'block')
    }
}

function calculateAnswer(value, units) {
    var answer = value * .865;
    answer = answer.toFixed(4)
    appendAnswer(answer, units)
}

function appendAnswer(answer, units) {
    $('.answer-number').text(answer);
    $('.answer-units').text(units)
}
// function checkIfValid(){
//     if($('input').val() === ''){
//         $('input').addClass('error');
//         return;
//     }
//     else{
//         convertToReset()
//     }
// }
function checkIfValid(){

    const pageElement = $('#input-number')
    
    if (!pageElement.value) {
      $('input').addClass('error');
      
      return false;
    }
    else{
      $('input').removeClass('error');
      convert()
      return true;
    }
    
}


function convertToReset() {
   
    
    if (toggleButton === 0) {
        $('button').text('convert')
        $('input').val('')
        $('.answer-number').text('');
        $('.answer-units').text('')
        return;
    }
    else if (toggleButton === 1) {
        $('button').text('reset')
        convert()
    }
}

function convert() {

    var inputValue = parseFloat($('input').val())
    switch ($('.unit-drop-down option:selected').val()) {
        case 'grams':
            switch ($('.to-unit-drop-down option:selected').val()) {
                case 'mL':
                    calculateAnswer(inputValue, 'mL');
                    break;
                case 'L':
                    convertedValue = inputValue / 1000;
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
                    var mLConversion = inputValue * .865;
                    var pintAnswer = mLConversion * 0.00211338;
                    pintAnswer = pintAnswer.toFixed(4);
                    appendAnswer(pintAnswer, 'pints')
                    break;
                case 'gal':

                    var mLConversion = inputValue * .865;
                    var pintAnswer = mLConversion * 0.00211338;
                    var galAnswer = pintAnswer / 4
                    galAnswer = galAnswer.toFixed(4);
                    appendAnswer(galAnswer, 'gal')
                    break;
            }
            break;
        case 'kg':
            switch ($('.to-unit-drop-down option:selected').val()) {
                case 'mL':
                    inputValue = inputValue * 1000
                    calculateAnswer(inputValue, 'mL');
                    break;
                case 'L':
                    calculateAnswer(inputValue, 'L')
                    break;
                case 'oz':
                    var answer = inputValue * 35.274
                    appendAnswer(answer, 'oz')
                    break;
                case 'grams':
                    var answer = inputValue * 1000;
                    appendAnswer(answer, 'grams')
                    break;
                case 'pint':
                    inputValue = inputValue * 1000
                    var mLConversion = inputValue * .865;
                    var pintAnswer = mLConversion * 0.00211338;
                    pintAnswer = pintAnswer.toFixed(4);
                    appendAnswer(pintAnswer, 'pints')
                    break;
                case 'gal':
                    inputValue = inputValue * 1000;
                    var mLConversion = inputValue * .865;
                    var pintAnswer = mLConversion * 0.00211338;
                    var galAnswer = pintAnswer / 4
                    galAnswer = galAnswer.toFixed(4);
                    appendAnswer(galAnswer, 'gal')
                    break;
            }
            break;
        default:
            console.log('error')
    }

}





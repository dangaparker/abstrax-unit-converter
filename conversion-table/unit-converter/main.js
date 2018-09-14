$(document).ready(initializeApp)



function initializeApp() {
    $('.convert-button').click(checkIfValid);
    $('.reset-button').click(resetConverter);
    $('input').change(removeError);
    // $('unit-drop-down').on("change", removeDuplicate.bind(this))
}

// function removeDuplicate() {
//     debugger;
//     $('.unit-drop-down option:selected').each(function(){
//        var secondOpt = this.value
//        console.log('secondval', $('.to-unit-drop-down').val())
//         console.log('someitem', $('.to-unit-drop-down').val(secondOpt))         
    
//         $(this).siblings("[value" + this.value + "]").remove();
//     })

//    var firstOption = $('.unit-drop-down option:selected').text(); 
//    var secondOption = $('.to-unit-drop-down option').remove(firstOption);
//     secondOption.css('display', 'none')
//     $('.to-unit-drop-down option [value!=".unit-drop-down option:selected"]').css('display', 'block')    
//    $('.to-unit-drop-down option').val(firstOption).css('display', 'none');
//        if($('.to-unit-drop-down option').val() != firstOption){
            
       


    // if ($('.unit-drop-down option:selected').val() === 'grams') {
    //     $('.to-grams').css('display', 'none')
    //     $('.to-kg, .to-l, .to-oz, .to-pint, .to-gal, .to-ml').css('display', 'block')
    // }
    // else if ($('.unit-drop-down option:selected').val() === 'kg'){
    //     $('.to-kg').css('display', 'none')
    //     $('.grams, .to-grams, .to-l, .to-oz, .to-pint, .to-gal, .to-ml').css('display', 'block')
    // } 
    // else if ($('.unit-drop-down option:selected').val() === 'oz'){
    //     $('.to-oz').css('display', 'none')
    //     $('.oz, .to-grams, .to-l, .to-kg, .to-pint, .to-gal, .to-ml').css('display', 'block')
    // } 
    // else if ($('.unit-drop-down option:selected').val() === 'mL'){
    //     $('.to-ml').css('display', 'none')
    //     $('.ml, .to-grams, .to-l, .to-oz, .to-pint, .to-gal, .to-kg').css('display', 'block')
    // } 
    // else if ($('.unit-drop-down option:selected').val() === 'L'){
    //     $('.to-l').css('display', 'none')
    //     $('.l, .to-grams, .to-kg, .to-oz, .to-pint, .to-gal, .to-ml').css('display', 'block')
    // } 
    // else if ($('.unit-drop-down option:selected').val() === 'pint'){
    //     $('.to-pint').css('display', 'none')
    //     $('.pint, .to-grams, .to-l, .to-oz, .to-kg, .to-gal, .to-ml').css('display', 'block')
    // } 
    // else if ($('.unit-drop-down option:selected').val() === 'gal'){
    //     $('.to-gal').css('display', 'none')
    //     $('.gal, .to-grams, .to-l, .to-oz, .to-pint, .to-kg, .to-ml').css('display', 'block')
    // } 


function removeError() {
    $('input').removeClass('error');
}

function calculateAnswer(value, units) {
    var answer = value / .865;
    answer = answer.toFixed(4)
    appendAnswer(answer, units)
}

function appendAnswer(answer, units) {
    $('.answer-number').text(answer);
    $('.answer-units').text(units)
}

function checkIfValid() {
    const pageElement = $('#input-number').val()

    if (!pageElement) {
        $('input').addClass('error');
        return;
    }
    else {
        removeError();
        convert()
    }
}

function resetConverter() {
    $('input').val('')
    $('.answer-number').text(0);
    $('.answer-units').text('')
    if ($('input').hasClass('error')) {
        removeError();
    }
}

function truncate(answer){
    answer = answer.toFixed(3);
    return answer
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
                    var answer = inputValue * 0.0338
                    calculateAnswer(answer, 'oz')
                    break;
                case 'kg':
                    var answer = inputValue / 1000;
                    appendAnswer(answer, 'kg')
                    break;
                case 'pint':
                    var mLConversion = inputValue / .865;
                    var pintAnswer = mLConversion * 0.00211338;
                    pintAnswer = pintAnswer.toFixed(4);
                    appendAnswer(pintAnswer, 'pints')
                    break;
                case 'gal':
                    var mLConversion = inputValue / .865;
                    var galConversion = mLConversion / 3785;
                    galConversion = galConversion.toFixed(4);
                    appendAnswer(galConversion, 'gal')
                    break;
                case 'grams':
                    appendAnswer(inputValue, 'grams')
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
                    var pintAnswer = ((inputValue * 1000) / .865) / 473.176;
                    pintAnswer = pintAnswer.toFixed(3);
                    appendAnswer(pintAnswer, 'pints')
                    break;
                case 'gal':
                    var galAnswer = ((inputValue * 1000) / .865) / 3785.41;
                    galAnswer = galAnswer.toFixed(3);
                    appendAnswer(galAnswer, 'gal')
                    break;
                case 'kg':
                    appendAnswer(inputValue, 'kg')
                    break;
            }
            break;
        case 'oz':
        debugger
            switch ($('.to-unit-drop-down option:selected').val()) {
                case 'mL':
                    var mlAnswer = (inputValue * 28.3495) / .865;
                    appendAnswer(truncate(mlAnswer), 'mL')
                    break;
                case 'L':
                    var lAnswer =  ((inputValue * 28.3495) / .865)/1000;
                    appendAnswer(truncate(lAnswer), 'L')
                    break;
                case 'grams':
                    var gAnswer = inputValue * 28.3495;
                    appendAnswer(truncate(gAnswer), 'grams')
                    break;
                case 'pint':
                    var pintAnswer = ((inputValue * 28.3495) / .865)/473.176;
                    appendAnswer(truncate(pintAnswer), 'pints');
                    break;
                case 'gal':
                    var galAnswer = ((inputValue * 28.3495) / .865)/3785.41;
                    appendAnswer(truncate(galAnswer), 'gal');
                    break;
                case 'oz':
                    appendAnswer(inputValue, 'oz')
                    break;
                }
                break;
        case 'mL':
            switch($('.to-unit-drop-down option:selected').val()) {
                case 'L':
                    var lAnswer = inputValue / 1000;
                    appendAnswer(truncate(lAnswer), 'L')
                    break;
                case 'grams':
                    var gramAnswer = inputValue * .865;
                    appendAnswer(truncate(gramAnswer), 'grams')
                    break;
                case 'kg':
                    var kgAnswer = (inputValue * .865) / 1000;
                    appendAnswer(truncate(kgAnswer, 'kg'))
                    break;
                case 'oz':
                    var ozAnswer = ((inputValue * .865) / 28.3495)
                    appendAnswer(truncate(ozAnswer, 'oz'))
                    break;
                case 'pint':
                    var pintAnswer = inputValue / 473.176;
                    appendAnswer(truncate(pintAnswer), 'pints');
                    break;
                case 'gal':
                    var galAnswer = inputValue / 3785.41;
                    appendAnswer(truncate(galAnswer), 'gal');
                    break;
                case 'mL':
                    appendAnswer(inputValue, 'mL')
                    break; 
            }
            break;
        case 'L':
            switch ($('.to-unit-drop-down option:selected').val()) {
                case 'mL':
                    var mlAnswer = inputValue * 1000;
                    appendAnswer(truncate(mlAnswer), 'mL');
                    break;
                case 'grams':
                    var gramAnswer = (inputValue * 1000) * .865;
                    appendAnswer(truncate(gramAnswer), 'grams')
                    break;
                case 'kg':
                    var kgAnswer = ((inputValue * 1000) * .865)/1000;
                    appendAnswer(truncate(kgAnswer), 'kg');
                    break; 
                case 'oz':
                    var ozAnswer = ((inputValue * 1000) * .865) / 28.3495;
                    appendAnswer(truncate(ozAnswer), 'oz')
                    break;
                case 'pint':
                    var pintAnswer = (inputValue * 1000)/473.176;
                    appendAnswer(truncate(pintAnswer), 'pints');
                    break;
                case 'gal':
                    var galAnswer = (inputValue * 1000)/3785.41;
                    appendAnswer(truncate(galAnswer), 'gal')
                    break;
                case 'L':
                    appendAnswer(inputValue, 'L')
                    break;
            }
            break;
        case 'gal':
            switch ($('.to-unit-drop-down option:selected').val()) {
                case 'mL':
                    var mlAnswer = inputValue * 3785.41;
                    appendAnswer(truncate(mlAnswer), 'mL');
                    break;
                case 'L':
                    var lAnswer = (inputValue * 3785.41)/1000;
                    appendAnswer(truncate(lAnswer), 'L');
                    break;
                case 'g':
                    var gAnswer = (inputValue * 3785.41) * .865;
                    appendAnswer(truncate(gAnswer), 'grams');
                    break;
                case 'kg':
                    var kgAnswer = ((inputValue * 3785.41) * .865) / 1000;
                    appendAnswer(truncate(kgAnswer), 'kg');
                    break;
                case 'oz':
                    var ozAnswer = ((inputValue * 3785.31) * .865) / 28.3495;
                    appendAnswer(truncate(ozAnswer), 'oz');
                    break;
                case 'pint':
                    var pintAnswer = (inputValue * 8);
                    appendAnswer(truncate(pintAnswer), 'pints');
                    break; 
                case 'gal':
                    appendAnswer(inputValue, 'gal')
                    break; 
            }
            break;
        case 'pint':
            switch ($('.to-unit-drop-down option:selected').val()) {
                case 'mL':
                    var mlAnswer = inputValue * 473.176;
                    appendAnswer(truncate(mlAnswer), 'mL');
                    break;
                case 'L':
                    var lAnswer = (inputValue * 473.176) / 1000;
                    appendAnswer(truncate(lAnswer), 'L');
                    break;
                case 'g':
                    var gAnswer = (inputValue * 473.178) * .865;
                    appendAnswer(truncate(gAnswer), 'grams');
                    break;
                case 'kg':
                    var kgAnswer = ((inputValue * 473.178) * .865) / 1000;
                    appendAnswer(truncate(kgAnswer), 'kg');
                    break;
                case 'oz':
                    var ozAnswer = ((inputValue * 473.178) * .865) / 28.3495;
                    appendAnswer(truncate(ozAnswer), 'oz');
                    break;
                case 'gal':
                    var galAnswer = (inputValue / 8);
                    appendAnswer(truncate(galAnswer), 'gal');
                    break;
                case 'pint':
                    appendAnswer(inputValue, 'pints')
                    break;
            }
        default:
            console.log('error')
    }
}






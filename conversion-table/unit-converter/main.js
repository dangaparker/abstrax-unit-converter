$(document).ready(initializeApp)

function initializeApp(){
    $('.convert-button').click(convert)
}

function convert(){
    console.log('clicked')
    var conversion = parseInt($('input').val());
    conversion = conversion + 2
    console.log(conversion)
}
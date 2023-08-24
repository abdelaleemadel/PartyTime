export default class Counter {
    constructor() {
    }
    countChar() {
        const textArea = $('#exampleFormControlTextarea1');
        let enteredChar = textArea.val().length;
        $('#charNumber').html(`${100 - enteredChar}`)

        if (enteredChar < 100) {
            $('.enough').slideUp();

        } else {
            $('.enough').first(':hidden').slideDown();
        }
    }
}
/** code for 'MOVIE QUOTES QUIZ' */

function submitQuiz() {
    console.log('submitted');

    /**  get each answer tally and its radio button value */
    function answerTally (qName) {
        var radioButtons = document.getElementsByName(qName);

        for (var i = 0, length = radioButtons.length; i < length; i++) {
               if (radioButtons[i].checked) {
                    var answerValue = Number(radioButtons[i].value);
        }
    }
    if (isNaN(answerValue)) {
        answerValue = 0;
    }
    return answerValue;
}

/** use answerTally function to calculate score*/ 
    var calculateScore =


    function correctAnswer () {

    }

    /** if statments for correctAnswer function */
    {

    }

    var questionCount =


    var showResults =
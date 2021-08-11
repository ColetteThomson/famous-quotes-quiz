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
    var calculateScore = (answerTally('question1') + answerTally('question2') + answerTally('question3') + answerTally('question4')
    + answerTally('question5') + answerTally('question6') + answerTally('question7') + answerTally('question8') 
    + answerTally('question9') + answerTally('question10'));
    console.log("CalculateScore: " + calculateScore); 

    /** use correctAnswer function to return correct option as a string */
    function correctAnswer (correctOptionNumber, questionNumber) {
        console.log("questionNumber: " + questionNumber);  // logs 1,2,3,4 after called below
        return ("The correct answer for question " + questionNumber + " is &nbsp;<strong>" +
            (document.getElementById(correctOptionNumber).innerHTML) + "</strong>");
    }

    

    /** if statments for correctAnswer function */
    {

    }

    var questionCount =


    var showResults =
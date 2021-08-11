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

    /** use correctAnswer function to print correct answers, if user answers incorrectly */
    if (answerTally('question1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctOption1', 1);
    }
    if (answerTally('question2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctOption2', 2);
    }
    if (answerTally('question3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctOption3', 3);
    }
    if (answerTally('question4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctOption4', 4);
    }
    if (answerTally('question5') === 0) {
        document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctOption5', 5);
    }
    if (answerTally('question6') === 0) {
        document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctOption6', 6);
    }
    if (answerTally('question7') === 0) {
        document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctOption7', 7);
    }
    if (answerTally('question8') === 0) {
        document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctOption8', 8);
    }
    if (answerTally('question9') === 0) {
        document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctOption9', 9);
    }
    if (answerTally('question10') === 0) {
        document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctOption10', 10);
    }

    var questionCount =


    var showResults =
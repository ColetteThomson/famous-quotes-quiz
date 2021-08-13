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
        console.log("questionNumber: " + questionNumber);  

        return ("The correct answer for question " + questionNumber + " is &nbsp;<strong>" +
            (document.getElementById(correctOptionNumber).innerHTML) + "</strong>");
    }

    /** use correctAnswer function to print correct answers, if user answers incorrectly */
    if (answerTally('question1') === 0) {
        document.getElementById('userAnswer1').innerHTML = correctAnswer('correctOption1', 1);
    }
    if (answerTally('question2') === 0) {
        document.getElementById('userAnswer2').innerHTML = correctAnswer('correctOption2', 2);
    }
    if (answerTally('question3') === 0) {
        document.getElementById('userAnswer3').innerHTML = correctAnswer('correctOption3', 3);
    }
    if (answerTally('question4') === 0) {
        document.getElementById('userAnswer4').innerHTML = correctAnswer('correctOption4', 4);
    }
    if (answerTally('question5') === 0) {
        document.getElementById('userAnswer5').innerHTML = correctAnswer('correctOption5', 5);
    }
    if (answerTally('question6') === 0) {
        document.getElementById('userAnswer6').innerHTML = correctAnswer('correctOption6', 6);
    }
    if (answerTally('question7') === 0) {
        document.getElementById('userAnswer7').innerHTML = correctAnswer('correctOption7', 7);
    }
    if (answerTally('question8') === 0) {
        document.getElementById('userAnswer8').innerHTML = correctAnswer('correctOption8', 8);
    }
    if (answerTally('question9') === 0) {
        document.getElementById('userAnswer9').innerHTML = correctAnswer('correctOption9', 9);
    }
    if (answerTally('question10') === 0) {
        document.getElementById('userAnswer10').innerHTML = correctAnswer('correctOption10', 10);
    }

    /** calculate number of questions using html class'question'*/
    var questionCount = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCount.length; i < length; i++) {
        questionCounter++;
    }

    /** show correct answers out of questionCount" */
    var showResults = "Your Score: " + calculateScore +"/" + questionCounter;
    if (calculateScore === questionCounter) {
        showResults = showResults + "&nbsp; <strong>Well done, a perfect score!</strong>"
    } else {
        showResults = showResults + "&nbsp; <strong>Better luck next time!</strong>"
    };
    document.getElementById('userScore').innerHTML = showResults;
}

function resetQuiz () {
    window.location.reload(false);
}
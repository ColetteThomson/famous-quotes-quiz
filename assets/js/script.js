/* submit quiz function */
function submitQuiz() {
    console.log('submitted');

    /**  get each answer tally and its radio button value */
    function answerTally (qName) {
        var radioButtons = document.getElementsByName(qName);
        var answerValue;
        for (var i = 0, length = radioButtons.length; i < length; i++) {
            if (radioButtons[i].checked) {
            answerValue = Number(radioButtons[i].value);
        }
    }
    if (isNaN(answerValue)) {
        answerValue = 0;
    }
    return answerValue;
}

    /** use answerTally function to calculate score for 'Movie Quotes Quiz' */ 
    var calculateScore = (answerTally('question1') + answerTally('question2') + answerTally('question3') + answerTally('question4') +
    answerTally('question5') + answerTally('question6') + answerTally('question7') + answerTally('question8') + answerTally('question9') + 
    answerTally('question10'));
    console.log("CalculateScore: " + calculateScore); 

    /** use answerTally function to calculate score for 'Actor Quotes Quiz'*/ 
    var calculateScore1 = (answerTally('question1') + answerTally('question2') + answerTally('question3') + answerTally('question4') +
    answerTally('question5') + answerTally('question6') + answerTally('question7') + answerTally('question8') + answerTally('question9') + 
    answerTally('question10'));
    console.log("CalculateScore1: " + calculateScore1); 

    /** use correctAnswer function to return correct option as a string */
    function correctAnswer (correctOptionNumber, questionNumber) {
        console.log("questionNumber: " + questionNumber);  

        return ("Q" + questionNumber + " answer: <strong>" +
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

    /** calculate number of questions using html class: 'question' */
    var questionCount = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCount.length; i < length; i++) {
        questionCounter++;
    }

    /** show correct answers out of questionCount */
    var showResults = "<strong>Your Score: </strong>" + calculateScore +"/" + questionCounter;
    if (calculateScore === questionCounter) {
        message1();
    } else {
        showResults = showResults + "&nbsp; <strong>Better luck next time!</strong>";
    }
    document.getElementById('userScore').innerHTML = showResults;
}

/*displays 'overlay message' for 10/10 scores */
function message1() {
    if (localStorage.getItem("users")) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").innerText = "Congratulations " +
    window.localStorage.getItem('users') + "! You scored the perfect 10!";
} else {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").innerText = "Congratulations! You scored the perfect 10!";
}
} 

/* return scroll position to top of page, before resetQuiz() reloads the page */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/** button to reset quiz */
function resetQuiz () {
    window.location.href = window.location.href;
}


/* check if element exists (only exists on the 2 quiz pages) */
if (document.getElementById("countdown")) {
    /* countdown timer for quizzes, starts when page loads */
    var timeRemaining = 30;
    var downloadTimer = setInterval(function () {
        document.getElementById("countdown").innerHTML = `${timeRemaining}<br> secs left`;
        timeRemaining -= 1;

        /* message displayed to user when countdown reaches 0 secs */
        if (timeRemaining <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "<strong>Time's up!</strong> <br> Quiz'<br> will reset in 7 secs.";
            
            /* time delay of 7 secs before countdown restarts */
            setTimeout(function () {
                window.location.reload();
            }, 7000);
        }
    }, 1000);
} else {
  console.log('countdown element missing');
} 

/*prompt user to enter username and display result in html id: 'message' on homepage */
const form = document.getElementById('form1');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = event.target.name.value;

    /* store username in local storage */
    localStorage.setItem('users', userName);
    var data = localStorage.getItem('users');

    /* message displayed to user */
    document.getElementById("message").innerText = "Hello " + data;

    /* to hide form, once 'submit' is pressed */
     document.getElementById("form1").style.display = "none"; 
});
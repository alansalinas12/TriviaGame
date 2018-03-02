$(document).ready(function() {



    $("#start").on("click", function() {

        $(".ansBtn").css('visibility', 'visible');
        $("#start").css('visibility', 'hidden');
        initQuestions();
        timer.start();
        displayQs();
        displayAs();

	});

    var userSelect = "";

	var numberQuestions = 10,
		currentQuestion,
		currentChoices,
		numberCorrect = 0,
		numberIncorrect = 0;


	var questions;
	

	function initQuestions() {
	questions = [];
	questions.push(
		{
			name: "q1",
			q: "What is the main ingredient of Mac and Charlie's 'Fight Milk'?",
			correct: "Crow's eggs",
			incorrect: ["Bull's semen", "Rat's milk", "Gorilla urine"]
		},
		{
			name: "q2",
			q: "What is Mac's complete name?",
			correct: "Ronald McDonald",
			incorrect: ["Luther Macwell", "Mac Machintosh", "Jack Macallister"]
		},
		{
			name: "q3",
			q: "What drug did Dee and Dennis get addicted to?",
			correct: "Crack",
			incorrect: ["Heroine", "PCP", "Meth"]
		},
		{
			name: "q4",
			q: "What is the brand name of the soda Frank makes?",
			correct: "Wolf Cola",
			incorrect: ["Spider Cola", "Fizzy Jizzy", "Blue Bull"]
		},
		{
			name: "q5",
			q: "Charlie claims to have a degree in what?",
			correct: "Bird Law",
			incorrect: ["Rat anatomy", "Javascript Programmer", "Homeopathic Medicine"]
		},
		{
			name: "q6",
			q: "What was the profession of Charlie's mother?",
			correct: "Prostitute",
			incorrect: ["Nurse", "Maid", "Exotic Dancer"]
		},
		{
			name: "q7",
			q: "What action movie does the gang try to recreate?",
			correct: "Lethal Weapon",
			incorrect: ["Rambo", "Karate Kid", "Rush Hour"]
		},
		{
			name: "q8",
			q: "Who got Dee pregnant?",
			correct: "Carmen",
			incorrect: ["Mac", "Bill Ponderosa", "Ben the Soldier"]
		},
		{
			name: "q9",
			q: "In what season did Mac become Fat Mac?",
			correct: "Season 7",
			incorrect: ["Season 4", "Season 5", "Season 6"]
		},
		{
			name: "q10",
			q: "Which of the following has never been an alias of Matthew Mara?",
			correct: "The Ham-burgler",
			incorrect: ["Rickety Cricket", "Street Urchin", "The Talibum"]
		}		
	)};

	var timer = {
		time: 10,

		start: function() {
			counter = setInterval(timer.count, 1000);
		},

		count: function() {

			timer.time--;
			var converted = timer.timeConverter(timer.time);
			$("#timer").text(converted);
			if (timer.time === 0) {
				checkAnswer();				
			} 
		
		},

		stop: function() {
			clearInterval(counter);
		},

		timeConverter: function(t) {

			var minutes = Math.floor(t / 60);
			var seconds = t - (minutes * 60);
			if (seconds < 10) {
			    seconds = "0" + seconds;
			}
			if (minutes === 0) {
			    minutes = "00";
			} else if (minutes < 10) {
			    minutes = "0" + minutes;
			}
			return minutes + ":" + seconds;
		},

		reset: function() {
			timer.time = 10;
			$("#timer").text("00:10");
		},

	};

	$(".ansBtn").on("click", function() {
		userSelect = $(this).find('span').text();
		checkAnswer();
	});

	function checkAnswer() {


        console.log(userSelect);

        if (userSelect === currentQuestion.correct) {
            numberCorrect += 1;
            numberQuestions -= 1;

            $("#choiceAlert").html("That's right jabroni! Keep it up!");
            timer.stop();
            $("#timer").empty();
            $('#answer1').find('span').empty();
            $('#answer2').find('span').empty();
            $('#answer3').find('span').empty();
            $('#answer4').find('span').empty();
            $('#question-display').empty();
            $("#correct-count").text("Correct: " + numberCorrect);



            timeoutQ = setTimeout(displayQs, 2000);
            timeoutA = setTimeout(displayAs, 2000);
            timeoutRestart = setTimeout(timer.reset, 2000);
            timeoutStart = setTimeout(timer.start, 2010);



        } else {
            $("#choiceAlert").text("NO! That's not it BOZO! The correct answer is " + currentQuestion.correct);
            numberIncorrect += 1;
            numberQuestions -= 1;
            timer.stop();

            $("#incorrect-count").text("Incorrect: " + numberIncorrect);
            $("#timer").empty();
            $('#answer1').find('span').empty();
            $('#answer2').find('span').empty();
            $('#answer3').find('span').empty();
            $('#answer4').find('span').empty();
            $('#question-display').empty();

            timeoutQ = setTimeout(displayQs, 2000);
            timeoutA = setTimeout(displayAs, 2000);
            timeoutRestart = setTimeout(timer.reset, 2000);
            timeoutStart = setTimeout(timer.start, 2010);
        }

        if (numberQuestions === 0) {
    		gameReset();
    	}

	};

function displayQs() {

    		$("#choiceAlert").empty();
    		randomQuestion = Math.floor(Math.random() * questions.length)
    		currentQuestion = questions[randomQuestion];
    		
    		$("#question-display").text(currentQuestion.q);
   
			questions = questions.slice(0, randomQuestion).concat(questions.slice(randomQuestion + 1, questions.length));

	};

function displayAs() {

		currentChoices = [
		
		currentQuestion.correct, 
		
		currentQuestion.incorrect[0], 
		
		currentQuestion.incorrect[1], 
		
		currentQuestion.incorrect[2]
	]
	
	function shuffleArray(array) {
	    for (let i = array.length - 1; i > 0; i--) {
	        let j = Math.floor(Math.random() * (i + 1));
	        [array[i], array[j]] = [array[j], array[i]];
	    }

	}
	shuffleArray(currentChoices);

	$('#answer1').find('span').text(currentChoices[0]);
	$('#answer2').find('span').text(currentChoices[1]);
	$('#answer3').find('span').text(currentChoices[2]);
	$('#answer4').find('span').text(currentChoices[3]);
    
    };

function gameReset() {
	if (window.confirm("You got a total of " + numberCorrect + " answers correct and you chose the incorrect answer " + numberIncorrect + " times. Press OK to restart the game.")) {
		
		
		$("#start").css('visibility', 'visible');
		$(".ansBtn").css('visibility', 'hidden');
		$("#timer").empty();
		$("#correct-count").text("Correct: 0");
		$("#incorrect-count").text("Incorrect: 0");
      	$('#answer1').find('span').empty();
      	$('#answer2').find('span').empty();
      	$('#answer3').find('span').empty();
      	$('#answer4').find('span').empty();
      	$('#question-display').empty();
      	$("#choiceAlert").empty();


      	clearTimeout(timeoutQ);
        clearTimeout(timeoutA);
        clearTimeout(timeoutRestart);
        clearTimeout(timeoutStart);
        clearInterval(counter);


      	numberQuestions = 10;
      	numberCorrect = 0;
		numberIncorrect = 0;
		timer.time = 10;

	}
}


});
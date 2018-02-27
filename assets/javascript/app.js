$(document).ready(function() {

    $("#start").on("click", function() {

        numberQuestions--;
        timer.start();
        timer.count();
        displayQs();
        displayAs();

	})

	var numberQuestions = 11,
		currentQuestion,
		currentChoices,
		numberCorrect = 0,
		numberIncorrect = 0,
		numberUnanswered = 0,

	var questions = [
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
		},		
	]

	var timer = {
		time: 10,

		start: function() {
			counter = setInterval(timer.count, 1000);
		},

		count: function() {
			timer.time--;
			var converted = timer.timeConverter(timer.time);
			$("#timer").html(converted);
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
		}
	}

	function checkAnswer() {
    $(".ansBtn").on("click", function() {

        var userSelect = this.innerHTML;

        if (userSelect === activeQuestion.correct) {
            numberCorrect += 1;

            $("#choiceAlert").html("That's right jabroni! Keep it up!");
            timer.stop();
            $("#timer").empty();
            $("#answer1").empty();
            $("#answer2").empty();
            $("#answer3").empty();
            $("#answer4").empty();
            $("#question-display").empty();

            setTimeout(displayQs, 2000);
            setTimeout(displayAs, 2000);
            setTimeout(timer.reset, 2000);
            setTimeout(timer.start, 2001);


        } else {
            $("#choiceAlert").text("NO! Try again bozo");
            numberIncorrect += 1;
	}



	function displayAs() {
		
		currentChoices = [
		
		currentQuestion.correct, 
		
		currentQuestion.incorrect[0], 
		
		currentQuestion.incorrect[1], 
		
		currentQuestion.incorrect[2]
	]

		var shuffleAnswers = Math.random(currentChoices.length);
		$("#answer1").text(shuffleAnswers[0]);
		$("#answer2").text(shuffleAnswers[1]);
		$("#answer3").text(shuffleAnswers[2]);
		$("#answer4").text(shuffleAnswers[3]);
    };

    function displayQs() {
    currentQuestion = questions[i++];
    $("#question-display").text("<h3>" + currentQuestion.q + "</h3>");
}



});
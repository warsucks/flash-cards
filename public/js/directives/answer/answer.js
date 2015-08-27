app.directive('answer', function(ScoreFactory){
	return {
		restrict: "E",
		templateUrl: 'js/directives/answer/answer.html',
		link: function(scope, element, attrs){
				  element.bind('click', function ()
				  {
				  	console.log(scope);
				  	console.log(scope.answer.correct);
				    if(scope.answer.correct)
				    {
				      scope.card.answeredCorrectly = true;
				      console.log(ScoreFactory.correct);
				      ScoreFactory.correct++;
				    }
				    else
				    {
				      ScoreFactory.incorrect++;
				    }
				    scope.card.answered = true;
				  });
    	}
	};
});


 // we nailed this part atleast
 // im glad you called the ticket guy he helped a lot
 // also im pretty sure i have gabe's exact jacket
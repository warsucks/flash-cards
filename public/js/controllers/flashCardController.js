app.controller('FlashCardController', function($scope, ScoreFactory)
{
  $scope.answeredCorrectly;
  $scope.answered;
  $scope.answerQuestion = function (answer)
  {
    if(answer.correct)
    {
      $scope.answeredCorrectly = true;
      ScoreFactory.correct++;
    }
    else
    {
      ScoreFactory.incorrect++;
    }
    $scope.answered = true;
  }
});

app.controller('MainController', function($scope, FlashCardsFactory) {

  var futureFlashCards = FlashCardsFactory.getFlashCards();

  futureFlashCards
  .then(function(flashCards)
  {
    $scope.flashCardNum = 0
    $scope.flashCards = flashCards;
    $scope.currentFlashCard = flashCards[0];
  });

  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  $scope.currentCategory;

  $scope.nextQuestion = function()
  {
      $scope.currentFlashCard = $scope.flashCards[++$scope.flashCardNum];
      //console.log('want next question');
  }

  $scope.getCategoryCards = function(category)
  {
    FlashCardsFactory.getFlashCards(category)
    .then(function(flashCards)
    {
      $scope.flashCardNum = 0
      $scope.flashCards = flashCards;
      $scope.currentFlashCard = flashCards[0];
      $scope.currentCategory = category;
    });
  }

});

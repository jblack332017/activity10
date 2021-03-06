angular.module('comment', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
	$scope.comments = [
      {title:'Comment 1', upvotes:5},
      {title:'Comment 2', upvotes:6},
      {title:'Comment 3', upvotes:1},
      {title:'Comment 4', upvotes:4},
      {title:'Comment 5', upvotes:3}
    ];
    $scope.test = 'Hello world!';

    $scope.addComment = function() {
      $scope.comments.push({title:$scope.formContent,upvotes:0});
      $scope.formContent='';
    };

    $scope.incrementUpvotes = function(comment) {
      comment.upvotes += 1;
    };
  }
]);

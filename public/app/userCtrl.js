angular.module('blade')
	.controller('UserCtrl', function($scope, movieFactory){

		$scope.userMovies = firebaseFactory.userInfo;

		$scope.watchedValue = false;

		$scope.toggleDisplayList = (bool) => {
			$scope.watchedValue = bool;
		}

		$scope.markWatched = (movie) => {
			movie.watched = true;
		}
	})

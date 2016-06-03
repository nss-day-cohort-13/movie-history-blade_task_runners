angular.module('app', ['movieFactory', 'firebaseFactory'])
	.controller('UserCtrl', function($scope){

		$scope.userMovies = firebaseFactory.userInfo;

		$scope.watchedValue = false;

		$scope.toggleDisplayList = (bool) => {
			$scope.watchedValue = bool;
		}

		$scope.markWatched = (movie) => {
			movie.watched = true;
		}
	})

angular.module('blade')
	.controller('UserCtrl', function($scope, firebaseFactory){

		$scope.userMovies = [
			{
				title: 'Blade Runner',
				year: '1982',
				actors: 'Harrison Ford',
				user_rating: 0,
				watched: true
			},
			{
				title: '8 1/2',
				year: '1963',
				actors: 'Marcello Mastroianni',
				user_rating: 0,
				watched: false
			},
			{
				title: 'No',
				year: '2013',
				actors: 'Gael Garcia Bernal',
				user_rating: 0,
				watched: false
			}
		];

		$scope.watchedValue = false;

		$scope.toggleDisplayList = (bool) => {
			$scope.watchedValue = bool;
		}

		$scope.markWatched = (movie) => {
			movie.watched = true;
		}
	})

angular.module('blade')
	.controller('UserCtrl', function($scope){

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

// $scope.watchedValue is set to true/false depending on which movies the user wants to see
	// if watchedValue = false (that's the default set below), the Watchlist movies will show
	// if watchedValue = true, the Watched movies will show
		$scope.watchedValue = false;

// $scope.userSearch is bound to the text input in the user-navbar
	// it is set to an empty string here, waiting for user input
		$scope.userSearch = '';

// toggleDisplayList is the function that fires when either the "Watchlist" or "Watched" button is clicked
	// if the "Watchlist" button is clicked, "false" is passed into the function as "bool"
	// if the "Watched" button is clicked, "true" is passed into the function as "bool"
		$scope.toggleDisplayList = (bool) => {
			$scope.watchedValue = bool;
		}

// markWatched is the function that fires when a user clicks the "Mark as Watched" button
	// It takes as an argument the movie data object contained in the card with the button the user clicked
	// ...then it sets the "watched" property on that object to true
		$scope.markWatched = (movie) => {
			movie.watched = true;
		}

// Similar to markWatched, markNotWatched is the function that fires when a user clicks the "Mark as Not Watched" button
	// It takes as an argument the movie data object contained in the card with the button the user clicked
	// ...then it sets the "watched" property on that object to false
		$scope.markNotWatched = (movie) => {
			movie.watched = false
		}
	})

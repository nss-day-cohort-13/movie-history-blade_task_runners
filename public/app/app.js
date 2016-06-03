angular.module('blade', ['ngRoute', 'firebase'])
	.config(($routeProvider) => {
		$routeProvider
			.when('/search', {
				templateUrl: 'app/partials/search.html',
				controller: 'SearchCtrl'
			})
			.when('/', {
				templateUrl: 'app/partials/login.html',
				controller: 'LoginCtrl'
			})
			.when('/user', {
				templateUrl: 'app/partials/user.html',
				controller: 'UserCtrl'
			})
			.otherwise('/');
	})







	.constant('API_URL', 'http://www.omdbapi.com/' )
	.constant('firebase_URL', 'https://blade-taskrunners.firebaseio.com/')

	.factory("Auth", ["$firebaseAuth", ($firebaseAuth) => {
	   return $firebaseAuth();
	  }
	]);
	.factory('movieFactory', ($http, API_URL) => {
    let searchResults = null;
    let actors = null;

    return {
      searchMovies(userSearch) {
        return $http
          .get(`${API_URL}?s=${userSearch}&type=movie&r=json`)
          .then(response => response.search)
          .then(rd => searchResults = rd)
      },
      movieInfo(IMDBid) {
        return $http
          .get(`${API_URL}?i=${IMDBid}&r=json`)
          .then(response => actors = response.actors)
      }
    }
	})
	.factory('firebaseFactory', ($http, firebase_URL) => {
  return {
    getUserInfo(userID) {
      let userInfo = null;

      return $http
        .get(`${firebase_URL}/${userID}.json`)
        .then(response => userInfo = response.data)
    },
    addMovie(userID, movieData) {
      return $http
        .post(`${firebase_URL}/${userID}.json`, movieData)
    },
    updateWatched(userID, movieID, watchedValue) {
      return $http
        .patch(`${firebase_URL}/${userID}/${movieID}/watched.json`, watchedValue)
    },
    deleteMovie(userID, movieID) {
      return $http
      	.delete(`${firebase_URL}/${userID}/${movieID}.json`)
    }
  }
	})
	.service(/* functionality needed across modules */)
		//constructor to make user object the way we want it
	.controller('LoginCtrl', function() {
		//default page
		//login links to firebase
		//if user clicks "addmovie" it triggers login screen
		//user clicks login button, it triggers login screen
	})
	.controller('SearchCtrl', function() {

	})
	.controller('UserCtrl', {
		//toggle watched
	})

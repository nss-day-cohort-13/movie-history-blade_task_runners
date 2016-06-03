angular.module('blade', ['ngRoute'])
	.config(($routeProvider) => {
		$routeProvider
			.when('/', {
				templateUrl: 'app/partials/search.html',
				controller: 'SearchCtrl'
			})
			.when('/login', {
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

	.factory('movieFactory', ($http, API_URL) => {
    var searchResults = 1;
    let actors = null;

    return {
      searchMovies(userSearch) {
        return $http
          .get(`${API_URL}?s=${userSearch}&type=movie&r=json`)
          // .then(response => response.data)
          // .then(rs => searchResults = rs)
      },
      movieInfo(IMDBid) {
        return $http
          .get(`${API_URL}?i=${IMDBid}&r=json`)
          .then(response => actors = response.data.Actors)
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
	.controller('LoginCtrl', function() {

	})


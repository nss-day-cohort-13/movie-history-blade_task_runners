angular.module('blade')
  .controller('SearchCtrl', function($scope, movieFactory) {

    //performs search when search button is clicked
    $scope.performSearch = (userText) => {

      //calls the searchMovies call from factory, passing in the userText
      movieFactory.searchMovies(userText)
        //store the Search part of the response data in the scope
        .then(searchResults => $scope.searchedMoviesList = searchResults.data.Search)

        .then(searchedMoviesList => {
          //loops over each movie in the Search response
          searchedMoviesList.forEach((movie) => {
            //performs the factory call for each movie
            movieFactory.movieInfo(movie.imdbID)
              //adds the key "Actors" to each movieand gives it the correct value from the API
              .then(response => movie.Actors = response);
          });
        });
    };

    $scope.addMovieToWatchlist = (movie) => {
      console.log("test", movie);
      //add movie to firebase under user account
      //disable ADD TO WATCHLIST button
    };
  });

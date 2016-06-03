angular.module('blade')
  .controller('SearchCtrl', function($scope, movieFactory) {
    let searchedMoviesList = null;

    $scope.performSearch = (userText) => {
      movieFactory.searchMovies(userText)
        .then(searchResults => $scope.searchedMoviesList = searchResults.data.Search)
        .then(searchedMoviesList => {
          searchedMoviesList.forEach((movie) => {
            movieFactory.movieInfo(movie.imdbID)
              .then(response => movie.Actors = response)
          })
        })
    }

    $scope.addMovieToWatchlist = (movie) => {
      console.log("test", movie);
    }
  })

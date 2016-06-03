angular.module('blade')
  .controller('LoginCtrl', ["$scope", "$firebaseAuth",
    function($scope, $firebaseAuth) {
      var auth = $firebaseAuth();

      $scope.login = () => {
        $scope.email = null;
        $scope.password = null;
        $scope.error = null;

        auth.signInWithEmailAndPassword(email, password).then( ) => {

        }).catch( (error) => {
          $scope.errorCode = error.code;
        });
      };

      $scope.createAccount = function() {
        $scope.message = null;
        $scope.error = null;

        Auth.$createUser({
          email: $scope.email,
          password: $scope.password
        }).then(function(userData) {
          $scope.message = "User created with uid: " + userData.uid;
        }).catch(function(error) {
          $scope.error = error;
        });
      };
    }
]);

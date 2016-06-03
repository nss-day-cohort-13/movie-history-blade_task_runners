angular.module('blade')
  .controller('LoginCtrl', ["$scope", "$firebaseAuth",
    function($scope, $firebaseAuth) {
      var Auth = $firebaseAuth();

      $scope.login = () => {
        $scope.error = null;

        Auth.signInWithEmailAndPassword(email, password).catch( (error) => {
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

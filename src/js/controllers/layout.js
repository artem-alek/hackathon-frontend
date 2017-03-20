function LayoutController ($scope, $rootScope, $cookies, $state, $http) {

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $cookies.remove('user-id');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('root.home');
  };

  $scope.goProfile = () => {
    let userId = $cookies.get('user-id');
    $state.go('root.user', { userid: userId });
  }

}

LayoutController.$inject = ['$scope', '$rootScope', '$cookies', '$state', '$http'];


export default LayoutController;

function LayoutController ($scope, $rootScope, $cookies, $state, $http) {

  $scope.user = [];

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $cookies.remove('user-id');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('root.home');
  };

  function init () {
    let userid = $cookies.get('user-id');
    $scope.user.push(userid);

  }

  init();
}

LayoutController.$inject = ['$scope', '$rootScope', '$cookies', '$state', '$http'];


export default LayoutController;

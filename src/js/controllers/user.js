function UserController ($scope, $http, SERVER, $state, $cookies, $rootScope) {

  $scope.signUp = (user) => {
    console.log(user);
    $http.post(`${SERVER}/users`, user).then(resp => {
      console.log(resp);
      console.log('user created');
    }).catch(error => {
        console.log(error);
    });
  };

  $scope.signIn = (user) => {
    //console.log('from inside signin');
    // console.log(user);
    $http.post(`${SERVER}/login`, user).then(resp => {
      // console.log(user)
      $rootScope.loggedIn = true;
      console.log(resp.data);
      $cookies.put('access-token', resp.data.token);
      $cookies.put('user-id', resp.data.user.id);
      $http.defaults.headers.common['access-token'] = resp.data.token;
      $state.go('root.home');
    }).catch(error => {
        console.log(error);
    });
  };


}

UserController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope'];

export default UserController;

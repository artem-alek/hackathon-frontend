function UserController ($scope, $http, SERVER, $state, $cookies,  $rootScope) {

    $scope.signUp = (user) => {
        $http.post(`${SERVER}/users`, user).then(resp => {
            // let message = `Created new user: ${resp.data.name}`;
            // $scope.notifications.push(message);
            console.log(resp);
            console.log('user created')
        }).catch(error => {
            console.log(error);
        });
    };

    $scope.signIn = (user) => {
        $http.post(`${SERVER}/login`, user).then(resp => {
            $rootScope.loggedIn = true;
            $cookies.put('access-token', resp.data.token);
            $http.defaults.headers.common['access-token'] = resp.data.token;
            $state.go('root.home');
        }).catch(error => {
            console.log(error);
            $scope.notifications.push(error.data.message);
        });
    };


}

UserController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', ' $rootScope'];

export default UserController;

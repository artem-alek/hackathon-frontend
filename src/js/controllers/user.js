function UserController ($scope, $http, SERVER, $state) {


    $scope.signUp = (user) => {
        $http.post(`${SERVER}/users`, user).then(resp => {
            //let message = `Created new user: ${resp.data.name}`;
            //$scope.notifications.push(message);
            console.log('user created')
        }).catch(error => {
            console.log(error);
        });
    };

}

UserController.$inject = ['$scope', '$http', 'SERVER', '$state'];

export default UserController;

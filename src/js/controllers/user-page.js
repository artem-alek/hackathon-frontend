function UserPageController ($cookies, $scope, $http, SERVER, $state) {

$scope.photos = []

function init () {

  $http.get(`${SERVER}/user/${$state.params.userid}/photos`).then(resp => {
    console.log(resp.data);
    $scope.user = resp.data;
    $scope.photos = resp.data.photos;
    console.log($scope.photos);

  });
};

init();



$scope.addProfilepic = (info) => {

  $http.put(`${SERVER}/update/${$state.params.userid}`, info).then( resp => {
    console.log(resp.data);
  })
  .then( $state.reload())
  .catch(error => {
    console.log(error);
  });
};


$scope.toggle = function() {

  console.log($state.params.userid);
if ($cookies.get('user-id') === $state.params.userid) {
console.log($cookies.get('user-id'));
      $scope.myVar = !$scope.myVar;
  };


}

};



UserPageController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state'];

export default UserPageController;

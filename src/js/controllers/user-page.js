function UserPageController ($scope, $http, SERVER, $state) {

$scope.photos = []

function init () {

  $http.get(`${SERVER}/user/${$state.params.userid}/photos`).then(resp => {
    console.log(resp.data);
    $scope.user = resp.data;
    $scope.photos = resp.data.photos;
    console.log($scope.photos);
    console.log(resp.data.id);
    console.log(resp.user);

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

};



UserPageController.$inject = ['$scope', '$http', 'SERVER', '$state'];

export default UserPageController;

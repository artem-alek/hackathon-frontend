function UserPageController ($cookies, $scope, $http, SERVER, $state, $stateParams) {

  $scope.photos = [];
  $scope.addPhotoForm = false;

  function init () {

    $http.get(`${SERVER}/user/${$stateParams.userid}/photos`).then(resp => {
      $scope.user = resp.data;
      $scope.photos = resp.data.photos;

    });
  }

  init();



  $scope.addProfilepic = (info) => {

    $http.put(`${SERVER}/update/${$stateParams.userid}`, info)
    .then( $state.reload())
    .catch(error => {
      console.log(error);
    });
  };


  $scope.toggle = function() {
    if ($cookies.get('user-id') === $stateParams.userid) {
      $scope.addPhotoForm = !$scope.addPhotoForm;
    }
  };

}



UserPageController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams'];

export default UserPageController;

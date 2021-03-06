function PhotoController ($scope, $http, SERVER, $state) {
  $scope.photos = [];

  function init () {
    $http.get(`${SERVER}/photos`).then(resp => {
      $scope.photos = resp.data;
      console.log($scope.photos);
    });
  }

  init();

  $scope.addPhoto = (info) => {
    $http.post(`${SERVER}/photos`, info).then(resp => {
      console.log(resp.data);
    })
      .then($state.go('root.home'))
      .catch(error => {
        console.log(error);
      });
  };
}

PhotoController.$inject = ['$scope', '$http', 'SERVER', '$state'];

export default PhotoController;

function PhotoSingleController ($scope, $http, SERVER, $state) {
  $scope.comments = [];

  function init () {
    //need to change and add correct id params
    $http.get(`${SERVER}/photo/${$state.params.photoid}`).then( resp => {
      console.log(resp.data);
      $scope.photo = resp.data;
      $scope.user = resp.data.user;

      $scope.comments = resp.data.comments;
      console.log(resp.data.comments, 'array of comments');
    })
    .catch(error => {
      console.log(error);
    });
  }

  init();

  $scope.addComment = (comment) => {
    //need to change and add correct id params
    $http.post(`${SERVER}/comments/${$state.params.photoid}`, comment).then(resp => {
      console.log(resp, comment);
    })
    .then($state.reload())
    .catch(error => {
      console.log(error);
    });
  };
}

PhotoSingleController.$inject = ['$scope', '$http', 'SERVER', '$state'];

export default PhotoSingleController;

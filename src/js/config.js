function Config ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'templates/layout.tpl.html',
            controller: 'LayoutController'
        })
        .state('root.signup', {
            url: '/sign-up',
            controller: 'UserController',
            templateUrl: 'templates/sign-up.tpl.html'
        })
        .state('root.home', {
            url: '/home',
            templateUrl: 'templates/photo-list.tpl.html',
            controller: 'PhotoController'
        })
        .state('root.user', {
            url: '/user',
            templateUrl: 'templates/user-page.tpl.html',
        });

    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/not-found');
};

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;

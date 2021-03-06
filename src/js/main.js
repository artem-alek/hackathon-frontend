import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import SERVER from './server';
import setup from './setup';

import UserController from './controllers/user';
import PhotoController from './controllers/photo';
import LayoutController from './controllers/layout';
import PhotoSingleController from './controllers/photo-single'
import UserPageController from './controllers/user-page'


angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(AppConfig)
    .constant('SERVER', SERVER)
    .run(setup)
    .controller('UserController', UserController)
    .controller('LayoutController', LayoutController)
    .controller('PhotoController', PhotoController)
    .controller('PhotoSingleController', PhotoSingleController)
    .controller('UserPageController', UserPageController);

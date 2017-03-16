import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';
import SERVER from './server';

import UserController from './controllers/user';
import PhotoController from './controllers/photo';

angular
    .module('app', ['ui.router'])
    .config(AppConfig)
    .constant('SERVER', SERVER)
    .controller('UserController', UserController)
    .controller('PhotoController', PhotoController);


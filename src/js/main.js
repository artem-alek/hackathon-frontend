import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';

angular
    .module('app', ['ui.router'])
    .config(AppConfig);



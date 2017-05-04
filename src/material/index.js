import ngAnimate from "angular-animate";
import ngAria from "angular-aria";

import materialCore from "./../../node_modules/angular-material/modules/js/core/core";
import materialBtn from "./../../node_modules/angular-material/modules/js/button/button";
import materialInput from "./../../node_modules/angular-material/modules/js/input/input";
 

export default angular.module('materialModules',[
    'ngAnimate',
    'ngAria',
    'material.core',
    'material.components.input'
]).name;
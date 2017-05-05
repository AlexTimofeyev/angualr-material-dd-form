import angular  from 'angular';
import materialModules from './material';
import {viewModule, editModule}   from './common/common';
import elements from './elements/elements';
import components   from './components/components';

require ('./style/main.scss');

export default angular.module('ddf', [    
     materialModules
    , viewModule
    , editModule
    , elements    
    , components
]).name; 


import angular                  from 'angular';
import materialModules          from './material';
import {viewModule, editModule} from './common/common';
import elements                 from './elements/elements';
import components               from './components/components';
import helperFactory            from './factory/helperFactory';

require ('./style/main.scss');

export default 
angular.module('ddf', [    
     materialModules
    , viewModule
    , editModule
    , elements    
    , components
])
.factory('helperFactory',helperFactory)
.name;
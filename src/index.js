import angular  from 'angular';
import material from 'angular-material';
import tree     from 'angular-ui-tree';

import elements from './elements/elements';
import common   from './common/common';
import components   from './components/components';


require ('./style/main.scss');

export default angular.module('ddf', [ 
    material
    , tree 
    , elements
    , common 
    , components
]).name; 

angular.module('ui.tree').config(function(treeConfig) {

   console.log(treeConfig);

   treeConfig.placeholderClass = "ddf-element-container-placeholder";
   treeConfig.dragClass = "angular-ui-tree-drag ddf-element-container-dragg";
   //angular-ui-tree-drag
   //md-whiteframe-2dp ng-scope angular-ui-tree-node layout-row
});



/* .ddf-element-container {
     background-color: white;
 }
  .ddf-element-container-dragg {
    @extend .md-whiteframe-8dp;    
     
 }*/




/*

import common     from './common';
import components from './components';
import elements   from './elements';
import services   from './services';
import factories  from './factories';
import config     from './config';
import './libs/common.js';

import 'angular-drag-and-drop-lists';
import 'angular-ui-tree';
import 'angular-local-storage';

export default angular.module('ddf', [
  services,
  factories,
  "dndLists",
  "LocalStorageModule",
  common,
  components,
  elements
]).config(config).name;
*/
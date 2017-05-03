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

/*angular.module('ui.tree').config(function(treeConfig) {
   console.log(treeConfig);
   treeConfig.placeholderClass = "ddf-element-container-placeholder";
   treeConfig.dragClass = "angular-ui-tree-drag ddf-element-container-dragg";
});*/
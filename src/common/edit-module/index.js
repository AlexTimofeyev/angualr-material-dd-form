import itemsEdit from './items-edit/itemsEdit';
import itemEdit  from './item-edit/itemEdit';
import options   from './item-options/options';
import loader    from '../loader-module';
import tree      from "../../lib/angular-ui-tree";

angular.module('ui.tree').config(function(treeConfig) {
   treeConfig.placeholderClass = "ddf-element-container-placeholder";
   treeConfig.dragClass = "angular-ui-tree-drag ddf-element-container-dragg";
}); 

export default angular.module('ddf.common.edit',[tree, loader, options])
.directive('ddfItemsEdit', itemsEdit)
.directive('ddfItemEdit', itemEdit)
.name;
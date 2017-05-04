import itemLoader from './item-loader/itemLoader';
import itemsEdit from './items-edit/itemsEdit';
import itemsView from './items-view/itemsView';
import itemEdit from './item-edit/itemEdit';
import itemOptions from './item-options/options';
import tree     from 'angular-ui-tree';

export default angular.module('ddf.common',[tree,  itemOptions]) 
.directive('ddfItemLoader', itemLoader)
.directive('ddfItemsEdit', itemsEdit)
.directive('ddfItemsView', itemsView)
.directive('ddfItemEdit', itemEdit)
.name;
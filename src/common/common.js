import itemsEdit from './items-edit/itemsEdit';
import itemsView from './items-view/itemsView';
import itemEdit from './item-edit/itemEdit';
import itemLoader from './item-loader/itemLoader';
import itemOptions from './item-options/options';
import tree     from 'angular-ui-tree';

export default angular.module('ddf.common',[tree,itemOptions]) 
.directive('ddfItemsEdit', itemsEdit)
.directive('ddfItemsView', itemsView)
.directive('ddfItemEdit', itemEdit)
.directive('ddfItemLoader', itemLoader)
.name;
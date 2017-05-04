import itemsView from './items-view/itemsView';
import loader    from '../loader-module';

export default angular.module('ddf.common.view',[loader]) 
.directive('ddfItemsView', itemsView)
.name;
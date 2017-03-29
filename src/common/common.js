import itemsEdit from './items-edit/itemsEdit';
import itemEdit from './item-edit/itemEdit';
import elementLoader from './element-loader/elementLoader';

export default angular.module('ddf.common',[]) 
.directive('ddfItemsEdit', itemsEdit)
.directive('ddfItemEdit', itemEdit)
.directive('ddfElementLoader', elementLoader)
.name;
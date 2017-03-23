import itemsEdit from './items-edit/itemsEdit';
import elementLoader from './element-loader/elementLoader';


export default angular.module('ddf.common',[]) 
.directive('ddfItemsEdit', itemsEdit)
.directive('ddfElementLoader', elementLoader)
.name;
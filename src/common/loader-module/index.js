import itemLoader   from './itemLoader';
export default 
angular.module('ddf.common.loader', [])
.directive('ddfItemLoader', itemLoader)
.name;
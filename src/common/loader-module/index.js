import itemLoader   from './itemLoader';
import optionLoader from './optionLoader';

export default 
angular.module('ddf.common.loaders', [])
.directive('ddfItemLoader', itemLoader)
.directive('ddfOptionLoader', optionLoader)
.name;
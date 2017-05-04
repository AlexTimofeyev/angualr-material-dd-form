import text from './option-text/text';
import number from './option-number/number';
import loader from './options-loader/options-loader';

export default angular.module('ddf.item.options',[]) 
.directive('ddfOptionLoader', loader)
.directive('ddfOptionText', text)
.directive('ddfOptionNumber', number)
.name;
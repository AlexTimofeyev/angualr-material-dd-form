import optionsLoader from './options-loader/options-loader';
import text from './option-text/text';
import number from './option-number/number';

export default angular.module('ddf.item.options',[]) 
.directive('ddfOptionsLoader', optionsLoader) 
.directive('ddfOptionText', text)
.directive('ddfOptionNumber', number)
.name;
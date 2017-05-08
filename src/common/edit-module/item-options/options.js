import text   from './option-text/text';
import number from './option-number/number';
import select from './option-select/selcet';
  
export default angular.module('ddf.common.edit.options',[])
.directive('ddfOptionText', text)
.directive('ddfOptionSelect', select)
.directive('ddfOptionNumber', number)
.name;
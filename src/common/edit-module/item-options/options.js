import text      from './option-text/text';
import number    from './option-number/number';
//import loaderOpt from './options-loader/options-loader';
//import loader    from './../../loader-module';
  
export default angular.module('ddf.common.edit.options',[])
//.directive('ddfOptionsLoader', loaderOpt)
.directive('ddfOptionText', text)
.directive('ddfOptionNumber', number)
.name;
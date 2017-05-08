/**
 *  Module with input elements 
 */
import inputText   from './input-text/inputText.js'; 
import inputNumber from './input-number/inputNumber.js'; 
import inputSelect from './input-select/inputSelect.js'; 

export default angular.module('ddf.elements',[])
.directive('ddfInputText', inputText)
.directive('ddfInputNumber', inputNumber)
.directive('ddfInputSelect', inputSelect)
.name;
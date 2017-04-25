/* @ngInject */
export default class OptionsLoaderController {
    constructor($scope) { 
        console.log('++++',$scope.options);
        this.optionItem = {
            type:'optionText'
        };
        
    }
}
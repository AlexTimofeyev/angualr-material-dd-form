class InputTextController {
    /* @ngInject */
    constructor($scope, helperFactory) {      
        $scope.optionsUiTree = {
            accept: function(sourceNodeScope, destNodesScope, destIndex) {
                return helperFactory.isSameUiTreeScope($scope, sourceNodeScope);
            },
        }; 
     }
}
export default InputTextController;
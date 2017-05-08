class InputTextController {
    /* @ngInject */
    constructor($scope) {
        $scope.scopeUiTree = 'optionsUiTree';
        $scope.optionsUiTree = {
            accept: function(sourceNodeScope, destNodesScope, destIndex) {
                //$scope.scopeId 
                return 'optionsUiTree' == $scope.scopeUiTree;
            },
        }; 
     }
}
export default InputTextController;
class ItemsController {
    /* @ngInject */
    constructor($scope, helperFactory) { 
        $scope.mainUiTree = {
            accept: function(sourceNodeScope, destNodesScope, destIndex) {
                return helperFactory.isSameUiTreeScope($scope, sourceNodeScope);
            }
        }; 
    } 
} 
export default ItemsController; 
class ItemsController {
    /* @ngInject */
    constructor($scope) {
         $scope.mainUiTree = {
            accept: function(sourceNodeScope, destNodesScope, destIndex) {
                console.log('mainUiTree', destNodesScope);
                return true;
            },
        }; 
    } 
} 
export default ItemsController;
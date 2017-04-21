/* @ngInject */
export default class InputTextController {
    constructor($scope) { 

        if( angular.isString($scope.item.config['type']) ) {
            $scope.inputType = $scope.item.config.type;
        } else {
            $scope.inputType = 'text';
        }
        
        console.log($scope.inputType)
    }

   
}
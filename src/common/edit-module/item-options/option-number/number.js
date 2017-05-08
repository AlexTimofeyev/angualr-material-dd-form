import controller from './number.controller';
const optionNumber = function() {
    return {
        restrict: 'E',
        template: require ( './number.html' ),
        controllerAs: 'ctrl',
        controller: controller 
    };
};
export default optionNumber;
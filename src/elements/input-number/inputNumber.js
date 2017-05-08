import controller from './inputNumber.controller';
const inputNumber = function() {
    return {
        restrict: 'E',
        template: require ( './inputNumber.html' ),
        controllerAs: 'ctrl',
        controller: controller
    };
}
export default inputNumber;
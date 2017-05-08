import controller from './inputSelect.controller';
const inputSelect = function() {
    return {
        restrict: 'E',
        template: require ( './inputSelect.html' ),
        controllerAs: 'ctrl',
        controller: controller
    };
}
export default inputSelect;
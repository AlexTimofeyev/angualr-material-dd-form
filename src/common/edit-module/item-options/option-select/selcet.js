import controller from './select.controller';
const optionSelect= function() {
    return {
        restrict: 'E',       
        template: require ( './select.html' ),
        controllerAs: 'ctrl',
        controller: controller
    };
};
export default optionSelect;
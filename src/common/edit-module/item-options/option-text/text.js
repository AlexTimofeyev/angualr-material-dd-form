import controller from './text.controller';
const optionText = function() {
    return {
        restrict: 'E',       
        template: require ( './text.html' ),
        controllerAs: 'ctrl',
        controller: controller
    };
};
export default optionText;
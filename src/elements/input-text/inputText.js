import controller from './inputText.controller';

export default function() {
    return {
        restrict: 'E',
        template: require ( './inputText.html' ),
        controllerAs: 'ctrl',
        controller: controller,
        
    };
}
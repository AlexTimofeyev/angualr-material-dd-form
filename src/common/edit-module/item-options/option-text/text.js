import controller from './text.controller';

export default function() {
    return {
        restrict: 'E',       
        template: require ( './text.html' ),
        controllerAs: 'ctrl',
        controller: controller,
        
    };
}
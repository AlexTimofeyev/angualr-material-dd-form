import controller from './number.controller';

export default function() {
    return {
        restrict: 'E',
       
        template: require ( './number.html' ),
        controllerAs: 'ctrl',
        controller: controller,
        
    };
}
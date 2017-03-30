import template from './itemEdit.html';
import controller from './itemEditController';
import './itemEdit.scss';

export default function() {
    return {
        restrict: 'EA',
        scope : {
            item:'=ddfItem' 
        },
        template: template,
        controllerAs: 'ctrl',
        controller: controller
    };
}
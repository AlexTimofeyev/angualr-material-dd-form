import template from './itemsEdit.html';
import controller from './itemsEditController';
 import './itemsEdit.scss';

export default function() {
    return {
        restrict: 'EA',
        scope : {
            items:'=ddfItemsEdit' 
        },
        template: template,
        controllerAs: 'ctrl',
        controller: controller
    };
}
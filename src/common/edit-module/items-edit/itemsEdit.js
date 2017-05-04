import template from './itemsEdit.html';
import './itemsEdit.scss';

export default function() {
    return {
        restrict: 'EA',
        scope : {
            items:'=ddfItems' 
        },
        template: template
    };
}
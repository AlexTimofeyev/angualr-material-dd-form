/* @ngInject */
export default class ItemsController {
    constructor($scope) {
        console.log($scope, this);
    }

    onSelected(item) {
        console.log('onSelected');
        $event.stopPropagation();
    }

    onRemove(item, $event) {
        console.log('onRemove');
        $event.stopPropagation();
    }

    onEdit(item, $event) {
        console.log('onEdit', item.$id);
        $event.stopPropagation();
    }
}
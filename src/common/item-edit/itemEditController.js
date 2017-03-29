/* @ngInject */
export default class ItemsController {
    constructor($scope) {
        this.isShowConfig = false;
        this.$scope = $scope;
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

    showConfig() {
        this.isShowConfig = !this.isShowConfig;
        console.log( 'showParams' );
    }
}
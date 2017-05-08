export default class fabButtonController {
    /* @ngInject */
    constructor ($scope, $element, $attrs) {
        
        
    }

    addItem(type) {
        this.items.unshift({
                type    : "input-" + type,
                name    : 'Имя',
                config  : {},
                options  : [
                    {type:'text','label':'Название поля','name':'name'}
                    ],
                subitems: []
            });
            console.log(this.items)
    }

    $onInit() {
        console.log(this.items); // Guaranteed to be available!
    }
} 
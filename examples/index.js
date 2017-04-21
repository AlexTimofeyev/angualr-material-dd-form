import ddf  from '../src'; 
import exampleHtml  from './example.html'; 
 
angular.module('exampleapp', [ ddf ])
.component('exampleapp', {
        template: exampleHtml,
        controller: function() {        
            //this.model = {};
            this.items  = [{
                type    : "input-text",
                name    : 'Имя',
                config  : {},
                subitems: []
            },{
                type   : "input-text",
                name   : 'Фамилия',
                config : {},
                subitems: []
            },{
                type   : "input-text",
                name   : 'отечство',
                config : {},
                subitems: []
            },{
                type   : "input-text",
                name   : 'Лет',
                config : {type:'number'},
                subitems: []
            }];

        }
    }
);
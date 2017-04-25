import ddf  from '../src'; 
import exampleHtml  from './example.html'; 
 
angular.module('exampleapp', [ ddf ])
.component('exampleapp', {
        template: exampleHtml,
        controller: function() {        
            //this.model = {};
            
            window.iitems  = [{
                type    : "input-text",
                name    : 'Имя',
                config  : {},
                options  : [{type:'text','label':'Название поля','name':'name'}],
                subitems: []
            },
       /*     ,{
                type   : "input-text",
                name   : 'Фамилия',
                config : {},
                subitems: []
            },{
                type   : "input-text",
                name   : 'отечство',
                config : {},
                subitems: []
            },*/
            {
                type   : "input-text",
                name   : 'Лет',
                config : {type:'number'},
                options  : [{type:'number','label':'Максимальная длина','name':'max'}],
                subitems: []
            }];

        this.items = window.iitems;
        }
    }
);
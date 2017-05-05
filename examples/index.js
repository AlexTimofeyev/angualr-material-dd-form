import ddf         from '../src'; 
import exampleHtml from './example.html'; 
 
 angular.module('exampleapp', [ ddf ])
.component('exampleapp', {
        template: exampleHtml,
        controller: function() {        
             
            window.iitems  = [{
                type    : "input-text",
                name    : 'Имя',
                config  : {max:10},
                options  : [
                    {type:'text','label':'Название поля','name':'name'},
                    {type:'number','label':'Максимальная длина','name':'max'}
                    ],
                subitems: []
            },
      
            {
                type   : "input-text",
                name   : 'Лет',
                config : {type:'number'},
                options  : [
                    {type:'text','label':'Название поля','name':'name'}
                    ],
                subitems: []
            }];

        this.items = window.iitems;
        }
    }
); 
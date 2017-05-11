//import ddf         from '../src'; 
//import angular                  from 'angular';
import exampleHtml from './example.html'; 
 
 angular.module('exampleapp', [   ])
 .directive('mytest', function () {
      return {
      restrict:'E',
      link: function(scope, element,attr) {
          element.bind('touchstart mousedown', function(e) { 
              console.log(e.type); 
            })
      }
   }
 })
.component('exampleapp', {
        template: exampleHtml,
        controller: function() {   
            
            this.viewMode = false;    
            this.iits = [{name:'aa'},{name:'gvsdfsdfs'},{name:'sdasd'}]; 
             
            window.iitems  = [{
                type    : "input-text",
                name    : 'Имя',
                config  : {max:10},
                options  : [
                    {type:'text','label':'Название поля','name':'name'},
                    {type:'number','label':'Максимальная длина','name':'max'}
                ]
            },
            {
                type    : "input-select",
                name    : 'Страна',
                config  : {
                            max:10,
                            options: [
                                {label:'lala',value:'lalaval'},
                                {label:'blabla',value:'blablaval'},
                                {label:'Ляляля',value:'al11'}
                            ]
                        },
                options  : [
                    {type:'text','label':'Название поля','name':'name'},
                    /*{type:'number','label':'Максимальная длина','name':'max'},*/
                    {type:'select','label':'Список','name':'options'}
                ]
            },
            {
                type   : "input-number",
                name   : 'Лет',
                config : {},
                options  : [
                    {type:'text','label':'Название поля','name':'name'}
                ] 
            }];

        this.items = window.iitems;
        this.result = {};
        window.result = this.result;
        }
    }
); 
/* @ngInject */
const helperFactory = function( ) {
    /**
     * @return {bool} it's same or not "angular-ui-tree" scope
     */
    function isSameUiTreeScope (uiTreeScope, nodeScope) {          
        return uiTreeScope.$$childTail.$id ==
                nodeScope.$parent.$parent.$id;
    }

    return {
        isSameUiTreeScope: isSameUiTreeScope
    }
}
 
 export default helperFactory;
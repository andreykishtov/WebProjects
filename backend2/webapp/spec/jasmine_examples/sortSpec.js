 var sort = require('../../lib/jasmine_examples/sortfunc.js');
 var arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4];
 var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 it("check String", function() {
     var sortcheck = sort.bubbleSort(arr, conditionsecondstring) // cb function
     expect(sortcheck).toEqual(arr2); //it works with matcher
 });



 function conditionsecondstring(firstElement, secondElement) {
     if (firstElement > secondElement) {
         return true;
     }
     return false;
 }
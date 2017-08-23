// var newApp = angular.module('myModule', []);

// newApp.controller('controlerFirst', [function(S) {
//     this.money = [3.6, 4.6, 0.5, 7];
// }]);

var newApp2 = angular.module('myModule2', []);

newApp2.controller('toDolistCtrl', [function() {
    this.tasks = [];
    this.send = function() {
        this.tasks.push(this.task); //lets try
        this.task = '';
    }
}]);

newApp2.controller('roboListCtrl', [function() {
    this.tasks = [];
    this.send = function() {
        this.tasks.push(this.task); //lets try
        this.task = '';
    }
}]);
var app = angular.module('ToDo', []);

app.controller('toDolistCtrl', ['task', function(task) {
    this.tasks = createTasks;
    this.send = function() {
        this.tasks.push(this.task); //lets try
        this.task = '';
    }
}]);

app.service('task', [function() {
    this.createTasks = function() {
        return [];
    }
}])
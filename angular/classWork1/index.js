var app = angular.module('ToDo', []);

app.controller('toDolistCtrl', ['taskservice', function(taskservice) {
    this.maketasks = taskservice.addtask;
    this.getTasks = taskservice.getTasks;
}]);

app.service('taskservice', function() {
    this.taskid = 0;
    this.tasks = [];
    this.addtask = task => {
        this.tasks.push({
            id: this.taskid,
            userid: task.userid,
            text: task.text,
            title: task.title,
            priority: task.priority,
            importance: task.importance
        });
    }

    this.
});
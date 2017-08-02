'use strict';


var tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },

  //tasks = {zeke: ['clean room', 'write mom']}
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    return Object.keys(tasks)
    // return people;
    // returns an array of all people for whom tasks exist
  },
  add: function (name, task) {
    if (!tasks[name]) tasks[name] = [];
    if (!task.complete) task.complete = false;
    tasks[name].push(task);
  },
  // etc.
  list: function (name, status) {
    if (status === 'complete'){
      return tasks[name].filter(function(task){
        return task.complete
      });      
    } else if (status === 'active') {
      return tasks[name].filter(function(task){
        return !task.complete
      });
    }
    return tasks[name];
  }, 
  complete: function (name, index) {
    tasks[name][index].complete = true;
  },
  remove: function (name, index) {
    tasks[name].splice(index, 1);
  }
};

/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todos) {
  return todos.text 
}

const getPriority = function(todos) {
  return todos.priority
}
const isComplete = function(todos) {

  return (todos.complete === true)
}
const isHighPriority = function(todos) {

  return (todos.priority === 2)
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(todos) {
  const todoNames=[]
getTodoName.push.(todoNames)
}
const priorities = function() {}
const namesAndPriorities = function() {}
const justNotComplete = function() {}
const justComplete = function() {}
const priority2Only = function() {}
const priority1Only = function() {}


module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}

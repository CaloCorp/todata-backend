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

const isNotComplete = function (todos) {

  return (todos.complete === false)
}
const isHighPriority = function(todos) {

  return (todos.priority === 2)
}

const isLowPriority = function (todos) {

  return (todos.priority === 1)
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(todos) { 
  return todos.map(getTodoName)
}
const priorities = function(todos) {

  return todos.map(getPriority)
}
const namesAndPriorities = function(todos) {

  return todos.map(getPriority)
}
const justNotComplete = function(todos) {

  return todos.filter(isNotComplete)
}  
const justComplete = function(todos) {

  return todos.filter(isComplete)
}
const priority2Only = function(todos) {

  return todos.filter(isHighPriority)
}
const priority1Only = function(todos) {

 return todos.filter(isLowPriority)
}


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

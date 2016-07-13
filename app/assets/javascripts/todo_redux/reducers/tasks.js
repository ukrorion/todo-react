var store = appRedux.store;

appRedux.Task = function(state, action){
  switch(action.type){
    case 'ADD_TASK':
      return action.data
    case 'TOGGLE_TASK':
      if(state.id !== action.data.id)
        return state;
      return _.assign({}, state, {status: action.data.status});
    case 'DELETE_TASK':
      return state;
    default:
      return state;
  }
}
var Task = appRedux.Task;

appRedux.Tasks = function(state, action){
  state = (typeof state == "undefined" ? [] : state);
  switch(action.type){
    case 'FETCH_TASKS':
      return action.data;
    case 'ADD_TASK':
      return _.concat(state, [Task(undefined, action)]);
    case 'TOGGLE_TASK':
      return state.map(function(st){
        return Task(st,action);
      });
    case 'DELETE_TASK':
      return _.filter(state, function(obj){ return obj.id !== action.data.id});
    default:
      return state;
  }
}

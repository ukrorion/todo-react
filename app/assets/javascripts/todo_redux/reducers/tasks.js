appRedux.Task = function(state, action){
  switch(action.type){
    case 'ADD_TASK':
      return {
        id: action.id,
        description: action.description,
        status: action.status
      };
    case 'TOGGLE_TASK':
      if(state.id !== action.id)
        return state;
      return _.assign({}, state, {status: !state.status});
    default:
      return state;
  }
}
var Task = appRedux.Task;

appRedux.Tasks = function(state, action){
  state = (typeof state == "undefined" ? [] : state);
  switch(action.type){
    case 'ADD_TASK':
      return _.concat(state, [Task(undefined, action)]);
    case 'TOGGLE_TASK':
      return state.map(function(st){
        return Task(st,action);
      })
    default:
      return state;
  }
}
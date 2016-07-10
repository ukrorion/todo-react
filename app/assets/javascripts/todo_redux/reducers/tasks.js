var store = appRedux.store;

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
      $.ajax({
        url: action.url,
        dataType: 'json',
        cache: false,
        success: function(data){
          action.store.dispatch({
            type: 'TASKS_LOADED',
            data: data
          });
        },
        error: function(xhr, status, error){
          console.log(error);
        }
      });
      return state;
    case 'TASKS_LOADED':
      return action.data;
    case 'ADD_TASK':
      return _.concat(state, [Task(undefined, action)]);
    case 'TOGGLE_TASK':
      return state.map(function(st){
        return Task(st,action);
      });
    case 'DELETE_TASK':
      return _.filter(state, function(obj){ return obj.id !== action.id});
    default:
      return state;
  }
}

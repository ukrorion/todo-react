const Task = (state, action) => {
  switch(action.type){
    case 'ADD_TASK':
      return action.data
    case 'TOGGLE_TASK':
      if(state.id !== action.data.id)
        return state;
      return Object.assign({}, state, {status: action.data.status});
    case 'DELETE_TASK':
      return state;
    default:
      return state;
  }
};

const Tasks = (state, action) => {
  state = (typeof state == "undefined" ? [] : state);
  switch(action.type){
    case 'FETCH_TASKS':
      return action.data;
    case 'ADD_TASK':
      return state.concat([Task(undefined, action)]);
    case 'TOGGLE_TASK':
      return state.map(st => { Task(st,action) });
    case 'DELETE_TASK':
      return state.filter(obj => { return obj.id !== action.data.id});
    default:
      return state;
  }
};

export { Task, Tasks as default };

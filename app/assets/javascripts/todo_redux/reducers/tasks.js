appRedux.Tasks = function(state, action){
  state = (typeof state == "undefined" ? [] : state);
  switch(action.type){
    case 'ADD_TASK':
      return _.concat(state, [
          {
            id: action.id,
            description: action.description,
            status: action.status
          }
        ]);
    default:
      return state;
  }
}
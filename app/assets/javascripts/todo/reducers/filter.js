const Filter = (state='SHOW_ALL', action) => {
  switch(action.type){
    case 'SET_DONE':
      return state;
    case 'SET_ALL':
      return state;
    case 'SET_NOT_DONE':
      return state;
    default:
      return state;
  }
}

export { Filter as default }
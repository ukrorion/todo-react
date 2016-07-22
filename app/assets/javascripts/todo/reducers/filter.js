const Filter = (state='SHOW_ALL', action) => {
  switch(action.type){
    case 'SHOW_DONE':
      return 'SHOW_DONE';
    case 'SHOW_ALL':
      return 'SHOW_ALL';
    case 'SHOW_ACTIVE':
      return 'SHOW_ACTIVE';
    default:
      return state;
  }
}

export { Filter as default }
var store = appRedux.store;

appRedux.BoxActions = {
  fetch_tasks: function(self) {
    $.ajax({
      url: self.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        store.dispatch({
          type: 'FETCH_TASKS',
          data: data
        });
      },
      error: function(xhr, status, error){
        console.log(error);
      }
    });
  },
  add_task: function(description){
    $.ajax({
      url: '/tasks',
      type: 'post',
      dataType: 'json',
      data: {'task' : {'description' : description}},
      success: function(data){
        store.dispatch({type: 'ADD_TASK', data: data});
      },
      error: function(error){
        console.log(error);
      }
    });
  },
  toggle_task: function(_this) {
    $.ajax({
      url: '/tasks/' + _this.props.id,
      type: 'put',
      dataType: 'json',
      success: function(data){
        store.dispatch({
          type: 'TOGGLE_TASK',
          data: data
        });
      },
      error: function(error){
        console.log(error)
      }
    });
  },
  delete_task: function(_this) {
    $.ajax({
      url: '/tasks/'+_this.props.id,
      type: 'delete',
      dataType: 'json',
      success: function(data){
        store.dispatch({
          type: 'DELETE_TASK',
          data: data
        });
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}
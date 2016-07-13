var store = appRedux.store;

var send_data = function(url, request_type, action_name, data){
  data = data || {};
  
  return  $.ajax({
      url: url,
      type: request_type,
      dataType: 'json',
      data: data,
      cache: false,
      success: function(data){
        store.dispatch({
          type: action_name,
          data: data
        });
      },
      error: function(xhr, status, error){
        console.log(error);
      }
    });
}



appRedux.BoxActions = {
  fetch_tasks: function(self) {
    send_data(self.props.url, 'get', 'FETCH_TASKS');
  },
  add_task: function(description){
    send_data('/tasks', 'post', 'ADD_TASK', {'task' : {'description' : description}});
  },
  toggle_task: function(self) {
    send_data('/tasks/' + self.props.id, 'put', 'TOGGLE_TASK');
  },
  delete_task: function(self) {
    send_data('/tasks/' + self.props.id, 'delete', 'DELETE_TASK');
  }
}
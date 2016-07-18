import { Store } from './../store'

let send_data = (url, request_type, action_name, data={}) => { 
  return $.ajax({
      url: url,
      type: request_type,
      dataType: 'json',
      data: data,
      cache: false,
      success(data){
        Store.dispatch({
          type: action_name,
          data: data
        });
      },
      error(xhr, status, error){
        console.log(error);
      }
    });
};



export const BoxActions = {
  fetch_tasks(self) {
    send_data(self.props.url, 'get', 'FETCH_TASKS');
  },
  add_task(description){
    send_data('/tasks', 'post', 'ADD_TASK', {'task' : {'description' : description}});
  },
  toggle_task(self) {
    send_data('/tasks/' + self.props.id, 'put', 'TOGGLE_TASK');
  },
  delete_task(self) {
    send_data('/tasks/' + self.props.id, 'delete', 'DELETE_TASK');
  }
}
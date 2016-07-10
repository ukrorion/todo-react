var store = appRedux.store;
var TodoBox = appRedux.TodoBox;

var render = function(){
  ReactDOM.render(<TodoBox data={store.getState()} url="/tasks" />, $('#app-root')[0]); 
};

store.subscribe(render);
render();
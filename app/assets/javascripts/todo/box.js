(function(app){
  var Item = app.Item;

  var TodoBox = React.createClass({
    render: function() {
      return (
        <ul className="todoBox">
          <Item status="true" >Test description</Item>
        </ul>
      );
    }
  });

  ReactDOM.render(<TodoBox />, $('#app-root')[0]); 
})(app)


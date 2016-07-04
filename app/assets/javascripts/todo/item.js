(function(app){

  app.Item = React.createClass({
    render: function() {
      return (
        <li className="listItem"><input name="status" type="checkbox" checked="{this.props.status}" />{this.props.children}</li>
      );
    }
  });

})(app)



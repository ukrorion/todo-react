var store = appRedux.store;

appRedux.Item = React.createClass({
  handleChecked: function(){
    store.dispatch({
      type: 'TOGGLE_TASK',
      id: this.props.id,
      status: this.props.status,
      description: this.props.children
    });
  },
  handleDelete: function(){
    store.dispatch({
      type: 'DELETE_TASK',
      id: this.props.id
    });
  },
  render: function() {
    return (
      <li className="listItem" >
        <input name="status" type="checkbox" checked={this.props.status} onChange={this.handleChecked} />
        {this.props.children}
        <input type="button" value="Delete" onClick={this.handleDelete} />
      </li>
    );
  }
});

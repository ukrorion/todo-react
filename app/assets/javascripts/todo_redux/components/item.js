var boxActions = appRedux.BoxActions; 

appRedux.Item = React.createClass({
  handleChecked: function(){
    boxActions.toggle_task(this);
  },
  handleDelete: function(){
     boxActions.delete_task(this);
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

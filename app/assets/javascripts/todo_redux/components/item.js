appRedux.Item = React.createClass({
  render: function() {
    return (
      <li className="listItem" >
        <input name="status" type="checkbox" checked={this.props.status} readOnly={true}/>
        {this.props.children}
      </li>
    );
  }
});
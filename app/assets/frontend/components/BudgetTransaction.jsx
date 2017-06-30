export default class BudgetTransaction extends React.Component {
  render() {
    var cts = this.props.tdate;
    var cdate = (new Date(cts)).toLocaleDateString();

    return (
          <tr>
              <td>{this.props.id}</td>
              <td>{cdate}</td>
              <td>{this.props.amount}</td>
              <td>{this.props.description}</td>
              <td>{this.props.loc_name}</td>
              <td>{this.props.subcat_name}</td>
              <td>{this.props.isfixed &&
                <i className="material-icons done">done</i>
                }</td>
              <td>{this.props.isrecurring &&
                <i className="material-icons done">done</i>}</td>
          </tr>
    )
  }
}

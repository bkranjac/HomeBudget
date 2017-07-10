export default class BudgetLocation extends React.Component {
  render() {
    var cts = this.props.created_at;
    var cdate = (new Date(cts)).toLocaleDateString();

    return (
          <li className="collection-item avatar">
              <i className="material-icons circle">person_pin</i>
                <span className="title">{this.props.name}</span>
                <time>{cdate}</time>
                  <p>{this.props.place}</p>
          </li>
    )
  }
}

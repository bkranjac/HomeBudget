export default class BudgetSubCategory extends React.Component {
  render() {
    return (
          <li className="collection-item avatar">
              <i className="material-icons circle">person_pin</i>
                <span className="title">{this.props.author}</span>
                  <p>{this.props.body}</p>
          </li>

    )
  }
}

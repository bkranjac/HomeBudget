export default class BudgetTabs extends React.Component {
  render() {
    return (
      <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#transactions" className="active">Transactions</a></li>
            <li className="tab col s3"><a href="#locations">Locations</a></li>
            <li className="tab col s3"><a href="#categories">Categories</a></li>
            <li className="tab col s3"><a href="#subcategories">Subcategories</a></li>
          </ul>
        </div>
    )
  }
}

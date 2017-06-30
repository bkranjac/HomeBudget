import BudgetTransaction from "./BudgetTransaction"

export default class BudgetTransactions extends React.Component {
  render() {
    let transactions = this.props.transactions.map(transaction => <BudgetTransaction key={transaction.id}{...transaction} />)
    return (
      <div>
        <table className="striped bordered responsive-table ">
          <thead>
            <tr>
              <th>#Id</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Desciption</th>
              <th>Location</th>
              <th>Subcategory</th>
              <th>Fixed</th>
              <th>Recurring</th>
            </tr>
          </thead>
          <tbody>
            {transactions}
          </tbody>
        </table>
      </div>
    )
  }
}

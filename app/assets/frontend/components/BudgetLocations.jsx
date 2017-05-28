import BudgetLocation from "./BudgetLocation"

export default class BudgetLocations extends React.Component {
  render() {
    return (
      <div>
        <ul className="collection">
          <BudgetLocation />
          <BudgetLocation />
          <BudgetLocation />
        </ul>
      </div>
    )
  }
}

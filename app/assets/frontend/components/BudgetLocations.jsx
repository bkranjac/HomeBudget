import BudgetLocation from "./BudgetLocation"

export default class BudgetLocations extends React.Component {
  render() {
    let locations = this.props.locations.map(location => <BudgetLocation key={location.id}{...location} />)
    return (
      <div>
        <ul className="collection">
        {locations}
        </ul>
      </div>
    )
  }
}

import BudgetCategory from "./BudgetCategory"

export default class BudgetCategories extends React.Component {
  render() {
    let categories = this.props.categories.map(category => <BudgetCategory key={category.id}{...category} />)
    return (
      <div>
        <ul className="collection">
        {categories}
        </ul>
      </div>
    )
  }
}

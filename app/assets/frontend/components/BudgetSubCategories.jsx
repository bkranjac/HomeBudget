import BudgetSubCategory from "./BudgetSubCategory"

export default class BudgetSubCategories extends React.Component {
  render() {
    let subcategories = this.props.subcategories.map(subcategory => <BudgetSubCategory key={subcategory.id}{...subcategory} />)
    return (
      <div>
        <ul className="collection">
        {subcategories}
        </ul>
      </div>
    )
  }
}

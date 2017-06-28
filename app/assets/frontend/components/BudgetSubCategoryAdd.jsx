export default class BudgetSubCategoryAdd extends React.Component {
 saveSubCategory(event) {
   event.preventDefault();
   this.props.saveSubCategory(this.refs.subcategoryTextArea.value);
   this.refs.subcategoryTextArea.value = '';

 }
  render() {
    return (
      <div className="row">
            <form onSubmit={this.saveSubCategory.bind(this)}>
              <div className="input-field">
                <textarea ref="subcategoryTextArea" className="materialize-textarea" />
                <label>Subtype of the transaction</label>
                <button type="submit" className="btn right">Add SubCategory</button>
            </div>
          </form>
        </div>
    )
  }
}

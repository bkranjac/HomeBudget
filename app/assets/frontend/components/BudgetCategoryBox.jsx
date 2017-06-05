export default class BudgetCategoryBox extends React.Component {
 saveCategory(event) {
   event.preventDefault();
   this.props.saveCategory(this.refs.categoryTextArea.value);
   this.refs.categoryTextArea.value = '';

 }
  render() {
    return (
      <div className="row">
            <form onSubmit={this.saveCategory.bind(this)}>
              <div className="input-field">
                <textarea ref="categoryTextArea" className="materialize-textarea" />
                <label>Type of transaction</label>
                <button type="submit" className="btn right">Add Category</button>
            </div>
          </form>
        </div>
    )
  }
}

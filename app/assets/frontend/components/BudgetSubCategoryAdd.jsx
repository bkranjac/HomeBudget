export default class BudgetSubCategoryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
       [name]: value
     })
   }

 saveSubCategory(event) {
   event.preventDefault();
   this.props.saveSubCategory(this.state);
   this.refs.subcategoryTextArea.value = '';

 }
  render() {
    return (
      <div className="row">
            <form onSubmit={this.saveSubCategory.bind(this)}>
              <div className="input-field col s4">
                <label htmlFor="subName" className="white-text">Name:</label>
                <textarea id="subName" name="subName"
                  type="textarea" className="materialize-textarea" onChange={this.handleInputChange}/>
                </div>
                <div className="input-field col s4">
                  <label htmlFor="subDescription" className="white-text">Description:</label>
                  <textarea id="subDescription" name="subDescription" ref="subcategoryTextArea"
                    type="textarea" className="materialize-textarea" onChange={this.handleInputChange}/>
                  </div>
                <div className="input-field col s4">
                  <textarea name="subName" id="subName" type="textarea" className="materialize-textarea" />
                  <label>Subtype of the transaction</label>
                </div>
            <div>
                <button type="submit" className="btn right">Add SubCategory</button>
            </div>
          </form>
        </div>
    )
  }
}

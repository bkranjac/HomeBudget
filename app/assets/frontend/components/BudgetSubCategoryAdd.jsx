import DropCategories from "./DropCategories"
export default class BudgetSubCategoryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category_id:0, category_name: ''};

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
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

   handleCategoryChange(selectedCategory, selectedName) {
         this.setState({category_id: selectedCategory, category_name: selectedName});

   }
 saveSubCategory(event) {
   event.preventDefault();
   this.props.saveSubCategory(this.state);

 }
  render() {
    return (
      <div className="row">
            <form onSubmit={this.saveSubCategory.bind(this)}>
              <div className="input-field col s6">
                <label htmlFor="subName" className="white-text">Name:</label>
                <textarea id="subName" name="subName"
                  type="textarea" className="materialize-textarea" onChange={this.handleInputChange}/>
                </div>
                <div className="input-field col s6">
                  <label htmlFor="subDescription" className="white-text">Description:</label>
                  <textarea id="subDescription" name="subDescription" ref="subcategoryTextArea"
                    type="textarea" className="materialize-textarea" onChange={this.handleInputChange}/>
                  </div>
                  <div className="input-field col s6">
                    <DropCategories categories={this.props.categories}
                    onCategoryChange={this.handleCategoryChange} />
                </div>
                <div className="input-field col s6">
                  <input placeholder="Select category" id="tcategory" type="text" readOnly="readOnly" className="validate"
                    value={this.state.category_name} />
                </div>
            <div>
                <button type="submit" className="btn right">Add SubCategory</button>
            </div>
          </form>
        </div>
    )
  }
}

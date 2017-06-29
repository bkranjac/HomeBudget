import DropLocation from './DropLocation'
import DropSubCategories from './DropSubCategories'

export default class BudgetTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {location_id: 0, location_place: '', subcategory_id:0, subcategory_name: '', isFixed: true, isRecurring: false, amount: 0};
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveTransaction = this.saveTransaction.bind(this);
  }

  handleLocationChange(selectedLocation, selectedPlace) {
     this.setState({location_id: selectedLocation, location_place: selectedPlace});
   }

  handleSubCategoryChange(selectedSubCategory, selectedName) {
        this.setState({subcategory_id: selectedSubCategory, subcategory_name: selectedName});

  }

  handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
       [name]: value
     })
   }

  saveTransaction(event) {
    event.preventDefault();
    this.props.saveTransaction(this.state);

  }

  render() {

    return (
      <form onSubmit={this.saveTransaction}>
          <div className="row">
            <span className="input-field col s6">
              <DropLocation locations={this.props.locations}
              onLocationChange={this.handleLocationChange}/>
          </span>
            <span className="input-field col s6">
              <DropSubCategories subcategories={this.props.subcategories}
              onSubCategoryChange={this.handleSubCategoryChange} />
            </span>
            </div>
            <div className="row">
                  <div className="card grey darken-1 long">
                    <div className="card-content white-text">
                      <span className="card-title">Transaction</span>
                      <div className="row">
                        <div className="input-field  col s6">

                          <input id="tdate" name="transactiondate" type="date"
                            className="datepicker" onChange={this.handleInputChange}/>
                        </div>
                      <div className="input-field col s6 right">
                          <input id="tamount" name="amount" type="number" className="validate" onChange={this.handleInputChange}/>
                          <label htmlFor="tamount" className="white-text" >Amount</label>
                      </div>
                    </div>
                      <div className="row">
                      <div className="input-field col s8">

                          <textarea id="tdescription" name="description" type="textarea" className="materialize-textarea" onChange={this.handleInputChange}/>
                          <label htmlFor="tdescription" className="white-text">Description:</label>
                      </div>
                      <div className="input-field col s2">
                         <input id="tIsFixed" type="checkbox" name="isFixed" defaultChecked
                           onChange={this.handleInputChange}/>
                         <label htmlFor="tIsFixed">Fixed</label>
                      </div>
                      <div className="input-field col s2">
                         <input id="tIsRecurring" type="checkbox" name="isRecurring"
                           onChange={this.handleInputChange}/>
                         <label htmlFor="tIsRecurring">Recurring</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input placeholder="Select location" id="tlocation" type="text" readOnly="readOnly" className="validate"
                          value={this.state.location_place} />
                      </div>
                      <div className="input-field col s6">
                        <input placeholder="Select subcategory" id="tsubcategory" type="text" readOnly="readOnly" className="validate"
                          value={this.state.subcategory_name} />
                      </div>
                    </div>
                    <div className="row">
                       <input type="submit" value="Submit" className="btn right"/>
                    </div>
                  </div>
                </div>
            </div>
        </form>
    )
  }
}

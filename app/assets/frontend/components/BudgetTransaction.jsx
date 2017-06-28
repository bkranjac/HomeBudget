import DropLocation from './DropLocation'
import DropSubCategories from './DropSubCategories'

export default class BudgetTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {location_id: 0, location_place: '', subcategory_id:0, subcategory_name: ''};
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.saveTransaction = this.saveTransaction.bind(this);
  }

  handleLocationChange(selectedLocation, selectedPlace) {
     this.setState({location_id: selectedLocation, location_place: selectedPlace});
   }

  handleSubCategoryChange(selectedSubCategory, selectedName) {
        this.setState({subcategory_id: selectedSubCategory, subcategory_name: selectedName});

  }

  saveTransaction(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
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
                  <div className="card grey darken-1 medium">
                    <div className="card-content white-text">
                      <span className="card-title">Transaction</span>
                      <div className="input-field col s6">
                          <input id="tamount" type="number" className="validate" />
                          <label htmlFor="tamount" className="white-text">Amount</label>
                      </div>
                      <div className="input-field col s6">
                         <input id="tIsFixed" type="checkbox" name="isFixed" defaultChecked />
                         <label htmlFor="tIsFixed">Fixed</label>
                         <input id="tIsRecurring" type="checkbox" name="isRecurring" />
                         <label htmlFor="tIsRecurring">Recurring</label>
                      </div>
                      <div className="col s12">
                        <label htmlFor="tdate" className="white-text">Date:</label>
                        <input id="tdate" type="date" className="date-picker"/>
                      </div>
                      <div className="input-field col s6">
                        <input placeholder="Select location" id="tlocation" type="text" readOnly="readOnly" className="validate"
                          value={this.state.location_place} />
                      </div>
                      <div className="input-field col s6">
                        <input placeholder="Select subcategory" id="tsubcategory" type="text" readOnly="readOnly" className="validate"
                          value={this.state.subcategory_name} />
                      </div>
                    </div>
                </div>
            </div>
        </form>
    )
  }
}

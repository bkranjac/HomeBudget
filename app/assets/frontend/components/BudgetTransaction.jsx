import DropLocation from './DropLocation'

export default class BudgetTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location_id: 0, location_place: ''};
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.saveTransaction = this.saveTransaction.bind(this);
  }

  handleLocationChange(selectedLocation, selectedPlace) {
     this.setState({location_id: selectedLocation, location_place: selectedPlace});

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

            </div>
            <div className="row">
                  <div className="card grey darken-1 medium">
                    <div className="card-content white-text">
                      <span className="card-title">Transaction</span>
                      <div class="input-field col s12">
                        <input id="tlocation" type="text" className="validate"
                          value={this.state.location_place} />
                      </div>
                      <div class="input-field col s12">
                          <label for="tdate" className="white-text">Date:</label>
                          <input id="tdate" type="date" className="date-picker"/>
                      </div>
                      <div class="input-field col s12">
                          <label for="tamount" className="white-text">Amount</label>
                          <input id="tamount" type="number" className="validate"/>
                      </div>
                      </div>

                </div>
            </div>
        </form>
    )
  }
}

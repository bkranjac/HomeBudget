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
          <div >
            <span className="input-field col s3">
              <DropLocation locations={this.props.locations}
              onLocationChange={this.handleLocationChange}/>
          </span>
            
            </div>
            <div className="card teal darken-1 ">
              <div className="card-content white-text">
                <span className="card-title">Transaction</span>
                  <input type="text" className="input-field col s3"
                    value={this.state.location_place}></input>
                </div>
              </div>

        </form>
    )
  }
}

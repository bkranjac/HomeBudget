
export default class BudgetLocationAdd extends React.Component {
 saveLocation(event) {
   event.preventDefault();
   this.props.saveLocation(this.refs.locationTextArea.value);
   this.refs.locationTextArea.value = '';

 }
  render() {
    return (
      <div className="row">
            <form onSubmit={this.saveLocation.bind(this)}>
              <div className="input-field">
                <textarea ref="locationTextArea" className="materialize-textarea" />
                <label>Location</label>
                <button type="submit" className="btn right waves-effect waves-light blue-grey">Add Location</button>
            </div>
          </form>
        </div>
    )
  }
}


export default class BudgetLocationEdit extends React.Component {
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
                <button type="submit" className="btn right">Add Location</button>
            </div>
          </form>
        </div>
    )
  }
}
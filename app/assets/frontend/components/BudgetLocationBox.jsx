
export default class BudgetLocationsBox extends React.Component {
  render() {
    return (
      <div className="row">
            <form>
              <div className="input-field">
                <textarea className="materialize-textarea" />
                <label>It occured where?</label>
                <button className="btn right">Add Location</button>
            </div>
          </form>
          </div>
    )
  }
}

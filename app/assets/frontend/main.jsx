import BudgetLocationBox from "./components/BudgetLocationBox"
import BudgetLocations from './components/BudgetLocations'

let mockBudgetLocations =  [
  { id: 1, author:'Branka', body:'Trader Joe\'s'}
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationsList : mockBudgetLocations }
  }
  addLocation(locationToAdd) {
    let newLocationList = this.state.locationsList;
    newLocationList.unshift({ id: Date.now(), author: 'BK', body: locationToAdd});
    this.setState({locationsList : newLocationList });
  }
render () {
  return (
    <div className="container">
      <BudgetLocationBox saveLocation={this.addLocation.bind(this)}/>
      <BudgetLocations locations={this.state.locationsList}/>
    </div>
  );
 }
}

let documentReady  = () => {
  ReactDOM.render(
    <Main/>,
    document.getElementById('reactDiv')
  );
};

$(documentReady);

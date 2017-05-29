import BudgetLocationBox from "./components/BudgetLocationBox"
import BudgetLocations from './components/BudgetLocations'

let mockBudgetLocations =  [
  { id: 1, name:'Branka', body:'Safeway supermarket'},
  { id: 2, name:'Branka', body:'Arguello supermarket'},
  { id: 3, name:'Branka', body:'Trader Joe\'s'},
  { id: 4, name:'Branka', body:'Whole Foods'}
];

class Main extends React.Component {
render () {
  return (
    <div className="container">
      <BudgetLocationBox />
      <BudgetLocations locations={mockBudgetLocations}/>
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

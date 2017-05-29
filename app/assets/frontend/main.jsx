import BudgetLocationBox from "./components/BudgetLocationBox"
import BudgetLocations from './components/BudgetLocations'

class Main extends React.Component {
render () {
  return (
    <div className="container">
      <BudgetLocationBox />
      <BudgetLocations />
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

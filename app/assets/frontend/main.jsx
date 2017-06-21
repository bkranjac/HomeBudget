import BudgetLocationEdit from "./components/BudgetLocationEdit"
import BudgetLocations from './components/BudgetLocations'

import BudgetCategoryEdit from "./components/BudgetCategoryEdit"
import BudgetCategories from './components/BudgetCategories'
import BudgetSubCategoryEdit from "./components/BudgetSubCategoryEdit"
import BudgetSubCategories from './components/BudgetSubCategories'

import BudgetTransaction from './components/BudgetTransaction'

let mockBudgetLocations =  [
  { key:1, id: 1, user:'BK', place:'Trader Joe\'s'},
  { key:2, id: 2, user:'BK', place:'Safeway'}
];
let mockBudgetCategories =  [
  { id: 1, author:'BK', body:'Household expenses'}
];

let mockBudgetSubCategories =  [
  { id: 1, author:'BK', body:'PG&E'},
  { id: 2, author:'BK', body:'Phone'}
];
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationsList : mockBudgetLocations, categoriesList : mockBudgetCategories, subcategoriesList : mockBudgetSubCategories }
  }

  addLocation(locationToAdd) {
    let newLocationsList = this.state.locationsList;
    newLocationsList.unshift({ id: Date.now(), user: 'BK', place: locationToAdd});
    this.setState({locationsList : newLocationsList });
  }

  addCategory(categoryToAdd) {
    let newCategoriesList = this.state.categoriesList;
    newCategoriesList.unshift({ id: Date.now(), author: 'BK', body: categoryToAdd});
    this.setState({categoriesList : newCategoriesList });
  }

  addSubCategory(subcategoryToAdd) {
    let newSubCategoriesList = this.state.subcategoriesList;
    newSubCategoriesList.unshift({ id: Date.now(), author: 'BK', body: subcategoryToAdd});
    this.setState({subcategoriesList : newSubCategoriesList });
  }

  componentDidMount() {
    $.ajax("/locations")
    .success(data => this.setState({locationsList: data }) )
    .error (error=>console.log(error));
  }

render () {
  return (
    <div className="container">
        <BudgetTransaction locations={this.state.locationsList} />

          <BudgetLocationEdit saveLocation={this.addLocation.bind(this)}/>
          <BudgetLocations locations={this.state.locationsList}/>
          <BudgetCategoryEdit saveCategory={this.addCategory.bind(this)}/>
          <BudgetCategories categories={this.state.categoriesList}/>
          <BudgetSubCategoryEdit saveSubCategory={this.addSubCategory.bind(this)}/>
          <BudgetSubCategories subcategories={this.state.subcategoriesList}/>
    </div>
  );
 }
}

let documentReady  = () => {
  let reactNode = document.getElementById('reactDiv');
  if (reactNode) {
  ReactDOM.render( <Main/>,reactNode);
  $('select').material_select();
  };
};

$(documentReady);

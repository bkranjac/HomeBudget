import BudgetLocationBox from "./components/BudgetLocationBox"
import BudgetLocations from './components/BudgetLocations'

import BudgetCategoryBox from "./components/BudgetCategoryBox"
import BudgetCategories from './components/BudgetCategories'
import BudgetSubCategoryBox from "./components/BudgetSubCategoryBox"
import BudgetSubCategories from './components/BudgetSubCategories'

let mockBudgetLocations =  [
  { id: 1, user:'Branka', place:'Trader Joe\'s'}
];

let mockBudgetCategories =  [
  { id: 1, author:'Branka', body:'Household expenses'}
];

let mockBudgetSubCategories =  [
  { id: 1, author:'Branka', body:'PG&E'},
  { id: 2, author:'Branka', body:'Phone'}
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
render () {
  return (
    <div className="container">
      <BudgetLocationBox saveLocation={this.addLocation.bind(this)}/>
      <BudgetLocations locations={this.state.locationsList}/>
      <BudgetCategoryBox saveCategory={this.addCategory.bind(this)}/>
      <BudgetCategories categories={this.state.categoriesList}/>
      <BudgetSubCategoryBox saveSubCategory={this.addSubCategory.bind(this)}/>
      <BudgetSubCategories subcategories={this.state.subcategoriesList}/>
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

import BudgetLocationAdd from "./components/BudgetLocationAdd"
import BudgetLocations from './components/BudgetLocations'

import BudgetCategoryAdd from "./components/BudgetCategoryAdd"
import BudgetCategories from './components/BudgetCategories'
import BudgetSubCategoryAdd from "./components/BudgetSubCategoryAdd"
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
    this.state = { locationsList : [], categoriesList : [], subcategoriesList : [], transactionsList: [] }
  }

  addLocation(locationToAdd) {
    $.post("/locations", { location: locationToAdd })
    .success(savedLocation => {
      let newLocationsList = this.state.locationsList;
      newLocationsList.unshift(savedLocation);
      this.setState({locationsList : newLocationsList });
    })
    .error(error => console.log(error));
  }

  addCategory(categoryToAdd) {
    $.post("/categories", { categoryName: categoryToAdd, categoryDescription: categoryToAdd })
    .success(savedCategory => {
      let newCategoriesList = this.state.categoriesList;
      newCategoriesList.unshift(savedCategory);
      this.setState({categoriesList : newCategoriesList });
    })
    .error(error => console.log(error));
  }

  addSubCategory(subcategoryToAdd) {
    $.post("/subcategories", { subCategoryName: subcategoryToAdd, subCategoryDescription: subcategoryToAdd })
    .success(savedSubCategory => {
    let newSubCategoriesList = this.state.subcategoriesList;
    newSubCategoriesList.unshift(savedSubCategory);
    this.setState({subcategoriesList : newSubCategoriesList });
  })
  .error(error => console.log(error));
  }

 addTransaction(tToAdd){
   var tdata = { description: tToAdd.description,
                 tdate: tToAdd.transactiondate,
                 amount: tToAdd.amount,
                 isfixed: tToAdd.isFixed,
                 isrecurring: tToAdd.isRecurring,
                 location_id: tToAdd.location_id,
                 subcategory_id: tToAdd.subcategory_id
               };
   $.post("/transactions", tdata)
    .success(savedTransaction => {
      let newTransactionsList = this.state.transactionsList;
      newTransactionsList.unshift(savedTransaction);
      this.setState({transactionsList : newTransactionsList });
               })
    .error(error => console.log(error));

 }

  componentDidMount() {
    $.ajax("/locations")
    .success(data => this.setState({locationsList: data }) )
    .error (error=>console.log(error));
    $.ajax("/categories")
    .success(data => this.setState({categoriesList: data }) )
    .error (error=>console.log(error));
    $.ajax("/subcategories")
    .success(data => this.setState({subcategoriesList: data }) )
    .error (error=>console.log(error));
    $.ajax("/transactions")
    .success (data=> this.setState({transactionsList: data}))
    .error (error => console.log(error));
  }

render () {
  return (
    <div className="row">
      <div className="col s6">
        <BudgetTransaction locations={this.state.locationsList}
                           subcategories={this.state.subcategoriesList}
                           saveTransaction={this.addTransaction.bind(this)} />
      </div>
      <div className="col s6" id="rightcolumn">
          <BudgetLocationAdd saveLocation={this.addLocation.bind(this)}/>
          <BudgetLocations locations={this.state.locationsList}/>
          <BudgetCategoryAdd saveCategory={this.addCategory.bind(this)}/>
          <BudgetCategories categories={this.state.categoriesList}/>
          <BudgetSubCategoryAdd saveSubCategory={this.addSubCategory.bind(this)}/>
          <BudgetSubCategories subcategories={this.state.subcategoriesList}/>
      </div>
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

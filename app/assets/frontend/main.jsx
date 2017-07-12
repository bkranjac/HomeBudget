import BudgetTabs from "./components/BudgetTabs"
import BudgetLocationAdd from "./components/BudgetLocationAdd"
import BudgetLocations from './components/BudgetLocations'

import BudgetCategoryAdd from "./components/BudgetCategoryAdd"
import BudgetCategories from './components/BudgetCategories'
import BudgetSubCategoryAdd from "./components/BudgetSubCategoryAdd"
import BudgetSubCategories from './components/BudgetSubCategories'

import BudgetTransactionAdd from './components/BudgetTransactionAdd'
import BudgetTransactions from './components/BudgetTransactions'

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
    $.post("/subcategories", { name: subcategoryToAdd.subName,
                               description: subcategoryToAdd.subDescription,
                               category_id: subcategoryToAdd.category_id })
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
                 loc_name: tToAdd.loc_name,
                 subcategory_id: tToAdd.subcategory_id,
                 subcat_name: tToAdd.subcat_name
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
      <BudgetTabs />
      <div id="transactions" className="col s12">
        <div className="col s6">
          <BudgetTransactions transactions={this.state.transactionsList} />
        </div>
        <div className="col s6">
            <BudgetTransactionAdd locations={this.state.locationsList}
                           subcategories={this.state.subcategoriesList}
                           saveTransaction={this.addTransaction.bind(this)} />
         </div>
      </div>
      <div id="locations">
        <div className="col s6">
        <BudgetLocationAdd saveLocation={this.addLocation.bind(this)}/>
        </div>
        <div className="col s6">
        <BudgetLocations locations={this.state.locationsList}/>
      </div>

      </div>
      <div id="categories">
        <div className="col s6">
          <BudgetCategoryAdd saveCategory={this.addCategory.bind(this)}/>
        </div>
        <div className="col s6">
          <BudgetCategories categories={this.state.categoriesList}/>
      </div>
    </div>
      <div id="subcategories">
        <div className="col s6">
          <BudgetSubCategoryAdd categories={this.state.categoriesList}
                                saveSubCategory={this.addSubCategory.bind(this)}/>
        </div>
        <div className="col s6">
          <BudgetSubCategories subcategories={this.state.subcategoriesList}/>
        </div>
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

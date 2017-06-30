export default class DropSubCategories extends React.Component {
  constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
    }

     handleClick(event, name) {
      this.props.onSubCategoryChange(event.target.id, name);

    }

render () {
  var subcategories = this.props.subcategories;
  return(
    <span className="mdl-selectfield--floating-label">
      <a className='grey dropdown-button btn' href='#' data-activates='selSubCategories'>Select subcategory</a>
      <ul id='selSubCategories' className='grey dropdown-content' >
        { subcategories.map(function(item, i) {
          return <li key={item.id} name={item.name} id={item.id}
              onClick={e => this.handleClick(e,item.name)}>
                  {item.name}
                  </li>
          }, this)
        }
      </ul>
    </span>
  )
 }
}

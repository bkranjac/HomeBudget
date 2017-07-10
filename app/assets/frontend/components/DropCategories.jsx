export default class DropCategories extends React.Component {
  constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
    }

     handleClick(event, name) {
      this.props.onCategoryChange(event.target.id, name);

    }

render () {
  var categories = this.props.categories;
  return(
    <span className="mdl-selectfield--floating-label">
      <a className='grey dropdown-button btn' href='#' data-activates='selCategories'>Select category</a>
      <ul id='selCategories' className='grey dropdown-content' >
        { categories.map(function(item, i) {
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

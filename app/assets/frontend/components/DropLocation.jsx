export default class DropLocation extends React.Component {
  constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
    }

     handleClick(event, place) {
      this.props.onLocationChange(event.target.id, place);

    }

render () {
  var locations = this.props.locations;
  return(
    <span>
      <a className='dropdown-button btn' href='#' data-activates='selLocation'>Where did transaction occur?</a>
      <ul id='selLocation' className='dropdown-content' >
        { locations.map(function(item, i) {
          return <li key={item.id} name={item.place} id={item.id}
              onClick={e => this.handleClick(e,item.place)}>
                  {item.place}
                  </li>
          }, this)
        }
      </ul>
    </span>
  )
 }
}

import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent ,putEvent } from '../actions'
import _ from 'lodash';
//import event_new from './event_new';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EventsShow extends Component {

constructor( props ) {
  console.log("EventShow")
  super(props)
  this.onSubmit = this.onSubmit.bind(this)
  this.onDeleteClick = this.onDeleteClick.bind(this)
}
  //
  componentDidMount() {
    
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

 renderField( field) {
    const { input, label, type,meta: { touched, error } } = field

    return (
      <TextField
      hintText="Hint Text" 
      floatingLabelText={label}
      type={type}
      errorText={touched && error }
      {...input}
      fullWidth={true}
      />
    // <div> 
    //   <input {...input} placeholder={label} type={type}/>    
    // { touched && error && <span> { error } </span> }
    // </div>
    
    )
 }  

async onSubmit( values ) {

  console.log(values)

  await this.props.putEvent( values )
  this.props.history.push('/')
}

async onDeleteClick() {
  //param 의 확인을 콘솔에서 하는것 풀어서 쓰면 됨.
  console.log(this.props.match)
  const {id} = this.props.match.params
  console.log( {id})
  await this.props.deleteEvent(id)
  this.props.history.push('/')
}


  render() {
    const style = {
      margin: 12,
    };

    const { handleSubmit , pristine , submitting , invalid} = this.props
    //const props = this.props
    console.log(submitting)
    return (
      <form onSubmit={handleSubmit( this.onSubmit )}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
        <RaisedButton label="submit" style={style} type="submit" disabled={ pristine || submitting || invalid} />
        <RaisedButton label="Cancle" style={style} containerElement={<Link to="/"></Link>} />
        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
        {/* <div><input type="submit" value="submit" disabled={ pristine || submitting || invalid} />
        <Link to="/">Cancle</Link>
        <Link to="/" onClick={this.onDeleteClick}>Delete</Link> */}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

const mapDispatchToProps = ({ deleteEvent , getEvent, putEvent })

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(  mapStateToProps ,mapDispatchToProps )(
  reduxForm({ validate, form: 'eventShowForm' ,enableReinitialize:true})(EventsShow)
)
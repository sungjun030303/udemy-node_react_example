import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvnet, deleteEvent } from '../actions'
import _ from 'lodash';

class EventsShow extends Component {

constructor( props ) {
  console.log("EventShow")
  super(props)
  this.onSubmit = this.onSubmit.bind(this)
  this.onDeleteClick = this.onDeleteClick.bind(this)
}
  //
  componentDidMount() {
    //빈 화면이라 없음.
  }

 renderField( field) {
    const { input, label, type,meta: { touched, error } } = field

    return (
    <div> 
      <input {...input} placeholder={label} type={type}/>    
    { touched && error && <span> { error } </span> }
    </div>)
 }  

async onSubmit(values) {
  await this.props.postEvents(values)
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
    const { handleSubmit , pristine , submitting } = this.props
    //const props = this.props
    console.log(submitting)
    return (
      <form onSubmit={handleSubmit( this.onSubmit )}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div><input type="submit" value="update" disabled={ pristine || submitting} />
        <Link to="/">Cancle</Link>
        <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

// const mapStateToProps = state =>({ 
//    events : state.events
// })

const mapDispatchToProps = ({ deleteEvent })

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(  null,mapDispatchToProps )(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)
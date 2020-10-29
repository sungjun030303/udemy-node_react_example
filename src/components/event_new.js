import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { Link } from 'react-router-dom'

import { postEvents } from '../actions'
import _ from 'lodash';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class EventsNew extends Component {

constructor( props ) {
  super(props)
  this.onSubmit = this.onSubmit.bind(this)
}

  //
  componentDidMount() {
    //빈 화면이라 없음.
  }

  renderField( field) {
    
    const { input, label, type,meta: { touched, error } } = field

    return (
      <div>
      <TextField
      hintText="Hint Text" 
      floatingLabelText={label}
      type={type}
      errorText={touched && error }
      {...input}
      fullWidth={true}
      />
      </div>)
    // <div> 
    //   <input {...input} placeholder={label} type={type}/>    
    // { touched && error && <span> { error } </span> }
    // </div>)
  }  


async onSubmit(values) {
  await this.props.postEvents(values)
  this.props.history.push('/')
}

  render() {

    const style = {
      margin: 12,
    };

    const { handleSubmit , pristine , submitting ,invalid} = this.props
    //const props = this.props
    console.log(submitting)
    return (
      <form onSubmit={handleSubmit( this.onSubmit )}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        
        <div>
        <RaisedButton label="submit" style={style} type="submit" disabled={ pristine || submitting || invalid} />
          {/* <input type="submit" value="submit" disabled={ pristine || submitting || invalid} /> */}
        {/* <Link to="/">Cancle</Link> */}
        <RaisedButton label="Cancle" style={style} containerElement={<Link to="/"></Link>} />
        
        </div>
      </form>
    )
  }
}

// const mapStateToProps = state =>({ 
//    events : state.events
// })

const mapDispatchToProps = ({ postEvents })

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(  null,mapDispatchToProps )(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
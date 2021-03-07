import React, { Component }  from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class GuideForm extends Component {

    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this)
    }

    componentDidMount() {
        //console.log('Form :'+JSON.stringify(this.props))
    }

    submitForm({guide_content}) {
        const { match : { params :{ parent_id } }, history }  = this.props
        const new_guide = {
            "parent_id" : parent_id,
            "text" : guide_content
        }
        console.log(new_guide)
        history.push('/guide')
        this.props.addGuide(new_guide)
    }

    renderFields() {        
        const { match : { params :{ parent_id } } }  = this.props
        return (
            <div>
                {/* <Field name="parent_id" component="input" defaultValue={parent_id}/> */}
                <Field name="guide_content" component="textarea"/>
            </div>        
        );
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.submitForm)}>
                <div >
                    {this.renderFields()}
                    <Link to="/guide" className="waves-effect waves-light btn left bottom">Cancel</Link>
                    <button type="submit" className="waves-effect waves-light btn right bottom">Submit</button>                
                </div>
            </form>
        );
    }
}


export default reduxForm({form : 'guideForm'})(connect(null, actions)(withRouter(GuideForm)));
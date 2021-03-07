import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../actions'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'


class Guide extends Component {

    constructor(props) {
        super(props);
    }

    prevGuide() {
        const { help } = this.props;
        console.log('In prev :'+JSON.stringify(help))
        const { guide, curr_guide_id } = help;

        const parentOption = guide.find(option => option.id == curr_guide_id)
        if(parentOption)
            this.props.selectGuide(parentOption.parent_id)
    }

    nextGuide(id) {
        this.props.selectGuide(id)
    }

    deleteGuide(e, guide) {
        e.stopPropagation();
        confirmAlert({
            message: 'Are you sure?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.props.deleteGuide(guide)
              },
              {
                label: 'No'
              }
            ]
          });
    }

    buildOption(option) {
            
        if(option.node_type == 'leaf') {
            if(option.youtube) {
                return (                    
                    <div key={option.id} className="card-panel">
                        <div>
                            <span className="blue-text text-darken-2">
                                {option.text}
                            </span>
                            <div className="videoWrapper">
                                <iframe src={option.youtube} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>  
                            <div className="waves-effect waves-teal btn right" onClick={(e) => this.deleteGuide( e, option.id)}><i className="material-icons">close</i></div>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div key={option.id} className="card-panel" onClick={(e) => this.nextGuide(option.id)}>
                <ReactMarkdown escapeHtml={false} plugins={[gfm]} children={option.text}></ReactMarkdown>
                <div className="waves-effect waves-light btn right"  onClick={(e) => this.deleteGuide(e, option.id)}><i className="material-icons">close</i></div>
            </div>
        )        
    }

    render () {
        const { help } = this.props;

        console.log('render :'+ (help && help.curr_guide_id))

        if( help == null || help == false)
            return (<div></div>)
        else {
            const { guide, curr_guide_id} = help;
            return (
                <div>
                    <div>
                        {
                            guide.filter(option => option.parent_id == curr_guide_id).map(option =>{
                                return this.buildOption(option)
                            })
                        }
                    </div>
                    <div>
                        {
                            (curr_guide_id != 'root') ? <div className="waves-effect waves-light btn" onClick={(e) => this.prevGuide()}><i className="material-icons left">arrow_back</i></div> : <div></div>
                        }                        
                    </div>
                    <Link to={"/guide/form/"+curr_guide_id} className="waves-effect waves-light btn right"><i className="material-icons">add</i></Link>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    //console.log('In Guide :'+JSON.stringify(state))
    return state;
}

export default connect(mapStateToProps, actions)(Guide);
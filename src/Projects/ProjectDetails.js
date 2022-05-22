import React from 'react'
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
const ProjectDetails = (props) => {
    const { id } = useParams()
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - { id }</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea quo perspiciatis voluptas inventore. Esse aperiam iure, commodi debitis ab delectus perspiciatis dignissimos ad voluptas hic perferendis natus vero magnam.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by the Wolfhead</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    return {

    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

export default compose(
    withRouter,
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
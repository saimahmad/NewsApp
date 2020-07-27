import React from 'react';
import { connect } from "react-redux";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { goToDetails } from "../redux"
import { goToHome } from "../redux"


function Details(props) {
    const details = useSelector(state => state.page.details) 
    const sourceId = useSelector(state => state.page.sourceId) 
    const dispatch = useDispatch()
    return (
        <div>
            
            <button onClick={()=>dispatch(goToHome(sourceId))}>back</button>
            {details.content}
            {details.author}
        </div>
    );
}

// const mapStateToProps = (state) => {
//   return {
//     details: state.page.details
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     goToHome: () => dispatch(goToHome()),
//   };
// };


export default Details
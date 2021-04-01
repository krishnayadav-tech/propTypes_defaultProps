import React, { useEffect, useState} from "react";
import {useSelector,useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
const App = (props)=>{
    let counter = useSelector(store=>store.counter);
    let dispatch = useDispatch();
    useEffect(function(){
        let interval = setInterval(function(){
            dispatch({
                type : "add"
            })
        },1000);

        return ()=>{
            clearInterval(interval);
        }
    },[]) // componentdidmount


    return (
        <>
            <h1>Conter : {counter}</h1>
        </>
    )
}

App.propTypes = {
    name : PropTypes.string
}

App.defaultProps = {
    name : "Krishna",
    age : 19
}
export default App;
// ReactLibrary state App()->
// 
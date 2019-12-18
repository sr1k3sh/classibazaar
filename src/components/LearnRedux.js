import React from 'react'
import {connect} from 'react-redux';
import Form from '../Form';
import Post from './../components/Post'
const mapStateToProps=state=>{
    return{
        articles:state.articles
    };
}
const connectedList=({articles})=>(
    <React.Fragment>
        <ul>
            <li>ok</li>
            {
                articles.map(item=>(
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))
            }
        </ul>
    <Form></Form>
    <Post></Post>
    </React.Fragment>
)
const LearnRedux = connect(mapStateToProps)(connectedList);
export default LearnRedux;


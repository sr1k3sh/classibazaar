import React, { Component } from 'react'
import {getData} from './../action/index'
import {connect} from 'react-redux'
export class Post extends Component {
    componentDidMount(){
        this.props.getData()
    }
    render() {
        const {articles}=this.props
        console.log(articles)
        return (
            <div className="post">
                <div className="container">
                    <ul>
                        {articles.map(item=><li key={item.id}>
                            {item.title}
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        articles:state.remoteArticles.slice(0,4)
       
    }
}
export default connect(mapStateToProps,{getData})(Post);
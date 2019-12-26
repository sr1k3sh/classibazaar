import React, { Component } from 'react'

import {connect} from 'react-redux'


class Post extends Component {
   

    render() {
        
        
      
        return (
            <ul>
                ok
                {
                /* {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))} */}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Post);
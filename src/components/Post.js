import React, { Component } from 'react'

import {connect} from 'react-redux'

import {fetch_featured_deals}  from './../action/ProductActions'
class Post extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetch_featured_deals());
    }

    render() {
        const { error, loading, products } = this.props;
        
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <ul>
                
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
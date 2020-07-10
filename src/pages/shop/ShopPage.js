import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { selectIsCollectionsLoaded } from '../../redux/shop/ShopSelector';
// import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { fetchCollectionsStartAsync } from '../../redux/shop/ShopActions'; 

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const { match } = this.props;
        return(
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
                />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
                />
            </div>
)}};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
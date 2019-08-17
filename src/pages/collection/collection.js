import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.scss'

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <h2>COLLECTION PAGE</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
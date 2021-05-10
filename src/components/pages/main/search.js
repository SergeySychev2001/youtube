import React from 'react';
import { connect } from 'react-redux';
import SearchDefault from './search/search-default';
import SearchResult from './search/search-result';
// import store from '../../../redux/store'

const Search = ({videoData, loading}) => {
    const content = (loading || (Object.keys(videoData).length > 0)) ? (<SearchResult/>) : (<SearchDefault/>);
    return(
        <>
            {content}
        </>
    )
}

const mapStateToProps = ({videoData, loading}) => {
    return {
        videoData,
        loading
    }
}

export default connect(mapStateToProps)(Search);
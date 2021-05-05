import React, { useState } from 'react';
import Filter from '../../../filter';
import SearchForm from '../../../forms/search-form';
import Grid from '../../../grid/grid';
import List from '../../../list/list';
import '../../../../styles/pages/main/search/search-result.css';
import { connect } from 'react-redux';

const SearchResult = ({totalResults, requestName, videoList}) => {

    const [filterType, setFilterType] = useState('grid');

    const filter =  filterType === 'grid' ? <Grid videoList={videoList}/> : 
                    filterType === 'list' ? <List videoList={videoList}/> : null ;

    const filterContent = videoList ? filter : null;

    return(
        <div className="search-result">
            <SearchForm/>
            <Filter filterType={filterType} 
                    setFilterType={setFilterType}
                    totalResults={totalResults}
                    requestName={requestName}
                    />
            {filterContent}
        </div>
    )
}

const mapStateToProps = ({videoData}) => {
    return {
        requestName: videoData.requestName,
        totalResults: videoData.totalResults,
        videoList: videoData.videoList
    }
}

export default connect(mapStateToProps)(SearchResult);
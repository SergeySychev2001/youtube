import React, { useState } from 'react';
import Filter from '../../../filter';
import SearchForm from '../../../forms/search-form';
import Grid from '../../../grid/grid';
import List from '../../../list/list';
import '../../../../styles/pages/main/search/search-result.css';

const SearchResult = () => {

    const [filterType, setFilterType] = useState('grid');

    const filter = filterType === 'grid' ? <Grid/> : filterType === 'list' ? <List/> : null ;

    return(
        <div className="search-result">
            <SearchForm/>
            <Filter filterType={filterType} setFilterType={setFilterType}/>
            {filter}
        </div>
    )
}

export default SearchResult
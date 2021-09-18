import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search-group">
                <button className="bt-icon-search" type="button" ><img src="../img/search.png" alt="img search button" /></button>
                <input className="input-serch" placeholder="Tìm kiếm" />
            </div>
        );
    }
}

export default Search;
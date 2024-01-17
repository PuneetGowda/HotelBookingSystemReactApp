import React, { Component } from 'react';
import { searchHotel } from '../handler/SearchHotelHandler';
import Input from './Input';

class Search extends Component {
  constructor() {
    super();

    this.inputSearchRef = React.createRef();

    console.log('inside search constructor');
  }

  searchHandler(event) {
    console.log('Event is ', event);
    if (event.keyCode === 13) {
      console.log(
        'Search value is ',
        this.inputSearchRef.current.input.current.value
      );

      searchHotel(this.inputSearchRef.current.input.current.value);
    }
  }

  render() {
    return (
      <div>
        <Input
          onKeyUp={this.searchHandler.bind(this)}
          ref={this.inputSearchRef}
          className="search-bar"
          placeholder="Search"
          type="search"
        />
      </div>
    );
  }
}

export default Search;

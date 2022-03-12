import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
  
  state = {listings: []}

  // onSearchSubmit = async(term) => {
  //   const response = await axios.get(`http://localhost:5000/api/v1/consumer/fetch/listings/${term}`)
  //   this.setState({listings : response.data});
  // }

  componentDidMount() {
    // calls api directly
    const getListings = async () => {
        const response = await axios.get('http://localhost:5000/api/v1/consumer/fetch/listings/Betty')
        this.setState({listings : response.data});
    }
    getListings();
  }



  render() {
    return(
      <div className = "ui container" style = {{marginTop: '10px'}}>
        <h1> Listings result count: {this.state.listings.length} </h1>
        <ImageList 
          listings = {this.state.listings}
        />
      </div>

    )
  }
}

export default App;
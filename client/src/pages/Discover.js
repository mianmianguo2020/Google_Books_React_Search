import React, { Component } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";
import SearchForm from "../components/SearchForm";
// import SortByCity from "../components/SortByCity";
class Discover extends Component {
  state = {
    bookData: [],
    search: "google",
  };

  componentDidMount(search) {
    this.queryForBooks(search);
  }

queryForBooks= (search) => {
    API.queryForBooks(search)
  
      .then(res =>
    // {console.log(res.data.items)}
        this.setState({
        bookData: res.data.items
        })
      )
      .catch(err => console.log(err));
  };

searchByName= (event) => {
    event.preventDefault();
    const bookName = event.target.name.value;
console.log(bookName)
    this.setState({search:bookName})
    
  }
//   sortByLocation = (event) => {
//     event.preventDefault();
//     const sortParams = event.target.value;
//     const employeeData = [...this.state.employeeData]
//     if (sortParams === 'Sort location by ascending order'){
//       employeeData.sort(function(a,b) {
//         const locationA = a.location.city;
//         const locationB = b.location.city;
//         if(locationA < locationB){
//           return -1;
//         }
//         if(locationA > locationB){
//           return 1;
//         }
//         return 0;
//       })
//       this.setState({employeeData:employeeData})
//   }
// }

  handleInputChange = (event) => {
    event.preventDefault();
  }
  render() {
            this.queryForBooks(this.state.search);

    return (
      <div>
        <SearchForm handleFormSubmit={this.searchByName} handleInputChange={this.handleInputChange} />
{/*         <SortByCity handleFormSubmit={this.sortByLocation}   /> */}
        <BookCard bookData={this.state.bookData}  />
       
      </div>  
    );
  }
}
export default Discover;

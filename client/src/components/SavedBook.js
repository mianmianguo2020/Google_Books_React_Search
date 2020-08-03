import React, { Component } from "react";
import API from "../utils/API";
import SavedBookCard from "./SavedBookCard";

class SavedBook extends Component {
  state = {
    savedbookData: [],
//     search: "google",
  };

//   componentDidMount(search) {
//     this.queryForBooks(search);
//   }

getPosts= () => {
    API.getPosts()
  
      .then(res =>
    // {console.log(res.data)}
        this.setState({
    savedbookData: res.data
        })
      )
      .catch(err => console.log(err));
  };


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
        //     this.queryForBooks(this.state.search);
        this.getPosts()
    return (
      <div>
{/*         <SearchForm handleFormSubmit={this.searchByName} handleInputChange={this.handleInputChange} /> */}
{/*         <SortByCity handleFormSubmit={this.sortByLocation}   /> */}
        <SavedBookCard savedbookData={this.state.savedbookData}  />
       
      </div>  
    );
  }
}
export default SavedBook;

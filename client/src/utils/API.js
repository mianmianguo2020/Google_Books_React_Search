import axios from "axios";


export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },
  queryForBooks: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
  getPosts: function() {
    return axios.get("/api/posts");
  },

  createPosts: function(id) {
    return axios.post("/api/posts" + id);
  },

};
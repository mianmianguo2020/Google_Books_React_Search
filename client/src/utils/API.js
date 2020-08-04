import axios from "axios";


export default {

  queryForBooks: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
  getPosts: function() {
    return axios.get("/api/posts");
  },
  createPosts: function(book) {
    return axios.post("/api/posts", book);
  },
  deletePosts: function(id) {
    return axios.delete(`/api/posts/${id}`);
  },

};
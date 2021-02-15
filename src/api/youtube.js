import axios from "axios";
const KEY = "AIzaSyDhJJIaAHsC-l6qT3n78yL8axwDJXSxAHU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

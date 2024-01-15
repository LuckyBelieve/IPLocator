import axios from "axios";

export default axios.create({
  baseURL: "https://geo.ipify.org/api/v2",
  params: {
    apiKey: "at_O4JNPeEYtNAKLKqoJuQ8YhP6WqhfR",
  },
});


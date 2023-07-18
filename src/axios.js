import axios from "axios";

const instance =axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-5f724/us-central1/api' // The Api Url
});

export default instance;
const BASE_URL = "http://localhost:3000";

import axios from 'axios';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});
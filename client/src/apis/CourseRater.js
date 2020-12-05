import axios from 'axios';

export default axios.create({
    baseURL: "https://pern-course-rater.herokuapp.com"
})
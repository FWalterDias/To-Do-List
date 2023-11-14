import axios from "axios";

export default axios.create({
    baseURL:"https://biz24mctej.us-east-1.awsapprunner.com",
    timeout: 10000,
    headers:{
        "Content-Type": "application/json"
    }
});
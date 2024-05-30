import axios from "axios"

export default axios.create({
    baseUrk:"",
    headers:{
        "Content-type": "application/json"
    }
});
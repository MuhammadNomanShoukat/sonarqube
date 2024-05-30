import http from "../http-common";

class TestService{
    constructor(){
        console.log("test server running")
    }

    check(){
        console.log("check function also working")
    }
}

export default new TestService();
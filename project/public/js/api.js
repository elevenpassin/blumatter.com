/* * ************************************************************ 
 * Date: 4 Jan, 2018
 * programmer: Shani Mahadeva <satyashani@gmail.com>
 * Javascript file api.js
 * *************************************************************** */


var api = {
    login : function(data){
        return {
            url : "/login", method : "POST", data : data
        };
    },
    logout : function(){
        return {
            url : "/logout", method : "GET"
        };
    },
    registerClient : function(data){
        return {
            url : "client", method : "POST", data : data
        };
    },
    registerExpert : function(data){
        return {
            url : "expert" , method : "POST", data : data
        };
    },
    createProject : function(data){
        return {
            url : "project", method : "POST", data : data
        };
    },
    upload : function(data) {
        return {
            url : "/uploadcv", method : "POST", data : data
        };
    }
};
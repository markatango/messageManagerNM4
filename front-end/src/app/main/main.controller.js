/**
Controller for main.html, connected to main.html via .state in index.route.js
*/
export class MainController {

    // construct MainController with reference to angular $http
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.getMessages();
    }

    getMessages() {
        var vm = this; // keep the origin object persistent for the call back function
        this.$http.get('http://localhost:5000/api/message').then(function (result) {

            // bound to main.html as 'main.messages'
            vm.messages = result.data;
        })
    }

    // function for the post button on main.html
    postMessage() {
        this.$http.post('http://localhost:5000/api/message', {
            //binding with ng-model "main.message" in <textarea>
            msg: this.message
        });
    }
}
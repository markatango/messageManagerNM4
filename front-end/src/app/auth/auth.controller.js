export class AuthController {
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }

    register2() {
        console.log("test");
    }

    register() {
        var vm = this; // always need to save object instance for the callback function
        this.$auth.signup(this.user).then(function (token) {
            vm.$auth.setToken(token);
        })
    }

    login() {
        var vm = this; // always need to save object instance for the callback function
        this.$auth.login(this.login.user).then(function (token) {
            vm.$auth.setToken(token);
        })
    }
}
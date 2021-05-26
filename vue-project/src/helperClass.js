export default {
    emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    usernameRegex: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9])[a-zA-Z0-9]*$/
    ,
    validateEmail(email) {
        return this.emailRegex.test(email);
    },
    validateUsername(username) {
        return this.usernameRegex.test(username);
    },
}
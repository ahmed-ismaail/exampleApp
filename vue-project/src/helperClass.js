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
    customizeObject(list) {
        let governmentsList = [];
        list.forEach((element) => {
            governmentsList.push({
                id: element["fields"][0]["value"],
                name: element["fields"][1]["value"],
                is_active: element["fields"][2]["value"],
                created_at: element["fields"][3]["value"],
            });
        });
        //console.log(governmentsList);
        return governmentsList;
    },
}
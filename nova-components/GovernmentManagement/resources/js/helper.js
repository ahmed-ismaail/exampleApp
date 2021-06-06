export default{
    customizeObject(list) {
        let governmentsList = [];
        list.forEach((element) => {
            let temp = {};
            element["fields"].forEach((field) => {
                _.extend(temp, { [field["attribute"]]: field["value"] });
            });
            governmentsList.push(temp);
        });
        return governmentsList;
    },
}
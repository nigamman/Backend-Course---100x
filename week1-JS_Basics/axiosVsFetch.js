const axios = require("axios");

//fetch --function
async function mainFetch() {
    const response = await fetch("http://", {
        method: "PUT"
    });
    const json = await response.json();
    console.log(json.todos.length);
}
//axios --function
async function mainAxios() {
    const response = await axios(
        {
            url: "",
            method: "POST",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "admin",
                password: "123ad"
            }
        },
    );
    console.log(response.data);
}
mainFetch();
mainAxios();
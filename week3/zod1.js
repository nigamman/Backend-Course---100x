const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "admin@gmail.com",
    password: "rerefdsfdsfdsr" 
});

app.post("/login", function(req, res){
    const response = validateInput(req.body);
    if(!response.success) {
        res.json({
            msg: "Your inputs are invalid"
        })
        return;
    }
    //if success, return success message
});
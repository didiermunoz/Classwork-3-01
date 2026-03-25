//import module express
const express = require('express');

//create an instance
const app = express();

//Middlewarm
app.use(express.json());

//Simulación de tabla o colección
const users = [];

//Endpoint GET
app.get("/getUserInfo", (request , response) => {
    response.send(users);
});

//Tell the app to listen on port 3000
app.listen(3000, ()=>{
    console.log("My app is running")
})

app.post("/user", (request, response) =>{
    users.push(request.body);
    console.log(users);
    response.send("User added succesfully");
})

app.get("/user", (request, response)=>{
    response.send(users);
});

app.get("/user/:id", (request, response)=>{
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id)
    response.send(userFound);
});

app.put("/user/:id", (request, response)=>{
    const id = request.params.id;
    const requestPwd = request.body.password;
    const requestUsername = request.body.username;
    const userFound = users.find((user) => user.id == id)
    userFound.pwd = requestUsername;
    userFound.username = requestPwd;
    response.send("Users updated succesfully");
});

app.delete("/user/:id", (request, response)=>{
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id)
    users.splice(users.indexOf(userFound), 1);
    response.send("User deleted");
});

app.get
app.post
app.put
app.delete
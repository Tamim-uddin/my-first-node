const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello From My First Node,system and testing')
});

app.listen(port, () => {
    console.log('listening to port', port);
});


const users = [
    {id: 0, name: "mowsumi", email: "mowsumi@gmail.com", phone: "0197483434"},
    {id: 1, name: "koesumi", email: "koesumi@gmail.com", phone: "0197483434"},
    {id: 2, name: "jossumi", email: "jossumi@gmail.com", phone: "0197483434"},
    {id: 3, name: "nosumi", email: "nosumi@gmail.com", phone: "0197483434"},
    {id: 4, name: "hosumi", email: "hosumi@gmail.com", phone: "0197483434"}

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter module 63-5
    if(search){
        const searchresult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchresult);
    }
    else{
        res.send(users)
    }
    
});

// app MEthod module 63-7
app.post('/users', (req, res) => {
    const newuser = req.body;
    newuser.id = users.length;
    users.push(newuser);
    console.log('hitting the post', req.body);
    res.json(newuser);
})

// dynamic API module 63-2
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});
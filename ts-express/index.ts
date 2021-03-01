import express from 'express';
import bodyParser from 'body-parser';
// import { addUser, getUser } from './data/users'
import { routes } from './routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send('Hello Worlds');
// })

// app.post('/users', (req, res) => {
//     const { username, password } = req.body;
//     // console.log(req)
//     console.log(`${username} -- ${password}`)
//     if (!username?.trim() || !password?.trim()) {
//         return res.status(400).send('Bad username and password');
//     }
//     addUser({ username, password });
//     res.status(201).send('User created')
// })

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const found = getUser({username, password});
//     if (!found) {
//         return res.status(401).send('Login failed')
//     }
//     res.status(200).send('Success');
// });

routes.forEach((route) => {
    const { method, path, middleware, handler } = route;
    app[method](path, ...middleware, handler);
    
});

app.listen(PORT, () => {
    console.log(`Express with Typescript @ localhost:${PORT}`)
})
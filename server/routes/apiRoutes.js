const guide = require('../static_data/guide.json')

const { v4: uuidv4 } = require('uuid');

module.exports = app => {

    app.post('/api/login', (req, res) => {
        const user = req.body

        if(user.username == 'admin' && user.password == 'googleplus')
            res.send(user);
        else
            res.send({ error : "Username or Password is not matched"});
    });

    app.get('/api/guide', (req, res) => {
        res.send(guide);
    });

    app.post('/api/guide', (req, res) => {
        const sub_guide = req.body
        generate_id = uuidv4(); // '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        sub_guide['id'] = generate_id
        guide.push(sub_guide)
        console.log(guide)
        res.status(201).send(sub_guide);
    });

    app.delete('/api/guide/:id', (req, res) => {
        const sub_guide_id = req.params.id
        console.log('Deleting from server :'+JSON.stringify(sub_guide_id))

        const atIndex = guide.findIndex(a => a.id === sub_guide_id)
        atIndex !== -1 && guide.splice(atIndex , 1)

        console.log('Deleted from server :'+JSON.stringify(sub_guide_id))

        res.status(201).send({id :sub_guide_id});
    });
}
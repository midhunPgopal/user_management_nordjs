const axios = require ('axios')

exports.homeRoutes = (req, res) => {
    //make a get request to api/users
    axios.get('http://localhost:3000/api/users').then((response) => {
        res.render('index',{users:response.data})
    }).catch((error) => {
        res.status(500).send({message: error.message || 'Error occured'})
    })
    
}

exports.add_user = (req, res) => {
    res.render('add-user')
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}}).then(function(userdata){
        res.render('update-user', {user: userdata.data})
    }).catch((error) => res.send(error))
}
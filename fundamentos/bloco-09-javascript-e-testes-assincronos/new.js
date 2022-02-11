const fetch = require('node-fetch');

const usuarioGetUrl = (username) => `https://api.github.com/users/${username}`

const unsuarioInfos = async (username) => {

    const url = usuarioGetUrl(username);


    const result = await fetch(url);
    const data = await result.json();


    const {name, blog, location, bio} = data;

    return {
        name,
        blog,
        location,
        bio
    };
};

unsuarioInfos('Alex-Horman-de-Medeiros-Correia')
    /* .then((data) => console.log(data)); */

module.exports = { usuarioGetUrl, unsuarioInfos };
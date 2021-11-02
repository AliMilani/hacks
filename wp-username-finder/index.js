import fetch from "node-fetch";

function logAdminUsername(url) {
    fetch(url)
        .then(res => res.json())
        .then(out =>
            console.log('Found! USERNAME: ', out[0]['slug']))
        .catch(err => { console.log('We can not find the admin :(') })

}

const domain = 'google-db.ir'
logAdminUsername(`https://${domain}/wp-json/wp/v2/users/`)
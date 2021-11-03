import fetch from "node-fetch";

function logAdminUsername(url) {
    // let adminList = []
    fetch(url)
        .then(res => res.json())
        .then(out => console.log('Found! USERNAME/S: ', out.map(username => username['slug'])))
        .catch(err => { console.log('We can not find the admin :(') })

}

const domain = 'localhost:81/site2'
logAdminUsername(`http://${domain}/wp-json/wp/v2/users/?per_page=100&page=1`)
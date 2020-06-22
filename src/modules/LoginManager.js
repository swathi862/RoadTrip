export default {
    loginAccount(emailValue){
    return fetch(`http://localhost:5002/users?email=${emailValue}`)
    .then(r => r.json())
    },
    register(user){
        return fetch(`http://localhost:5002/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(data => data.json())
    }
}
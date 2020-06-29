const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/trips/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/trips?userId=${localStorage.getItem("userId")}`).then(result => result.json())
  },
  getActivities(){
    return fetch(`${remoteURL}/activities`).then(result => result.json())
  },
  delete(id){
    return fetch(`${remoteURL}/trips/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newTrip){
    this.newTrip.userId = localStorage.getItem("userId")
    return fetch(`${remoteURL}/trips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrip)
    }).then(data => data.json())
  },
  update(newTrip){
    return fetch(`${remoteURL}/trips/${newTrip.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrip)
      }).then(data => data.json());
  }
}
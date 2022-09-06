const baseURL = 'http://localhost:9000/api/games/'

export const getTypedWord = () =>{
    return fetch(baseURL)
    .then(res => res.json())
}

export const postTypedWord = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteTypeWord = (id) =>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}


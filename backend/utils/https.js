async function get(url, options) {
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }catch(e){
        return e
    }
}

module.exports.get = get
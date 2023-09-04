function getUser(id) {

    const p = new Promise((resolve, reject) => {

        let check = true

        setTimeout(() => {
            
            if(check) {
                console.log('retreive a user from the database !')
                resolve({id, name: "Mohamed Idbrahim"})
            }else {
                reject('User is not found !')
            }
        }, 2000)
    })

    return p;

}

function getProducts(userId) {

    let check = false

    let p = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            if(check) {
                
                console.log(`retreive all product for thiq user id : ${userId}`)
                resolve(['product 1', 'product 2'])
            }else {
                reject("not products found!")
            }
        }, 3000)
    })

    return p
}


console.log('before')

getUser(12)
.then(user => {
    console.log(user)
    return getProducts(user.id)
})
.then(products => console.log(products))
.catch(err => console.log(err))

console.log('after')

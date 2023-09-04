function getUser(id) {

    return new Promise((resolve, reject) => {

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

}

function getProducts(userId) {

    let check = false

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            if(check) {
                
                console.log(`retreive all product for thiq user id : ${userId}`)
                resolve(['product 1', 'product 2'])
            }else {
                reject("not products found!")
            }
        }, 3000)
    })

}


async function run() {

    try {
        
        let user = await getUser(12)
        console.log(user)
    
        let products = await getProducts(user.id)
        console.log(products)
    } catch (error) {
        console.log(error)
    }
}

console.log('before')

run()

console.log('after')

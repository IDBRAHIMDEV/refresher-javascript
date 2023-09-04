// let i = 800

// for(let i = 0; i < 3; i++) {
//     console.log("iteration " + i)
// }

// console.log("final " + i)

// const PI = 3.14

// PI = 3.15

// console.log("pi : " + PI)

// const user1 = {
//     id: 1,
//     name: "Med"
// }

// console.log("user1", user1)

// const user2 = {
//     id: 2,
//     name: "walid"
// }

// console.log("user2", user2)

// user2.name = user1.name
// console.log("user2 updated", user2)


// user1 = user2

// function saySomeThing(name) {
//     return "Salam " + name
// }

/*
  const saySomeThing = name => "salam " + i
*/



// let product = {
//     id: 1,
//     label: "Book",
//     price: 1500,
//     description: "sfdfsdfksd",
//     slug: "ff-dd-dd",
//     tags: ['t1', 't2'],
//     greeting: () => {
//         console.log("salam les dev")
//     }
// }

// let { slug, description, tags, greeting } = product

// greeting()
// console.log('desc:', description, 'slug: ', slug, 'tags : ', tags)


console.log('before')

getUser(12, (user) => {

    console.log(user)
    getProducts(user.id, products => console.log(products))
})

console.log('after')


function getUser(id, callback) {
    setTimeout(() => {
        console.log('retreive a user from the database !')
        callback({id, name: "Mohamed Idbrahim"})
    }, 2000)
}

function getProducts(userId, callback) {
    setTimeout(() => {
        console.log(`retreive all product for thiq user id : ${userId}`)
        callback(['product 1', 'product 2'])
    }, 3000)
}




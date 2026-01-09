const fruits = ['mango','apple','orange', 'goat']
const extraFruits = [...fruits]
extraFruits.push('dates')
extraFruits.push('grapes')


const user = {
    firstName:'tafazul',
    lastName:'aijaz',
     pata : {
        city: 'delina',
        number:2393993333
     }

    
}
const user2 =JSON.parse(JSON.stringify(user))
user2.lastName = 'qureshi'

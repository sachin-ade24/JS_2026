
const nums = [10, 20, 30];
console.log(Math.max(...nums));//30
console.log(Math.min(...nums));//10

//======================================================

const user = {
  name: "Sachin",
  address: {
    city: "Pune"
  }
};

const copiedUser = {...user};

console.log(copiedUser);
/*
{ name: 'Sachin', address: { city: 'Pune' } }
*/

copiedUser.address.city = "Mumbai";

console.log(user.address.city);

console.log(copiedUser);
/*
{ name: 'Sachin', address: { city: 'Mumbai' } }
*/

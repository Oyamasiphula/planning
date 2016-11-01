var one = '102'
//variables can change
    one = '120' //-> This an update ;

const two = '200';
console.log(two); //-> 200

//constants can't changes
two = '202';

//two is still '202'
console.log(two); //-> 200 and error of cant override var because its constant.

//doing this cause an error - as one already exists
const one = 71; // -> Gives an error of already defined

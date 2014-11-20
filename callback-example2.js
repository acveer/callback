/**
 * Created by acveer on 11/20/2014.
 */

function some_function(arg1, arg2, callback) {
    var my_number = Math.ceil(Math.random() * (arg1- arg2) + arg2);
    if(typeof callback ==='function')
        callback(my_number);
}

some_function(5,25,execute);// logs a valid number between 5 & 25
some_function(5,'test', execute); //logs NaN

function execute(myNum){
    console.log('callback called : ' +myNum);
}

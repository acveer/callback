/**
 * Created by acveer on 11/20/2014.
 */

function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2+'\n');
    //global variables
    var sandwich = {toppings: [param1,param2]};
    var madeCorrectly = (typeof(param1)=== 'string' && typeof(param2)=== 'string')? true: false;

    //this makes the callback functional optional in the caller
    if(typeof(callback) ==="function" )
        callback.apply(sandwich, [madeCorrectly]); //notice that .apply() takes second argument to be an array

}
//Valid params
mySandwich('turkey', 'bacon',function(correctly){
    if(correctly){
        console.log('finished eating my sandwich with '
            +this.toppings[0].toUpperCase()+' and '+ this.toppings[1].toUpperCase());
    }else{
        console.log('Yuck!, Why would I eat a '+this.toppings[0]+ ' and '+this.toppings[1]);
    }
});

//Invalid params
mySandwich(1234, 'bacon',function(correctly){
    if(correctly){
        console.log('finished eating my sandwich with '+this.toppings[0]+' and '+ this.toppings[1]);
    }else{
        console.log('Yuck!, Why would I eat a '+this.toppings[0]+ ' and '+this.toppings[1]);
    }
});


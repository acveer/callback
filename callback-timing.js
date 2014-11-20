/**
 * Created by acveer on 11/19/2014.
 */
function mySandwich(param1, param2,param3, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2+', '+param3+'\n');

    //callback executes after the asynchronous action begins, but NOT before it completes.
    setTimeout(function() {
        console.log('--hello world after 5 seconds---');
    }, 5000); //wait 5 seconds

    //this makes the callback optional
    if(callback && typeof(callback) ==="function" )callback();
}

mySandwich('turkey', 'bacon', 'cheese',function(){
   console.log('finished eating my sandwich');
});


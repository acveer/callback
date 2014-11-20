function mySandwich(param1, param2,param3, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2+', '+param3+'\n');
    //this makes the callback optional
    if(callback && typeof(callback) ==="function" )callback();

    //above condition can also be written like this, but my head spins.
    //(callback && typeof(callback) === "function") && callback();
}

/*mySandwich('ham', 'cheese', function() {
    console.log('\nFinished eating my sandwich.');
});*/

//throws error () since callback is not optional & function has 3 params
mySandwich('turkey', 'bacon', 'cheese','other');
mySandwich('turkey', 'bacon', 'cheese');
mySandwich('turkey', 'bacon');
mySandwich('turkey');
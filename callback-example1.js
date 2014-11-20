function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    callback();
}

mySandwich('ham', 'cheese', function() {
    console.log('\nFinished eating my sandwich.');
});

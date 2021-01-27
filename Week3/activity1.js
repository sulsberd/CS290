// Notes are made with double slashes!
// Activity that has one function that will be hoisted and another assigned to a var (not hoisted)

hoisted(5);

function hoisted(x) {
    console.log('This function is hoisted.')
    return 2 * x;
    
}

console.nothoisted(4)

var nothoited = function(x) {
    return x * 3
}



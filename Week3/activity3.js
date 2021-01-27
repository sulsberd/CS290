//Activity 3 
//Danny Sulsberger
//Oregon State CS290
//25JAN2020


function deepEqual(obj1, obj2){
    // checks if types are the same
    if (typeof obj1 != typeof obj2){
        
        return false
    }

    // Enter if object
    if (typeof obj1 == "object"){
        // Null obj1 check
        if (obj1 === null && obj2 != null){
            return false
        }
        for (var prop in obj1){
            // loop through properties
            if (typeof obj1 == "object" && obj1[prop] != null){
                if (typeof obj2 == "object" && obj2[prop] != null){
                    var key1 = Object.keys(obj1).length
                    var key2 = Object.keys(obj2).length
                    // compares # of values per property
                    if(key1 != key2){
                        return false
                    }
                    // Will recurse if second same object found
                    var result = deepEqual(obj1[prop], obj2[prop])
                    if (result == false){
                        return false
                    }

                }
            }
        }
        return true
    }
    
    // Compares 2 numbers 
    if (typeof obj1 == "number" && typeof obj2 == "number"){
        if (obj1 === obj2){
            //if equal
            return true
        }
        else{
            //not equal
            return false
        }
    }
    
    // Compares 2 bools
    if (typeof obj1 == "bool" && typeof obj2 == "bool"){
        if (obj1 === obj2){
            //if equal
            return true
        }
        else{
            //not equal
            return false
        }
    }

    // Compares 2 strings
    if (typeof obj1 == "string" && typeof obj2 == "string"){
        if (obj1 === obj2){
            //if equal
            return true
        }
        else{
            //not equal
            return false
        }
    }
    
    // Compares 2 undefined
    if (typeof obj1 == "undefined" && typeof obj2 == "undefined"){
        if (obj1 === obj2){
            //if equal
            return true
        }
        else{
            //not equal
            return false
        }
    }
}

//Test Cases
let testNum = 1;
const testFunc = function(obj1, obj2, expVal) {
 let result = '';
 if (deepEqual(obj1, obj2) != expVal) {
  result = "Fail";
 } else {
  result = "Pass";
 }
 console.log('=== Test ', testNum, ':', result, '===', obj1, ' vs ', obj2)
 testNum++;
}

let obj = { here: { is: "an" }, object: 2 };
testFunc(obj, obj, true);
testFunc(obj, { here: 1, object: 2 }, false);
testFunc(obj, { here: { is: "an" }, object: 2 }, true);
testFunc(obj, { here: { is: "and" }, object: 2 }, false);
testFunc(null, { here: { is: "an" }, object: 2 }, false);
testFunc(null, null, true);
testFunc(1, 2, false);
testFunc(1, "1", false);
testFunc(3, 3, true);
testFunc([3, 4, 5], [3, 4, 5], true);
testFunc([3, 5, 5], [3, 4, 5], false);
testFunc([3, 4], [3, 4, 5], false);

function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  
  /* for (var i = 0; i < theArray.length; i++) {
    
    callback(theArray[i]);
    
  } */
  
  for (var i = 0; i < theArray.length; i++) {
    callback(theArray[i], i);
  }
  
}

function map(mappingFunction, theArray) {

  var newArray = [];
  forEach(function(element){
    
    newArray.push(mappingFunction(element));
  
    }, theArray);
  
  return newArray;

}

function filter(predicate, theArray) {

  var newArray = [];
    forEach(function(element) {
      if (predicate(element)) newArray.push(element);
    }, theArray);
  return newArray;
}


function every(predicate, theArray) {
  if (theArray.length === 0) return true;
  for (var i = 0; i < theArray.length; i++) {
    if (!predicate(theArray[i])) return false;
    }
    return true;
}

function some(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) return true;
  }
  return false;
}

function indexOf(item, theArray) {

 for (var i = 0; i < theArray.length; i++) {
   if (theArray[i] === item) return i;
 }
 return -1;
}

function findIndex(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) return i;
  }
  return -1;
}

function first(n, theArray) {
  if (Array.isArray(n)) return n[0];
  return theArray.slice(0, n);
}

function last(n, theArray) {
  if (Array.isArray(n)) return n[n.length-1];
  return theArray.slice(theArray.length-n);
}

function pluck(property, arrayOfObjects) {
  return map(function(element){
    return element[property];
  }, arrayOfObjects);
}

function flatten(theArray) {
  var flatArray = [];
  for (var i = 0; i < theArray.length; i++) {
    if (Array.isArray(theArray[i])) {
      flatArray = flatArray.concat(flatten(theArray[i]));
    }
    else {
      flatArray.push(theArray[i]);
    }
  }
  return flatArray;
}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};

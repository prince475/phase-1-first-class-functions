function receivesAFunction(someFunction){
    someFunction();
}

function returnsANamedFunction(){
    const namedFunction = ()=>console.log("This is a named function");
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return (()=>console.log("This is an anonymous function"));
}
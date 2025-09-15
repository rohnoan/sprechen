function greet(name) {
    console.log("Hello " + name);
}
function abuse(name){
    console.log('fuck you '+ name)
}
function greeter(callback) {
    let name = "Rohan";
    callback(name); 
}
//callbacks are placeholders for any function that you want to run inside another function
greeter(greet);
greeter(abuse);


const accountNumber = 9233939292929;
let name = "Jitendra ";
var email = "jit@gmail.com";
let city ; // it will give undefined , if we define any variable but not assign any value than it will be undefined

//accountNumber = 2222222;  // Not allowed to reassign any value to constant variable 
// Do not use var , beacuse of block scop and functional scop issue
name = "Jitendra Jadhav ";
email = "jeet@gmail.com";
console.table([accountNumber ,name, email, city]);
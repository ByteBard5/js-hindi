const accountId = 13445
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Bilsi"
let accountState;

// accountId = 2 //not allowed
accountEmail = "ysh@gmail.com"
accountPassword = "121212"
accountCity = "Delhi"

/*Prefer not to use Var 
because of issue in block scope and functional scope*/

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
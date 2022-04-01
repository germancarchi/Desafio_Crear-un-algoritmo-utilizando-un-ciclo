
let password=1234;
let enterPassword = parseInt(prompt("Enter password"));

for (let i=5; i>=1; i=i-1){
    
    while (password == enterPassword) {
        alert ("Correct password")
        alert ("Welcome to your profile")
    }
    
    alert ("Wrong password. You have only " + i + " more attempt(s)" );
    enterPassword = parseInt(prompt("Enter password again"));
}
alert ("User blocked")
let firstName = null;
let passCode = "easteregg";

function msg()
{
    firstName = prompt("Enter your first name");
    if (firstName === passCode) { 
    let node = document.getElementById('greeting');
    node.innerHTML = "You found the secret <span>easter egg</span> message!";
    } else {
    let node = document.getElementById('greeting');
    node.innerHTML = `Welcome <span>${firstName}</span> !`;
    }
}

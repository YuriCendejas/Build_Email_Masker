const email = "yuricendejas@outlook.com"; 
/*3). Outside the function, you should have an email variable.
4). You should assign a valid email address to your email variable. */

function maskEmail(email){
    const at = email.indexOf("@"); // to find the @ sign
const username = email.slice(0,at); // it cuts from 0 " " to @ but not including it @ .
}
console.log(maskEmail(email));
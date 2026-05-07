const email = "yuricendejas@outlook.com"; 
/*3). Outside the function, you should have an email variable.
4). You should assign a valid email address to your email variable. */

function maskEmail(email){
    const at = email.indexOf("@"); // to find the @ sign
const username = email.slice(0,at); // it cuts from 0 " " to @ but not including it @ .
const first = username[0]; // first letter
const last = username[username.length -1]; // last letter
// find the length:

// creating the stars: (astricks **)
const masked = first + last + "*".repeat(username.length - 2 );  // why "2" ? bc it keeps the first and last letter , the middle will get masked
} 
return masked;
console.log(maskEmail(email));
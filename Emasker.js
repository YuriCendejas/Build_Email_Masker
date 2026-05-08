const email = "yuricendejas@outlook.com"; 
/*3). Outside the function, you should have an email variable.
4). You should assign a valid email address to your email variable. */

function maskEmail(email){
    const at = email.indexOf("@"); // to find the @ sign
const username = email.slice(0, at); // it cuts from 0 " " to @ but not including it @ .
const domain = email.slice(at); // stops at the @ and only chops whats the username part.
const first = username[0]; // first letter
const last = username[username.length -1]; // last letter
// find the length:

// creating the stars: (astricks **)
const masked = first +"*".repeat(username.length - 2 ) + last;  // why "2" ? bc it keeps the first and last letter , the middle will get masked.
return masked + domian; 
} 

/*the domain too bc thats the "@ " like we wanna hide
 the username part but not the domain website part after the @ sign  .
  like ex: "@outlook.com" we wanna keep */
console.log(maskEmail(email));
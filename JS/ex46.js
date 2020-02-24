const userAndPassword = 'pepito2017, 12345';
let username, password;

\\ We know the size of the username

const userNameSize = 10;
const username = userAndPassword.substr(0, userNameSize);
const password = userAndPassword.substr(userNameSize +1);

console.log(username, password)


\\ We do not know the size of the username

const separation = userAndPassword.indexOf(',');
if (separation != -1) {
    username = userAndPassword.slice(0, separation);
    password = userAndPassword.slice(separation+1)

    console.log(`The user ${userName} has ${passWord} as a password`);

    }else{
    console.log("Cannot find username and password")
}



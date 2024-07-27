let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
}
else if (userRole === "manager") {
    accessLevel = "Limited access granted";
}
else {
    accessLevel = "No access granted";
}

console.log("Access Level: " + accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome, Admin!";
    }
    else if (userRole === "manager") {
        userMessage = "Welcome, Manager!";
    }
    else {
        userMessage = "Please log in to access the system.";
    }
}

console.log("User Message: " + userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager"
        break;
    case "subscriber":
        userCategory = "Subscriber"
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status: ", authenticationStatus);

let user = "something";
let accessService;

if (user === "Employee") {
    accessService = "can access to Dietary Services.";
}
else if (user === "Enrolled Member") {
    accessService = "can access to Dietary Services and one-on-one interaction with a dietician.";
}
else if (user === "Subscriber") {
    accessService = "have partial access to Dietary Services only."
}
else {
    accessService = "Enroll or at least subscribe first to avail this facility."
}

console.log(user + " " + accessService);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const add = (a, b) => a + b;

console.log(add(3, 8))

const greet = () => {
    console.log("Hello!, World!");
};

function add(a, b) {
    return a + b;
}
document.getElementById("returndemo").innerHTML = add (50, 40);
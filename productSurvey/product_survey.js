function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    alert('Thank you for your valuable feedback.');

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}

const submitButton = document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});

// function submitFeedback() {
//     const username = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const email = document.getElementById('email').value;
//     const job = document.getElementById('job').value;
//     const designation = document.getElementById('designation').value;
//     const productType = document.getElementById('productType').value;
//     const feedback = document.getElementById('feedbackText').value; // Corrected ID

//     alert('Thank you for your valuable feedback.');

//     document.getElementById('userName').innerHTML = username;
//     document.getElementById('userAge').innerHTML = age;
//     document.getElementById('userEmail').innerHTML = email;
//     document.getElementById('userJob').innerHTML = job;
//     document.getElementById('userDesignation').innerHTML = designation;
//     document.getElementById('userFeedback').innerHTML = feedback;

//     document.getElementById('userInfo').style.display = 'block';
// }

// // Corrected the ID for the submit button
// const submitButton = document.getElementById('sumitBtn');
// submitButton.onclick = submitFeedback;

// // Keydown event listener for Enter key
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         submitFeedback();
//     }
// });
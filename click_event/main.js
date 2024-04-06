document.getElementById('submitButton').addEventListener('click', function(event) {
        var nameValue = document.getElementById('name').value;
        var emailValue = document.getElementById('email').value;
        document.getElementById('output').innerText = `Name: ${nameValue}, Email: ${emailValue}`;
    });
document.getElementById("form").addEventListener('submit',function (event) {
    var nameValue = document.getElementById("GET-name").value;
    document.write('The name has been saved successfully ',nameValue)
})
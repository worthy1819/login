const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = e.target["name"].value
    const email = e.target["email"].value
    const password = e.target["password"].value
    const loginInfo = {
        name: name,
        email: email,
        password: password
    }
    createloginInfo(loginInfo)
})
function createloginInfo (loginInfo) {
    const storedFormData = JSON.parse(localStorage.getItem("loginInfo")) || [];
    storedFormData.push(loginInfo);
    localStorage.setItem('loginInfo', JSON.stringify(storedFormData));
}
function displayFormData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var outputDiv = document.createElement("div");
    outputDiv.innerHTML = "<h3>Form Information:</h3>" +
                          "<p><strong>Name:</strong> " + name + "</p>" +
                          "<p><strong>Email:</strong> " + email + "</p>" +
                          "<p><strong>Password:</strong> " + password + "</p>";


                          
                          document.getElementById("outputContainer").appendChild(outputDiv);
}

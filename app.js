const form = document.getElementById("form")
const infoContainer = document.getElementsById("info-container")
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

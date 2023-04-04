const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("searchUser");
const searchButton = document.getElementById("searchButton");


const getInput = () => {
    if (searchUser.value !== '') {
        github.getUser(searchUser.value)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    ui.showAlert("User not found", "alert alert-danger my-3")
                } else {
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    } else {
        ui.clearProfile()
    }
}

searchButton.addEventListener("click", getInput);

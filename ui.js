class UI {
    constructor() {
        this.profile = document.getElementById("profile")
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="container border my-4 p-4">
          <div class="row">
            <div class="col-sm-3">
                <img src="${user.avatar_url}" class="img-fluid mb-2" />
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-sm mb-4 w-100"
                    >Show Profile</a
                >
            </div>
            <div class="col-sm-9">
                <span style="font-size: 14px" class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                <span style="font-size: 14px" class="badge bg-success">Followers: ${user.followers}</span>
                <span style="font-size: 14px" class="badge bg-info">Following: ${user.following}</span>
                <br /><br />
                <ul class="list-group">
                    <li class="list-group-item"><span class="fw-bold">Bio:</span> ${user.bio}</li>
                    <li class="list-group-item"><span class="fw-bold">Company:</span> ${user.company}</li>
                    <li class="list-group-item"><span class="fw-bold">Website:</span> ${user.Blog}</li>
                    <li class="list-group-item"><span class="fw-bold">Location:</span> ${user.location}</li>
                    <li class="list-group-item"><span class="fw-bold">Created At:</span> ${user.created_at}</li>
                </ul>
            </div>
          </div>
        </div>

            <h3 class="fs-1 m-2 text-center">Latest Repos</h3>

        <div id="repos" class="container card card-body">
        
        </div>
        `;
    }

    showRepos(repos) {
        let output = " ";

        repos.forEach((repo) => {
            console.log("forEach Repo: ", repo)
            output += `
            <div class="card card-body mb-4">
              <div class="row">
                <div class="col-md-6">
                  <a class="text-decoration-none fs-5 text-dark" href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6 d-flex justify-content-end align-items-center">
                  <span class="badge bg-primary m-1 p-1">Stars: ${repo.stargazers_count} </span>
                  <span class="badge bg-success m-1 p-1">Watching:${repo.watchers_count} </span>
                  <span class="badge bg-info m-1 p-1">Forks: ${repo.forks_count}</span>
                </div>
              </div>
            </div>
          `;
        });

        const reposDiv = document.getElementById("repos")
        reposDiv.innerHTML = output
    }


    clearProfile() {
        this.profile.innerHTML = ""
    }

    showAlert(message, classname) {
        const div = document.createElement("div")

        div.className = classname;
        div.innerText = message;

        const container = document.querySelector(".searchContainer")
        container.appendChild(div, container)

        setTimeout(() => {
            this.clearAlert()
        }, 3000);

    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert")
        if (currentAlert) {
            currentAlert.remove()
        }
    }
}
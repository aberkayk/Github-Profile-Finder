class Github {
    constructor() {
        this.client_id = "5df285ddea53d352daa6";
        this.client_secret = "b1d6d425ce61ad68e2f7dcaeec176e46813a579e";
        this.repos_count = 10
        this.repos_sort = "asc"
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        console.log(repoResponse);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos
        };
    }
}

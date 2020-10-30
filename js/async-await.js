const gitHubUserUrl = `https://api.github.com/users/serhiibilous`
const userData = {}

async function fetchUserRepos() {
  const gitHubUserResponse = await fetch(gitHubUserUrl)
  const gitHubUserData = await gitHubUserResponse.json()
  userData.userName = gitHubUserData.name
  const gitHubReposResponse = await fetch(`https://api.github.com/users/serhiibilous/repos`)
  const gitHubReposData = await gitHubReposResponse.json()
  userData.repos = gitHubReposData.map(repo => {
    return {
      name: repo.name,
      url: repo.url
    }
  })
}

fetchUserRepos()
  .then(() => console.log(userData))
  .catch(error => console.error(error))


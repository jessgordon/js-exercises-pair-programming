class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const fullName = document.querySelector('#repo-name');
    const description = document.querySelector('#repo-description');
    const image = document.querySelector('#repo-image');

    fullName.innerText = repoData.full_name;
    description.innerText = repoData.description;
    image.src = repoData.organization.avatar_url;
  }
}

module.exports = GithubView;
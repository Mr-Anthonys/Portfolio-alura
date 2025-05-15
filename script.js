const imgGithubProject = document.querySelector('#imgGithubProject');
const imgInstaProject = document.querySelector('#imgInstagramProject');
const gitBlue = document.querySelector('.gitBlue');
const instBlue = document.querySelector('.instBlue');

imgGithubProject.addEventListener('mouseenter', () => {
    gitBlue.style.color = '#22D4FD';
});
imgGithubProject.addEventListener('mouseleave', () => {
    gitBlue.style.color = '#ffffff';
});

imgInstaProject.addEventListener('mouseenter', () => {
    instBlue.style.color = '#22D4FD';
});
imgInstaProject.addEventListener('mouseleave', () => {
    instBlue.style.color = '#ffffff';
});


const { getRepos } = require('./script1');

it('verify if there are two repositories at URL', () => {
  expect.assertions(2);
  return getRepos('https://api.github.com/orgs/tryber/repos').then(list => {
    expect(list).toContain('sd-01-week4-5-project-todo-list');
    expect(list).toContain('sd-01-week4-5-project-meme-generator');
  });
});
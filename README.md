### Superman's Blog

Use [umi](https://umijs.org/zh/guide/) and [GitHub Developer REST API v3](https://developer.github.com/v3/) to build my blog.

### About GitHub Developer API

All API access is over HTTPS, and accessed from https://api.github.com. All data is sent and received as JSON. 

### API List

#### 获取用户信息

`https://api.github.com/users/${your_github_username}`

#### 获取个人所有仓库列表

`https://api.github.com/users/${your_github_username}/repos`

#### 获取指定仓库Issue列表

`https://api.github.com/repos/${your_github_username}/${your_github_reponame}/issues`

#### 获取指定仓库指定Issue

`https://api.github.com/repos/${your_github_username}/${your_github_reponame}/issues/${your_github_issue_id}`
```
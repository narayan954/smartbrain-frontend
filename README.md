<div align="center">
<h1>Project SmartBrain</h1>

<img  src="https://user-images.githubusercontent.com/77617189/198992812-112ef0fb-53e5-4340-8db5-814f5f0051c8.png"  alt="Dummygram"  width="200"  height="200">

[See Live!](https://smart-brain-420.herokuapp.com/)

### _Face Detection_, simplified

![Issues](https://img.shields.io/github/issues/narayan954/smartbrain-frontend?color=brightgreen)
![Pull requests](https://img.shields.io/github/issues-pr/narayan954/smartbrain-frontend)
![Forks](https://img.shields.io/github/forks/narayan954/smartbrain-frontend)
![Stars](https://img.shields.io/github/stars/narayan954/smartbrain-frontend)
![Licence](https://img.shields.io/github/license/narayan954/smartbrain-frontend?color=orange)

---

</div>

For demo use the credentials below, else you can always register yourself!
<br>
Test email - tester@gmail.com
Test password - test1234
<br>
[Example image1](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7Ao9wK0YhBDG1AT3hCkMHqy7pvTxvUIMVJzVgoy9dOB3zGfqh_Fz2guyakBFASrs56c&usqp=CAU)
<br>
[Example image2](https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg)
<br>
[Example image3 with multiple faces](https://i.stack.imgur.com/FoOYR.jpg)

### SmartBrain is a web application which uses ReactJs in the front end, Node.JS, Express.JS and PostgreSQL for its server and database respectively and detect faces in an image using an image recognition API

#### To give you a flavor of the app, here is an screenshot of home page

![brain-home](https://user-images.githubusercontent.com/77617189/180434354-49a3fbeb-5efa-42f8-a624-894a40391dd1.png)

#### Some tested examples can be seen below

![brain-ss1](https://user-images.githubusercontent.com/77617189/180434335-ae41c960-cbde-4c46-a25d-e4e3abd9be76.png)
![brain-ss2](https://user-images.githubusercontent.com/77617189/198991743-678fb81b-a10f-4a00-8628-cdef6aaa11cd.png)

To work locally on this repo:

1. Clone this repo!
2. Run `npm install`
3. Run `npm start`

## Codebase

### Technologies

With the ground rules out of the way, let's talk about the coarse architecture of this mono repo:

**Frontend JavaScript**: We use React to power our frontend apps. Almost all of the code you'll touch in this codebase will be JavaScript.
<img  src="http://3con14.biz/code/_data/js/intro/js-logo.png"  alt="JS"  width="30"  height="30">

Here is a list of all the big technologies we use:

- **React**: Frontend React app <img  src="https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png"  alt="REACT"  width="35"  height="35">
- **Node.js**: Backend server <img  src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"  alt="NODE"  width="35"  height="35">

### Folder structure

```sh

smartbrain-frontend/

├── public # Public files used on the frontend

├── src # Frontend Code in React

```

## First time setup

The first step to running smart-brain locally is downloading the code by cloning the repository:

```sh

git clone git@github.com/narayan954/smartbrain-frontend.git

```

If you get `Permission denied` error using `ssh` refer [here](https://help.github.com/articles/error-permission-denied-publickey/)

or use `https` link as a fallback.

```sh

git clone https://github.com/narayan954/smartbrain-frontend.git

```

### Installation

Smartbrain-frontend has a single installation step:

- **Install the dependencies**:

```sh

npm install

```

You've now finished installing everything! Let's start :100:

Ps: if you're getting error installing the dependencies, try --force command along with npm install. For example

```sh

npm install --force

```

Now you're ready to run the app locally and sign into your local instance!

## Running the app locally

### Start the servers

To Start the development server run `npm run dev`.

<br  />

<div  align="center">

<img  height="200px"  src="https://user-images.githubusercontent.com/77617189/192947926-37284128-9965-46a4-b29b-c75e47b2f76b.svg"  />

</div>

## How to get started with Open Source

Here's a quick run down on how to get started with open source, first of all let's know some basic terminologies:

- Git: is a versioning system that let's you store your code and code history on your local computer preventing loses and allowing sharing of that code
- Github: is a server that let's you store the history in a database
- Open Source: A project is said to be open sourced if you can see the code on GitHub
- Fork: This is a copy that you make of a project on GitHub, it gets added to your repositories
- Repository: A project on GitHub is called a repository
- Pull Request: This is a fix for an issue proposed to be done in a project, this consists of you editing a file in the project.
- Issue: An issue is a change that should be done in a project, can be a bug, a new feature or a suggestion to a project
- Branch: A branch is a new workspace derived from the default workspace(main or master), it allows you to work on something without affecting the original code

Now you know some basic terms, let's get into how to get started with some resources to let you understand open source better:

- [Crash Course to Git and Github](https://www.youtube.com/watch?v=apGV9Kg7ics) - Video
- [A complete Guide to Open Source](https://www.youtube.com/watch?v=yzeVMecydCE) - Video
- [Guide to Open Source](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/) - Article

## Contributing

**We heartily welcome any and all contributions that match our engineering standards! :raised_hands:**

That being said, this codebase isn't your typical open source project because it's not a library or package with a limited scope—it's our entire product.

## Ground Rules

#### Contributions and discussion guidelines

All conversations and communities on Smart-Brain agree to GitHub's [Community Guidelines](https://help.github.com/en/github/site-policy/github-community-guidelines) and [Acceptable Use Policies](https://help.github.com/en/github/site-policy/github-acceptable-use-policies). This code of conduct also applies to all conversations that happen within our contributor community here on GitHub. We expect discussions in issues and pull requests to stay positive, productive, and respectful. **Remember**: There are real people on the other side of that screen:exclamation:

#### Reporting a bug or discussing a feature idea

If you found a technical bug on Smart-Brain or have ideas for features we should implement, the issue tracker is the best place to share your ideas. Make sure to follow the issue template and you should be golden! ([click here to open a new issue](https://github.com/narayan954/smartbrain-frontend/issues/new))

#### Fixing a bug or implementing a new feature

- If you find a bug on Smart-Brain and open a PR that fixes it we'll review it as soon as possible to ensure it matches our engineering standards.
- If you want to implement a new feature, open an issue first to discuss what it'd look like .
- If you want to contribute but are unsure to start, we have [a "good first issue" label](https://github.com/narayan954/smartbrain-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) which is applied to newcomer-friendly issues. Take a look at [the full list of good first issues](https://github.com/narayan954/smartbrain-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and pick something you like!
- Want to fix a bug or implement an agreed-upon feature? Great, jump to the [local setup instructions](#first-time-setup)!

## Rules

- **No `console.log`s in any file**: We use the `debug` module across the codebase to log debugging information in development only. Never commit a file that contains a `console.log` as CI will fail your build. The only exceptions are errors, which you can log, but you have to use `console.error` to be explicit about it

<div  align="center">

<img  height="70px"  src="https://user-images.githubusercontent.com/77617189/192942891-31b9152c-918b-4fac-af05-0ad6b1f594aa.svg"  />

</div>

## Open Source Programs

<a href="https://hacktoberfest.com/">
<img width="1200" alt="Email Banners-Dark" src="https://user-images.githubusercontent.com/79099734/189589410-ca17afb8-5855-4316-918a-054f27594809.png">
</a>

## Thanks to all Contributors 💪

Thanks a lot for spending your time helping smartbrain-frontend grow. Thanks a lot! Keep rocking 🍻

[![Contributors](https://contrib.rocks/image?repo=narayan954/smartbrain-frontend)](https://github.com/narayan954/smartbrain-frontend/graphs/contributors)

## GitHub

smartbrain-frontend is now part of GitHub. For code of conduct, please see [GitHub's Community Guidelines](https://help.github.com/en/github/site-policy/github-community-guidelines) and [Acceptable Use Policies](https://help.github.com/en/github/site-policy/github-acceptable-use-policies).

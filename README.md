<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<h3 align="center">RedditAlready</h3>

  <p align="center">
    Codecademy Full Stack Engineer path - Portfolio Project
    <br />
    <a href="https://github.com/mattsteen14/reddit-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mattsteen14/reddit-client">View Demo</a>
    ·
    <a href="https://github.com/mattsteen14/reddit-client/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mattsteen14/reddit-client/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Codecademy Project Brief

### "​​Build Your Own Reddit App

For this project, you will build an application for Reddit using everything you’ve learned, including React and Redux. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data which you will integrate into your application. The application will allow users to view and search posts and comments provided by the API."

[Completed Project Example - RedditMinimal](https://reddit-client.netlify.app)

### Project Objectives

- Integrate Reddit API into the application

- Create a responsive application that adapts to any device (desktop to mobile)

- Create a responsive application that can be viewed on any modern browser

- Application accessible at an URL

- The application will allow users to view posts and comments provided by the API as well as other data such as amount of upvotes and comments, the post timestamp and the subreddit name and original poster name of each post

- The main home screen will be a feed of the most recent and relevant posts from all subreddits

- Users will be able to upvote and downvote posts with the total votes being updated instantly on the app

- All of the comments for each post will be initially hidden but will appear when the user clicks on the comment icon

- The application will allow users to search for posts and comments provided by the API

- Data can be filtered based on categories and subreddits that are predefined

- A detailed view (modal or new page/route) is shown when the user selects an item

- Utilise animations and transitions when posts are loading

- Users are able to leave an error state

- Write unit tests for components using Jest and Enzyme

- Write end-to-end tests for the application

### Project Design

As you can see from the wireframe below, I wanted to keep the design simple and minimal. There will be header section with the reddit logo and a span of 'Reddit' to be the same colour(TBD) on the left, a search bar in the middle then a log in button on the far right. 

The main home section/component will display a vertical stream of posts that will have the subreddit, time posted and the OP name above each post, up/plus & down/minus arrows to the left of each post to upvote or downvote and display the amount of likes and below each post there will be a clickable comment icon with the amount of comments so far. Once clicked all of the comments for that post will display under the post. Ultimately I want the feed to display a stream of the most recent and relevant posts from all of the users followed subreddits.

The aside section to the right of the main section will display a stack of subreddits to choose from so that the feed in the home component will only focus on that subreddits posts. Ideally, the user should be able to link the top 'home' link in order for the home component to display a feed of all most recent and relevant posts.

### Wireframe

![RedditAlready wireframe](https://github.com/mattsteen14/reddit-client/blob/main/public/RedditAlready_wireframe1.png?raw=true)

### Progress Report

At this stage I feel that RedditAlready is a web app that meets Codecademys project brief. Overall I am happy with the design and I feel that we have made it our own. We have deviated from the initial design somewhat due to the limitations of the Reddit JSON API that we used. Basically this API does not allow write operations and it does not require an OAuth workflow. We noticed that in the RedditMinimal example site, clicking on the upvote and downvote buttons does not actually alter the vote score, the buttons just change colour. Therefore we decided that under the post, adjacent to the comment icon with the amount of comments we would do similar with an arrow icon with the amount of votes (score) displayed. Also due to the OAuth limitations we decided to put work on the login button on the backburner. It may be something we implement in the future but we would either need to use the official Reddit API or create our own backend.

The discovery and implementation of the createApi slice really streamlined and simplified a lot of what we had to do and cut down the amount of actions and reducers that we would have had to set up. It was a challenge to render icon images (avatars, profile pictures) for subreddits and post authors. Then when it worked, it made us reach the rate limit more often but Joy suggested a new endpoint for the author images that worked better. Setting up fallback icon images was another challenge.

### Future Work _(UPDATE)_

- Testing & debugging. Write unit tests for components using Jest and Enzyme. Get 90+ scores on Lighthouse.

- Explore alternative APIs for subreddit and author icon images to help with rate limit issue.

- Improve the UX by dynamically rendering set error messages depending on type of error including one that would reference the rate limit.

- Additional feature: Feature a log in button to allow users the ability to log into their reddit account _- as mentioned, we would need to either use the official Reddit API or create our own backend._

- Additional feature: Add share button to posts _- investigate whether this would be possible with the JSON API limitations._

- Additional feature: Create a hidden drop down menu column to filter data.

- Additional feature: Make the subreddits aside column appear when clicked.

- Additional feature: display in the header what subreddit or search term is active in View section as featured in the [Redducit](https://github.com/wilaxx/redducit) app by [wilaxx](https://github.com/wilaxx).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- HTML5
- CSS
- JavaScript
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org)
- [Node.js](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

These are instructions on setting up the project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo
   ```sh
   git clone https://github.com/mattsteen14/reddit-client.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run app in development mode in local browser
   ```sh
   npm start
   ```

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Version control. Set up on GitHub.
- [x] Plan project.
- [x] Wireframe the application.
- [x] Create files and run it locally.
- [x] Build the components.
- [x] Add Reddit data.
- [ ] Testing and dubugging.
- [ ] Improve error states.
- [ ] Explore alternative APIs for icon images.
- [ ] Deploy and publish to the web.
- [ ] Share on Codecademy forums for feedback.
- [ ] Additional features.

See the [open issues](https://github.com/mattsteen14/reddit-client/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Matt Steen-Brookes - [@mattsteen14](https://twitter.com/mattsteen14) - mattsteen14@me.com

Project Link: [https://github.com/mattsteen14/reddit-client](https://github.com/mattsteen14/reddit-client)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- [Mo Ashqar](https://github.com/ashqar) for introducing me to Codecademy in the first place. 
- [Othneil Drew](https://github.com/othneildrew) for the README template.
- [Choose an Open Source License](https://choosealicense.com)

This has been a group project with other Codecademy learners:

- [Joy Ometan](https://github.com/Jbhnd). Most contributuons so far. Layed the foundations for the css & created the search functionality.
- [Adam Halnon](https://github.com/Halnon).
- [Arunesh Kumar](https://github.com/ak287). Both participated in early discussions and had valuable insight in the group meeting.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mattsteen14/reddit-client.svg?style=for-the-badge
[contributors-url]: https://github.com/mattsteen14/reddit-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mattsteen14/reddit-client.svg?style=for-the-badge
[forks-url]: https://github.com/mattsteen14/reddit-client/network/members
[stars-shield]: https://img.shields.io/github/stars/mattsteen14/reddit-client.svg?style=for-the-badge
[stars-url]: https://github.com/mattsteen14/reddit-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/mattsteen14/reddit-client.svg?style=for-the-badge
[issues-url]: https://github.com/mattsteen14/reddit-client/issues
[license-shield]: https://img.shields.io/github/license/mattsteen14/reddit-client.svg?style=for-the-badge
[license-url]: https://github.com/mattsteen14/reddit-client/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mattsteen14
[product-screenshot]: /portfolio/resources/images/PortfolioScreenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

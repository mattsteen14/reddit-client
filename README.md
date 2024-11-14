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
    Codecademy Front End Engineer path - Portfolio Project
    <br />
    <a href="https://github.com/mattsteen14/RedditAlready"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://redditalready.netlify.app/">View Site</a>
    ·
    <a href="https://github.com/mattsteen14/RedditAlready/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mattsteen14/RedditAlready/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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


<details>
<summary>Codecademy Project Objectives</summary>

- For this project, you will build an application for Reddit using everything you’ve learned, including React and Redux.

- The application will allow users to view and search posts and comments provided by the Reddit API.

- Wireframe your application

- Use a project management tool (GitHub Projects) to plan your work

- Write a README (using Markdown) that documents your project including: wireframes, technologies used, features, future work

- Integrate Reddit API into the application

- Create a responsive application that adapts to any device (desktop to mobile)

- Create a responsive application that can be viewed on any modern browser

- Application accessible at an URL

- The application will allow users to view posts and comments provided by the API as well as other data such as amount of upvotes and comments, the post timestamp and the subreddit name and original poster name of each post

- The main home screen will be a feed of the most recent and relevant posts from all subreddits

- All of the comments for each post will be initially hidden but will appear when the user clicks on the comment icon

- The application will allow users to search for posts and comments provided by the API

- Data can be filtered based on categories and subreddits that are predefined

- A detailed view (modal or new page/route) is shown when the user selects an item

- Utilise animations and transitions when posts are loading

- Users are able to leave an error state

- Users can use the application on any device (desktop to mobile)

- Users can use the application on any modern browser

- Users are delighted with a cohesive design system

- Write unit tests for components using Jest and Enzyme

- Write end-to-end tests for the application

- Get 90+ scores on Lighthouse

- Publish to the web

- Users can access your application at a URL

- OPTIONAL: Make your application a progressive web app

</details>

<br>

RedditAlready is a Reddit client built as part of Codecademy’s Front End Engineer path. The app allows users to browse, search, and explore Reddit content in a responsive, streamlined interface.

Using the createApi slice from Redux Toolkit significantly reduced the setup complexity, streamlining actions and reducers. However, integrating avatar images for subreddits and post authors proved challenging and occasionally caused rate limits. Fortunately, we resolved this with a more efficient endpoint for author images.

For a calming user experience, I chose a soft blue and white colour scheme and used rounded fonts. To improve text readability, an animated ellipsis appears for longer text, expanding fully on hover.

To handle rate limits gracefully, we implemented friendly and informative error messages. Then to further enhance the user experience I created loading states using animations and transitions that fit seamlessly within the overall design. Together, these details make RedditAlready a functional and enjoyable Reddit browsing tool.

### Wireframe

![RedditAlready wireframe](https://github.com/mattsteen14/RedditAlready/blob/main/public/RedditAlready_wireframe1.png?raw=true)

As you can see from my initial wireframe, while the design aligns closely with Codecademy’s project brief, we made certain adjustments to work effectively with the Reddit JSON API, which does not allow write operations or require OAuth. For instance, similar to the [RedditMinimal example site](https://reddit-client.netlify.app), our upvote and downvote buttons do not alter the vote count, as the API doesn’t support it. Instead of the up and down arrows to the left of the post, we show the vote score next to a static arrow icon under each post, adjacent to the comment icon and comment count. Due to the  complexity of implementing login functionality we decided early in development to scrap the login button. As a planned additional feature that space could be occupied with a window to display what subreddit or search term is active in the View section as featured in the [Redducit](https://github.com/wilaxx/redducit) app by [wilaxx](https://github.com/wilaxx).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- HTML5
- CSS
- JavaScript
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org)
- [Node.js](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com)
- [Create React App](https://github.com/facebook/create-react-app)

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

1. Clone the repo
   ```sh
   git clone https://github.com/mattsteen14/RedditAlready.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run app in development mode in local browser
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Version control. Set up on GitHub.
- [x] Plan project.
- [x] Wireframe the application.
- [x] Create files and run it locally.
- [x] Build the components.
- [x] Add Reddit data.
- [x] Testing and dubugging.
- [x] Improve error states.
- [x] Deploy and publish to the web.
- [x] Share on Codecademy forums for feedback.
- [ ] Explore alternative APIs for icon images.
- [ ] Additional feature: active subreddit or search term display in header.

See the [open issues](https://github.com/mattsteen14/RedditAlready/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project.

2. Create your Feature Branch:

   ```sh
   git checkout -b feature/AmazingFeature
   ```

3. Commit your Changes:

   ```sh
   git commit -m "Add some AmazingFeature"
   ```

4. Push to the Branch:

   ```sh
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Matt Steen-Brookes - [@mattsteen14](https://twitter.com/mattsteen14) - mattsteen14@me.com

Portfolio Link: [https://mattsteen14.github.io/portfolio/](https://mattsteen14.github.io/portfolio/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- [Mo Ashqar](https://github.com/ashqar) for introducing me to Codecademy in the first place.
- [Othneil Drew](https://github.com/othneildrew) for the README template.
- [Choose an Open Source License](https://choosealicense.com)

This has been a group project with other Codecademy learners:

- [Joy Ometan](https://github.com/Jbhnd). Layed the foundations for the css & created the search functionality.
- [Adam Halnon](https://github.com/Halnon).
- [Arunesh Kumar](https://github.com/ak287). Both participated in early discussions and had valuable insight in the group meeting.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mattsteen14/RedditAlready.svg?style=for-the-badge
[contributors-url]: https://github.com/mattsteen14/RedditAlready/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mattsteen14/RedditAlready.svg?style=for-the-badge
[forks-url]: https://github.com/mattsteen14/RedditAlready/network/members
[stars-shield]: https://img.shields.io/github/stars/mattsteen14/RedditAlready.svg?style=for-the-badge
[stars-url]: https://github.com/mattsteen14/RedditAlready/stargazers
[issues-shield]: https://img.shields.io/github/issues/mattsteen14/RedditAlready.svg?style=for-the-badge
[issues-url]: https://github.com/mattsteen14/RedditAlready/issues
[license-shield]: https://img.shields.io/github/license/mattsteen14/RedditAlready.svg?style=for-the-badge
[license-url]: https://github.com/mattsteen14/RedditAlready/blob/main/LICENSE
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

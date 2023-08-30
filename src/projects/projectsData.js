import projectOne from "../assets/project-4.jpg";
import projectTwo from "../assets/project-8.jpg";
import projectThree from "../assets/project-9.jpg";
import projectFour from "../assets/project-7.jpg";

const projects = {
  1: {
    title: "Weather App",
    image: projectOne,
    description: (
      <>
        <p>
          The Weather App is a dynamic web application that provides real-time weather information for any city worldwide.
          This application fetches data from a weather API and beautifully displays the current temperature, humidity, wind speed. The modern and responsive design ensures usability across all devices.
        </p>
      </>
    ),
    github: "https://github.com/himanshu-webdev/Weather",
    demo: "https://mine-weather-site.netlify.app/",
  },
  2: {
    title: "Tic Tac Toe",
    image: projectTwo,
    description: (
      <>
        <p>
          Tic Tac Toe offers a classic, interactive 3x3 grid game. Users can play against each other in this turn-based strategy game with a goal to align three of their symbols (either X or O) horizontally, vertically, or diagonally before their opponent does. 
        </p>
      </>
    ),
    github: "https://github.com/himanshu-webdev/Tic-Tac-Toe",
    demo: "https://simple-game-tic-tac-toe.netlify.app/",
  },
  3: {
    title: "Password Generator",
    image: projectThree,
    description: (
      <>
        <p>
          The password generator is a web-based application that allows users to generate strong and secure passwords with a simple click.
          This tool is designed using HTML, CSS, and JavaScript.
        </p>
      </>
    ),
    github: "https://github.com/himanshu-webdev/password-generator",
    demo: "https://mine-js-password-generator.netlify.app/",
  },
  4: {
    title: "Musify",
    image: projectFour,
    description: (
      <>
        <p>
          Musify is a sleek and minimalist web-based music player designed to bring your favorite tunes to life.
          Crafted with HTML, CSS, and JavaScript, it offers a user-friendly interface that allows you to play, pause, and navigate through your music tracks effortlessly.
        </p>
      </>
    ),
    github: "https://github.com/himanshu-webdev/musify",
    demo: "https://musify-web-dev.netlify.app/",
  },
};

export default projects;
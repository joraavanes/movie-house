<div align="center">
  <h1 align="center">Movie House</h1>
</div>

[![movie-house.jpg](https://i.postimg.cc/NMgCb8Gf/movie-house.jpg)](https://postimg.cc/5HRm2CFZ)

<div align="center">
  <p align="center">
    <a href="https://admiring-franklin-k8vjxuhci.iran.liara.run/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Movie House is where you can explore among many famous movies, get the info about movies and the awards, and choose to keep in your archive to watch it later.

This app uses a public API to fetch data from, the link is as follows:

[moviesapi.ir/](https://moviesapi.ir//)

Quick note about the API:
* Moviesapi doesn't hold large archive of data as [TMDB](https://www.themoviedb.org/) or [IMDB](https://developer.imdb.com/) API
* Some endpoints are not so user-friendly e.g. it doesn't give option to get the desired number of items per page, (so it requires multiple requests which is not so optimal)
* The API doesn't require a key to get it working

You can check the live demo here: [Demo](https://admiring-franklin-k8vjxuhci.iran.liara.run/)


<!-- GETTING STARTED -->
## Getting Started

To get the app running on your machine, follow these simple steps.

### Prerequisites

Make sure you have node installed locally.
* [Nodejs](https://nodejs.org/en/download/)

### Installation

1. Clone the repo:
   ```sh
   git clone git@github.com:joraavanes/movie-house.git
   ```
2. Install node packages using npm or yarn:
   ```sh
   npm install
   ```
   ```sh
   yarn install
   ```
3. Run the app in dev environment
   ```sh
   yarn run dev
   ```


<!-- Running Tests -->
## Running Unit Tests

To run tests, run the following command

```bash
  yarn run test
```

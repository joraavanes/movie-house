import { render, screen } from "@testing-library/react";
import { Movie } from "../../../types/Movie";
import MovieList from "../MovieList";

const movies: Movie[] = [{
  id: 1,
  title: "The Shawshank Redemption",
  poster: "/img.jpg",
  year: "1994",
  released: "14 Oct 1994",
  director: "Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  awards: "Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.",
  metascore: "80",
  imdb_rating: "9.3",
  genres: [
  "Crime",
  "Drama"
  ],
},{
  id: 2,
  title: "The Shawshank Redemption",
  poster: "/img.jpg",
  year: "1994",
  released: "14 Oct 1994",
  director: "Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  awards: "Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.",
  metascore: "80",
  imdb_rating: "9.3",
  genres: [
  "Crime",
  "Drama"
  ],
},{
  id: 3,
  title: "The Shawshank Redemption",
  poster: "/img.jpg",
  year: "1994",
  released: "14 Oct 1994",
  director: "Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  awards: "Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.",
  metascore: "80",
  imdb_rating: "9.3",
  genres: [
  "Crime",
  "Drama"
  ],
},{
  id: 4,
  title: "The Shawshank Redemption",
  poster: "/img.jpg",
  year: "1994",
  released: "14 Oct 1994",
  director: "Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  awards: "Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.",
  metascore: "80",
  imdb_rating: "9.3",
  genres: [
  "Crime",
  "Drama"
  ],
},{
  id: 5,
  title: "The Shawshank Redemption",
  poster: "/img.jpg",
  year: "1994",
  released: "14 Oct 1994",
  director: "Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  awards: "Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.",
  metascore: "80",
  imdb_rating: "9.3",
  genres: [
  "Crime",
  "Drama"
  ],
}];

jest.mock('next/link', () => () => {});

test("should paint the MovieItems in the screen", () => {
  const {container} = render(<MovieList movies={movies}/>)
  const moviesEls = container.querySelectorAll('.box');
  expect(moviesEls.length).toBe(movies.length);
});

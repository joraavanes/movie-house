import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviePreview from "../../Movie/Moviepreview";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { Movie } from "../../../types";

const movie: Movie = {
  id: 1,
  title: "The Shawshank Redemption",
  poster: "/tt0111161_poster.jpg",
  year: "1994",
  released: "14 Oct 1994",
  director: "Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  awards: "Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.",
  metascore: "80",
  imdb_rating: "9.3",
  genres: ["Crime", "Drama"],
};

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

const MockedMoviePreview = () => (
  <Provider store={store}>
    <MoviePreview movie={movie}/>
  </Provider>
);

test("should test MoviePreview", () => {
  const {container} = render(<MockedMoviePreview/>);
  const favoriteButton = container.querySelector('[role=button]');

  expect(favoriteButton).toBeInTheDocument();
});

test("Favorite button should toggle on user click", () => {
  const {container} = render(<MockedMoviePreview/>);
  
  const favoriteButton = container.querySelector('[role=button]')!;

  fireEvent.click(favoriteButton);
  const filledHeart = favoriteButton.querySelector('.bi-heart-fill');
  expect(filledHeart).toBeInTheDocument();
  
  fireEvent.click(favoriteButton);
  const emptyHeart = favoriteButton.querySelector('.bi-heart');
  expect(emptyHeart).toBeInTheDocument();
});

test("Watch later button should toggle on user click", () => {
  const {container} = render(<MockedMoviePreview/>);
  
  const favoriteButton = container.querySelectorAll('[role=button]')[1]!;

  fireEvent.click(favoriteButton);
  const filledHeart = favoriteButton.querySelector('i');
  expect(filledHeart?.textContent).toBe('Gonna watch it');
});
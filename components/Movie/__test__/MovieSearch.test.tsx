import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieSearch from "../MovieSearch";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../../store/reducers";

const mockedStore = configureStore({
  reducer: rootReducer,
});

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

const MovieSearchWithState = () => (
  <Provider store={mockedStore}>
    <MovieSearch />
  </Provider>
);

test("Change movieTitle filter in the store, on user input", async () => {
  const user = userEvent.setup();
  const movieTitle = "Best Movie";

  const { container } = render(<MovieSearchWithState />);
  await user.type(container.querySelector("#title")!, movieTitle);

  const filters = mockedStore.getState().filter;
  expect(filters.movieTitle).toBe(movieTitle);
});

test("Change genre filter in the store, on user input", async () => {
  const user = userEvent.setup();
  const filtersPayload = {
    genre: "2",
    genreTitle: "Drama",
  };

  const { container } = render(<MovieSearchWithState />);
  await user.selectOptions(
    container.querySelector("#genre")!,
    filtersPayload.genre
  );

  const filters = mockedStore.getState().filter;
  expect(filters.movieTitle).toBe("");
  expect(filters.genre).toBe(filtersPayload.genre);
  expect(filters.genreTitle).toBe(filtersPayload.genreTitle);
});

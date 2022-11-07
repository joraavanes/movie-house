import { render, screen } from "@testing-library/react";
import Pagination from "../Pagination";

test("should generate page buttons based on itemsCount and items per page", () => {
  const {container} = render(<Pagination 
    currentPage={1}
    itemsCount={100}
    itemsCountPerPage={30}
  />);
  const anchors = container.querySelectorAll('a');
  expect(anchors.length).toBe(Math.ceil(100/30));
});

test("should give proper className to the current page button", () => {
  const {container} = render(<Pagination 
    currentPage={4}
    itemsCount={200}
    itemsCountPerPage={30}
  />);

  const listItems = screen.getAllByRole('listitem')!;
  expect(listItems.length).toBe(Math.ceil(200/30));
  expect(listItems[3].className).toBe('page-item active');
});
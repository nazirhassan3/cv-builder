import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Education from "../components/Education";

const mockFetchEducation = jest.fn();

const renderComponent = (props) => {
  render(<Education fetchEducation={mockFetchEducation} />);
};

test("if Education component is rendered correctly", () => {
  renderComponent();
  expect(screen.getByText("👨‍🎓 Education")).toBeInTheDocument();
});

test("if add button adds new field", () => {
  renderComponent();
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getAllByText("School/University")).toHaveLength(2);
});

test("if remove button removes a field", () => {
  renderComponent();
  fireEvent.click(screen.getByText("Add"));
  fireEvent.click(screen.getAllByText("Remove")[0]);
  expect(screen.getAllByText("School/University")).toHaveLength(1);
});

test("if remove button is present on load up", () => {
  renderComponent();
  let removeButton = screen.queryByText("Remove");
  expect(removeButton).toBeNull();
});

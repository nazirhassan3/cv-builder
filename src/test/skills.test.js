import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Skills from "../components/Skills";

const mockFetchSkills = jest.fn();

const renderComponent = (props) => {
  render(<Skills fetchSkills={mockFetchSkills} />);
};

test("if skills component is rendered correctly", () => {
  renderComponent();
  expect(screen.getByText("🤹‍♂️ Skills")).toBeInTheDocument();
});

test("if add button adds new field", () => {
  renderComponent();
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getAllByPlaceholderText("Angular")).toHaveLength(2);
});

test("if remove button removes a field", () => {
  renderComponent();
  fireEvent.click(screen.getByText("Add"));
  fireEvent.click(screen.getAllByText("Remove")[0]);
  expect(screen.getAllByPlaceholderText("Angular")).toHaveLength(1);
});

test("if remove button is present on load up", () => {
  renderComponent();
  let removeButton = screen.queryByText("Remove");
  expect(removeButton).toBeNull();
});

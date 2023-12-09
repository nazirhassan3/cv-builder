import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WorkExperience from "../components/WorkExperience";

const mockFetchWorkExp = jest.fn();

const renderComponent = (props) => {
  render(<WorkExperience fetchWorkExperience={mockFetchWorkExp} />);
};

test("if workExperience component is rendered correctly", () => {
  renderComponent();
  expect(screen.getByText("🏢 Work Experience")).toBeInTheDocument();
});

test("if add button adds new field", () => {
  renderComponent();
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getAllByText("Job Title")).toHaveLength(2);
});

test("if remove button removes a field", () => {
  renderComponent();
  fireEvent.click(screen.getByText("Add"));
  fireEvent.click(screen.getAllByText("Remove")[0]);
  expect(screen.getAllByText("Job Title")).toHaveLength(1);
});

test("if remove button is present on load up", () => {
  renderComponent();
  let removeButton = screen.queryByText("Remove");
  expect(removeButton).toBeNull();
});

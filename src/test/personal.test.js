import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PersonalDetails from "../components/PersonalDetails";

const mockFetchPersonalDetails = jest.fn();

const renderComponent = (props) => {
  render(<PersonalDetails fetchPersonalDetails={mockFetchPersonalDetails} />);
};

test("if PersonalDetails component is rendered correctly", () => {
  renderComponent();
  expect(screen.getByText("💻 Personal Details")).toBeInTheDocument();
});

test("confirm add button is not present for this component", () => {
  renderComponent();
  let addButton = screen.queryByText("Add");
  expect(addButton).toBeNull();
});

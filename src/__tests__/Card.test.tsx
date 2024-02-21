import "react-native";
import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react-native";
import { Card } from "../Card.tsx";

describe("Card ", () => {
  it("renders todo comment", () => {
    const renderAPI = render(<Card />);
    renderAPI.getByText("Create Todo List");
  });
});

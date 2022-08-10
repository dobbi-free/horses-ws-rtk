import { HorseList } from "../HorseList";
import { render } from "@testing-library/react";
//import { useSelector } from "react-redux";
import * as reduxHooks from "react-redux";

jest.mock("react-redux");

const horses = {
  horses: [
    {
      name: "Princess Diana",
      distance: 0,
    },
  ],
};

describe("HorseList", () => {
  it("should create HorseList with empty horses' array", () => {
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue({ horses: [] });
    const component = render(<HorseList />);

    expect(component).toMatchSnapshot();
  });

  it("should create HorseList with horses' item", () => {
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue(horses);
    const component = render(<HorseList />);

    expect(component).toMatchSnapshot();
  });
});

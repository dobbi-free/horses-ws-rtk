import { render } from "@testing-library/react";
import { HorseTable } from "../HorseTable";
import * as reduxHooks from 'react-redux';

jest.mock("react-redux");

describe("HorseTable", () => {
    it("should create HorseTable", () => {
        jest.spyOn(reduxHooks, "useSelector").mockReturnValue({ horses: [] });
        const component = render(<HorseTable />);

        expect(component).toMatchSnapshot();
    });
});

import { render } from "@testing-library/react";
import { HorseItem } from "../HorseItem";

jest.mock("react-redux");

describe("HorseItem", () => {
    it("should create HorseItem", () => {
        const component = render(<HorseItem distance={0} name={"Princess Diana"} />);

        expect(component).toMatchSnapshot();
    });
});

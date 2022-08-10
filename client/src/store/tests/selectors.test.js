import { selectHorses } from "../selectors/horsesSelector";

describe("redux selectors", () => {
  it("should select horses from state object", () => {
    const horses = [
      {
        name: "Princess Diana",
        distance: 0,
      },
    ];
    const result = selectHorses({ horses });
    expect(result).toEqual(horses);
  });
});

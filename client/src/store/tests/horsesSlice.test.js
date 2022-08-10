import { fetchHorses } from "../action-creators/horsesActionCreator";
import horsesReducer from "../reducers/horsesSlice";

describe("horsesSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = horsesReducer(undefined, {});

    expect(result).toEqual({ horses: [] });
  });

  it("should add horses with 'fetchHorses' action", () => {
    const action = {
      type: fetchHorses.type,
      payload: {
        data: [
          {
            name: "Princess Diana",
            distance: 0,
          },
        ],
      },
    };
    const result = horsesReducer({ horses: [] }, action);
    expect(result.horses[0].name).toEqual("Princess Diana");
  });
});

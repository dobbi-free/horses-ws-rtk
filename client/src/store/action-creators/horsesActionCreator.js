const { createAction } = require("@reduxjs/toolkit");
export const fetchHorses = createAction("fetchAction", (data) => {
  return {
    payload: { data },
  };
});

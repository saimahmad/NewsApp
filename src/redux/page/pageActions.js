import { GO_TO_HOME, GO_TO_DETAILS } from "./pageTypes";

export const goToHome = (payload) => {
  return {
    type: GO_TO_HOME,
    payload,
  };
};

export const goToDetails = (payload) => {
  return {
    type: GO_TO_DETAILS,
    payload,
  };
};

import companyFormReducer, {
  CompanyFormState,
  clickNext,
} from "./companyFormSlice";

describe("counter reducer", () => {
  const initialState: CompanyFormState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(companyFormReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle clickNext", () => {
    const actual = companyFormReducer(initialState, clickNext(5));
    expect(actual.value).toEqual(8);
  });
});

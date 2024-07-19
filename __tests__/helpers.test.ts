import { createAndDispatchEvent } from "../helpers";

describe("createAndDispatchEvent", () => {
  it("should create and dispatch a CustomEvent with the given name", () => {
    const eventName = "testEvent";
    const spy = jest.spyOn(window, "dispatchEvent").mockImplementation();

    createAndDispatchEvent(eventName);

    expect(spy).toHaveBeenCalled();
    const event = spy.mock.calls[0][0] as CustomEvent;
    expect(event.type).toBe(eventName);
    expect(event.detail).toHaveProperty("id");

    spy.mockRestore();
  });
});

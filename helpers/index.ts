export const createAndDispatchEvent = (eventName: string) => {
  const event = new CustomEvent(eventName, {
    detail: { id: Math.floor(Math.random() * 100) + 1 },
  });
  window.dispatchEvent(event);
};

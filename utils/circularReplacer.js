const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return; // Replace circular reference with `undefined`
      }
      seen.add(value);
    }
    return value;
  };
};

export default getCircularReplacer;

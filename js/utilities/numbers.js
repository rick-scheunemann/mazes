const getRandomIntMaxEnclusive = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};

const getRandomIntInclusive = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};

export {
  getRandomIntMaxEnclusive,
  getRandomIntInclusive,
};

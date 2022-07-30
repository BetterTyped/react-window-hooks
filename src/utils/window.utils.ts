export const getIsClient = () => {
  try {
    return !!window.addEventListener;
  } catch (err) {
    return false;
  }
};

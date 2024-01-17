export const removeLocalStorageItem = (data) => {
  localStorage.removeItem(data);
};

export const createLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

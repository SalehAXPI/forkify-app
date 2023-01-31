import { TIMEOUT_SEC } from "./config";

export const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long!`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error();
    return data;
  } catch (e) {
    // to Handle The Error In model.js catch Block.
    throw e;
  }
};

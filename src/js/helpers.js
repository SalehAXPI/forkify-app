import { TIMEOUT_SEC } from "./config";

export const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long!`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  const res = await Promise.race([
    uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url),
    timeout(TIMEOUT_SEC),
  ]);
  const data = await res.json();
  if (!res.ok) throw new Error();
  return data;
};

/*
export const getJSON = async function (url) {
  const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
  const data = await res.json();
  if (!res.ok) throw new Error();
  return data;
};

export const sendJSON = async function (url, uploadData) {
  const res = await Promise.race([
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    }),
    timeout(TIMEOUT_SEC),
  ]);
  const data = await res.json();
  if (!res.ok) throw new Error();
  return data;
}; */
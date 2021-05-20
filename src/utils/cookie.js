import cookie from 'js-cookie';

export const setCookie = (key, value, sessionCookie = false) => {
  if (process.browser) {
    const options = {
      expires: sessionCookie ? 1 / 288 : 1,
      domain: process.env.COOKIE_DOMAIN
    };
    if (!process.env.COOKIE_DOMAIN) delete options.domain;
    cookie.set(key, value, options);
  }
};

export const destroyCookie = (key, opt) => {
  if (process.browser) {
    cookie.remove(key, opt);
  }
};

const getCookieFromBrowser = key => cookie.get(key);

export const getCookie = (key, req) =>  getCookieFromBrowser(key);

export const clearCookieIfExists = key => {
  const value = getCookie(key);
  if (value) {
    destroyCookie(key);
  }
};

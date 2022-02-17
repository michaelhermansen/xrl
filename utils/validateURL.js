const urlRegex =
  /[-a-zA-Z0-9@:%.,_\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.,~#?&//=]*)/g;

const xrlRegex = /.*xrl\.no\/..*|.*xrl\.vercel\.app\/..*/;

const validateURL = (url) => {
  const match = url.match(urlRegex);
  const isXrl = xrlRegex.test(url);

  return {
    valid: match ? true : false,
    cleanURL: match ? `https://${match[0].trim()}` : null,
    isXrl,
  };
};

export default validateURL;

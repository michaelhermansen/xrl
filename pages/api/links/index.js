import ShortLink from "@models/ShortLink";
import mongoConnect from "@utils/mongoConnect";
import validateURL from "@utils/validateURL";

const validateCaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();
  return data.success;
};

export default async (req, res) => {
  // Disallow any non-POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ status: "Method not allowed" });
  }

  // Validate recaptchaToken
  const isHuman = await validateCaptcha(req.body.recaptchaToken);
  if (!isHuman) return res.status(201).json({});

  await mongoConnect();
  await ShortLink.init();

  // POST: Ny link
  try {
    const newLink = await ShortLink.create({
      original: validateURL(req.body.original).cleanURL,
      short: req.body.short,
      userID: req.body.userID,
    });
    return res.status(201).json(newLink);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

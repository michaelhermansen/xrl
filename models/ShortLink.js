import mongoose from "mongoose";
import validateURL from "@utils/validateURL";
import testAlias from "@utils/testAlias";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  6
);

const shortLinkSchema = new mongoose.Schema({
  original: {
    type: String,
    required: [true, "Ugyldig URL"],
  },
  short: {
    type: String,
    unique: [true, "Alias er allerede i bruk"],
    required: true,
    maxLength: 20,
    default: nanoid,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  userID: {
    type: String,
    required: false,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 dager frem i tid
  },
});

shortLinkSchema.path("original").validate((url) => {
  if (!validateURL(url).valid) return false;
  if (validateURL(url).isXrl) return false;
}, "Ugyldig URL");

shortLinkSchema.path("short").validate((short) => {
  return testAlias(short);
}, "Ugyldig alias");

export default mongoose.models.ShortLink ||
  mongoose.model("ShortLink", shortLinkSchema);

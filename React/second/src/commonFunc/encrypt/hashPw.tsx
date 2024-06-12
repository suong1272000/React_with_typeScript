import crypto from "crypto";

export const hashPw = (password: string) => {
  const hashedPw = crypto.createHash("sha256").update(password).digest("hex");
  return hashedPw;
};

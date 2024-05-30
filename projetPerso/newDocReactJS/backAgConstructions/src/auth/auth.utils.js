import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

export const comparePassword = async (userInput, password) => {
  return bcrypt.compare(userInput, password);
};

export const Roles = {
  ADMIN: "ADMIN",
  USER: "USER",
};

import bcrypt from 'bcrypt';

// passwordPlain -> password without encrypt example: hola123
export const encryptPassword = async (passwordPlain: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passwordPlain, salt);
  return hash;
}

// pass password plain and pass password encrypted
export const comparePassword = async (passwordPlain: string, hashPassword: string) => {
  const isEqual = await bcrypt.compare(passwordPlain, hashPassword);
  return isEqual;
};
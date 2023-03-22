import jsonwebtoken from 'jsonwebtoken';
import { ObjectId } from 'mongoose';


// Must pass the object user
export const tokenSign = async (id: ObjectId, role: any) => {
  const sign = jsonwebtoken.sign({
    _id: id,
    role: role
  }, process.env.JWT_SECRET_KEY!, {expiresIn: '2h'})
  return sign;
};

// Must pass the token session

export const tokenVerify = async (token: string) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY!);
  } catch (error) {
    return null;
  };
};
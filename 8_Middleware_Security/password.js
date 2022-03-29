import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "hunter12"
const hashedPassword = "$2b$12$ReCnO7rwKzHRe0JBUCIM9e6sSUV4AWjFlmvRroG..bYDCvmR4BwGy"


const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
console.log(isSame);

 const resultingHashedPassword = await bcrypt.hash(plaintextPassword, saltRounds)
console.log(hashedPassword)

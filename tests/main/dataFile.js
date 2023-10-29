function generateRandomString(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
export const testData = {
    loginName: generateRandomString(8), 
    password: generateRandomString(12), 
    firstName: generateRandomString(6), 
    lastName: generateRandomString(8), 
    email: generateRandomString(8) + "@example.com" 
};





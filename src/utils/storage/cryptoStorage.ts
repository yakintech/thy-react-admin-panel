
import CryptoJS from 'crypto-js';

const cryptoKey = "thy-web-app-key"

const encrypt = (txt: string): string => {
    return CryptoJS.AES.encrypt(txt, cryptoKey).toString();
}


const decrypt = (txt: string): string => {
    return CryptoJS.AES.decrypt(txt, cryptoKey).toString(CryptoJS.enc.Utf8);
}


const storage = {
    saveLocalStorage: (key: string, value: string) => {
        const encryptedValue = encrypt(value)
        localStorage.setItem(key, encryptedValue);
    },
    getLocalStorage: (key: string): string | null => {
        const encryptedValue = localStorage.getItem(key);

        if (encryptedValue) {
            return decrypt(encryptedValue);
        } else {
            return null;
        }
    },
    removeLocalStorage: (key: string) => {
        localStorage.removeItem(key);
    },
}


export default storage;
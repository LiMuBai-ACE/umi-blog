import CryptoJS from 'crypto-js'; // 前端加密工具

// 自定义加密密钥
const KEY = 'javascript';

// 加密
const encrypt = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), KEY);
};

// 解密
const decrypt = (data: any) => {
  const bytes = CryptoJS.AES.decrypt(data, KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

const StorageHelper = {
  get: (key: string) => {
    try {
      const formatted = decrypt(localStorage.getItem(key));
      return formatted;
    } catch (e) {
      return undefined;
    }
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, encrypt(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export default StorageHelper;

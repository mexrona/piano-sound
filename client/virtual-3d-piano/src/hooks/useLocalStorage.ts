export const useLocalStorage = () => {
    const setLocalStorage = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getLocalStorage = (key: string) => {
        try {
            return JSON.parse(localStorage.getItem(key) || "");
        } catch (e: any) {
            throw new Error(e);
        }
    };

    const removeLocalStorage = (key: string) => {
        localStorage.removeItem(key);
    };

    return {
        setLocalStorage,
        getLocalStorage,
        removeLocalStorage,
    };
};

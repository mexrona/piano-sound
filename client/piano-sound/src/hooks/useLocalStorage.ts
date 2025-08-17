export const useLocalStorage = () => {
    const setLocalStorage = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getLocalStorage = (key: string) => {
        const item = localStorage.getItem(key) || null;
        return item ? JSON.parse(item) : null;
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

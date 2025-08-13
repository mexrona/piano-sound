export const sendMessage = (message: string, setMessageText?: any) => {
    if (setMessageText) {
        setMessageText(message);

        setTimeout(() => {
            setMessageText("");
        }, 2000);
    }

    return message;
};

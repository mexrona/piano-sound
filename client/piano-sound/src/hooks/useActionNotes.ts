export const useActionNotes = async (
    url: string,
    type: string,
    body: object,
    e?: React.FormEvent<HTMLFormElement>
): Promise<void> => {
    if (e) e.preventDefault();

    try {
        const res = await fetch(`http://localhost:3002/api/notes/${url}`, {
            method: `${type}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (res.status !== 200) {
            const json = await res.json();
            console.log(json.message);
            return;
        }
    } catch (error) {
        console.log(error);
    }
};

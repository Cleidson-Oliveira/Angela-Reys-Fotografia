import axios, { AxiosPromise } from 'axios';

export const sendContactMail = async (
    name: string,
    senderMail: string,
    content: string
) => {
    const data = {
        name,
        senderMail,
        content
    };

    try {
        const response = await axios.post('/api/contact', data);
        return response
    } catch (error) {
        return error;
    }
};
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "app_id": APP_ID
            },
        });

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default handler;
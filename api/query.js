const { Configuration, OpenAIApi } = require("openai");

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Tylko metoda POST jest dozwolona" });
    }

    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    }));

    try {
        const { prompt } = req.body;
        const gptResponse = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: 150,
        });

        res.status(200).json({ answer: gptResponse.data.choices[0].text });
    } catch (error) {
        console.error("Błąd przy zapytaniu do OpenAI:", error);
        res.status(500).json({ message: "Wystąpił błąd przy przetwarzaniu Twojego zapytania." });
    }
};

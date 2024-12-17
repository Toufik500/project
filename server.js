require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/generate-story', async (req, res) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: "Generate a short creative story in 3-4 sentences."
                }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        res.json({ story: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate story' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
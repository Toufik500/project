require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stories = require('../stories');
const PDFDocument = require('pdfkit');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

console.log('Loaded stories:', stories ? 'Yes' : 'No');
console.log('Number of stories:', stories.length);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/generate-story', (req, res) => {
    try {
        console.log('Generate story endpoint hit');
        
        const randomIndex = Math.floor(Math.random() * stories.length);
        const selectedStory = stories[randomIndex];
        
        console.log('Story selected:', selectedStory.title);
        
        res.json({ 
            title: selectedStory.title,
            story: selectedStory.text 
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to generate story',
            details: error.message 
        });
    }
});

app.post('/api/get-definition', async (req, res) => {
    try {
        const { word } = req.body;
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const definition = response.data[0].meanings[0].definitions[0].definition;
        res.json({ definition });
    } catch (error) {
        res.status(500).json({ 
            error: 'Failed to get definition',
            details: 'Word not found or service unavailable'
        });
    }
});

app.post('/api/download-pdf', (req, res) => {
    try {
        const { story } = req.body;
        
        // Create PDF document
        const doc = new PDFDocument();
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=story.pdf');
        
        // Pipe PDF document to response
        doc.pipe(res);
        
        // Add content to PDF
        doc.fontSize(20).text('Your Story', { align: 'center' });
        doc.moveDown();
        doc.fontSize(12).text(story, { align: 'left' });
        
        // Finalize PDF
        doc.end();
    } catch (error) {
        res.status(500).json({ 
            error: 'Failed to generate PDF',
            details: error.message 
        });
    }
});

app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'Server is working',
        storiesAvailable: stories.length
    });
});

app.get('/api/stories', (req, res) => {
    try {
        res.json({ stories });
    } catch (error) {
        res.status(500).json({ 
            error: 'Failed to fetch stories',
            details: error.message 
        });
    }
});

app.get('/api/search-stories', (req, res) => {
    try {
        const { query } = req.query;
        const filteredStories = stories.filter(story => 
            story.title.toLowerCase().includes(query.toLowerCase()) ||
            story.text.toLowerCase().includes(query.toLowerCase())
        );
        res.json({ stories: filteredStories });
    } catch (error) {
        res.status(500).json({ error: 'Failed to search stories' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Number of available stories: ${stories.length}`);
}); 
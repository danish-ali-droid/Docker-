const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const projects = [
        { name: "Cloud Migration", status: "Active", lead: "Danish" },
        { name: "API Integration", status: "Completed", lead: "Zahid" },
        { name: "Security Audit", status: "Pending", lead: "Ali" }
    ];
    res.render('dashboard', { projects });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

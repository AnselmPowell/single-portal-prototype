const nunjucks = require('nunjucks');
const fs = require('fs');

// Configure Nunjucks to load templates from a directory (adjust this path)
nunjucks.configure('./templates', { autoescape: true });

/* 
Render the template and write the HTML file
(replace template files and vars as necessary)
*/
try {
    // fs.writeFileSync(
    //     'index.html', nunjucks.render('index.njk', { pageTitle: 'Sport Wales Portal'}));
    fs.writeFileSync(
        './pages/funding.html', nunjucks.render('funding.njk', { pageTitle: 'Funding | Sport Wales Portal'}));
    fs.writeFileSync(
        './pages/booking.html', nunjucks.render('booking.njk', { pageTitle: 'Booking | Sport Wales Portal'}));
    fs.writeFileSync(
        './pages/education.html', nunjucks.render('education.njk', { pageTitle: 'Learning | Sport Wales Portal'}));
    fs.writeFileSync(
        './pages/portal.html', nunjucks.render('portal.njk', { pageTitle: 'Home | Sport Wales Portal'}));
    fs.writeFileSync(
        '404.html', nunjucks.render('404.njk', { pageTitle: '404 | Sport Wales Portal'}));
    console.log('Pages have been successfully created.');
} catch (error) {
    console.error('Error rendering or writing pages:', error);
}



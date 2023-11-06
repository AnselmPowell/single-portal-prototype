const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('./templates', { autoescape: true });

class Page {
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {
        // adapts file if it's the index.html or 404.html (needs unique file paths and output location)
        const relFilePath = this.filename !== 'index' && this.filename !== '404' ? '../' : '';
        const outputLocation = this.filename !== 'index' && this.filename !== '404' ? './pages/' : '';

        fs.writeFileSync(
            `${outputLocation}${this.filename}.html`,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Sport Wales Portal`,
                filePath: relFilePath,
            })
        );
    }
}

const pages = [
    new Page('index', 'Welcome'),
    new Page('funding', 'Funding'),
    new Page('booking', 'Booking'),
    new Page('education', 'Learning'),
    new Page('portal', 'Home'),
    new Page('404', '404'),
    new Page('booking_meeting', 'Book a meeting'),
    new Page('booking_courts', 'Book a court'),
    new Page('booking_classes', 'Book a class'),
    new Page('booking_national_centre', 'Book National Centre'),
    new Page('booking_dance', 'Book Dance Classes '),
    new Page('booking_pilates', 'Book Pilates'),
    new Page('booking_yoga', 'Book Yoga Clasess'),
    new Page('booking_spinning', 'Book Spin Classes'),
]

// entry point:
try {
    for (const page of pages) {
        page.create();
    }
    console.log('Pages successfully created.');
} catch (error) {
    console.error('Error rendering or writing pages:', error);
}



(() => {
    console.log('Global JS')
    
    const allDatePickers = [].slice.call(document.querySelectorAll('#datepicker'))

    allDatePickers.forEach(function (element) {
        const picker = new easepick.create({
            element: element,
            css: [
                'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
            ],
        });

    })  

})()
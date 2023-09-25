(() => {
    const localStorageKey = "translate"
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const englishPage = document.querySelector(".EN")
    const welshPage = document.querySelector(".CY")
    try{

        if((jsonFile)) {
            const pageType = jsonFile.find(page => page);
            if(!pageType) {
                jsonFile.push({page: 'EN'});
                // Save the JSON file.
                localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
            }
            if(pageType.page == "EN"){
                console.log('pageType!', pageType)
                englishPage.classList.add('show')
                welshPage.classList.remove('show')
            } 
            if(pageType.page == "CY"){
                englishPage.classList.remove('show')
                welshPage.classList.add('show')
            }
         

        

        } 
    } catch{}

// })
})()

const press_en = ()=> {
const localStorageKey = "translate"
const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];


const langPicker = document.querySelector('.lang-picker_en');
console.log(langPicker.childNodes[3].childNodes[0].data)
const currentLang = langPicker.childNodes[3].childNodes[0].data
const englishPage = document.querySelector(".EN")
const welshPage = document.querySelector(".CY")

if(currentLang === "EN") {
englishPage.classList.remove('show')
welshPage.classList.add('show')
JSON.parse(localStorage.clear(localStorageKey))

if((jsonFile)) {
        jsonFile.push({page: 'EN'});
        // Save the JSON file.
        localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
} 
} else {
englishPage.classList.add('show')
welshPage.classList.remove('show')
JSON.parse(localStorage.clear(localStorageKey))
if((jsonFile)) {
    jsonFile.push({page: 'CY'});
    // Save the JSON file.
    localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
} 
}  
}

const press_cy = ()=> {
const localStorageKey = "translate"
const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];


const langPicker = document.querySelector('.lang-picker_cy');
const englishPage = document.querySelector(".EN")
const welshPage = document.querySelector(".CY")
console.log(langPicker.childNodes[3].childNodes[0].data)
const currentLang = langPicker.childNodes[3].childNodes[0].data
if(currentLang === "EN") {
englishPage.classList.remove('show')
welshPage.classList.add('show')
JSON.parse(localStorage.clear(localStorageKey))
if((jsonFile)) {
    jsonFile.push({page: 'CY'});
    // Save the JSON file.
    localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
} 
} else {
englishPage.classList.add('show')
welshPage.classList.remove('show')
JSON.parse(localStorage.clear(localStorageKey))
if((jsonFile)) {
    jsonFile.push({page: 'EN'});
    // Save the JSON file.
    localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
} 
}  
}



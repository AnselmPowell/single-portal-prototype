(() => {
    console.log('hello')
    const localStorageKey = "translate"
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const englishPage = document.querySelector(".EN")
    const welshPage = document.querySelector(".CY")
    try{

        if((jsonFile)) {
            const pageType = jsonFile.find(page => page);
            // JSON.parse(localStorage.clear(localStorageKey))
            console.log('pageType', pageType)
            console.log('jsonFile', jsonFile)

            if(!pageType) {
                // console.log('inside')
                jsonFile.push({page: 'CY'});
                // Save the JSON file.
                localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
            }
            if(pageType.page == "EN"){
                // JSON.parse(localStorage.clear(localStorageKey))
                englishPage.classList.add('show')
                welshPage.classList.remove('show')
            } 
            if(pageType.page == "CY"){
                englishPage.classList.remove('show')
                welshPage.classList.add('show')
            }

        } 
    } catch{}

})()



async function storeTranslate(lang) {
    const localStorageKey = "translate"
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    
    if((jsonFile)) {
        
        localStorage.clear(localStorageKey)
        
        const jsonFile = await JSON.parse(localStorage.getItem(localStorageKey)) || [];
        await jsonFile.push({page: lang});
        // Save the JSON file.
        await localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
        } 
    }



const press_en = ()=> {

const langPicker = document.querySelector('.lang-picker_en');
// console.log(langPicker.childNodes[3].childNodes[0].data)
const currentLang = langPicker.childNodes[3].childNodes[0].data
const englishPage = document.querySelector(".EN")
const welshPage = document.querySelector(".CY")

if(currentLang === "EN") {
englishPage.classList.remove('show')
welshPage.classList.add('show')
storeTranslate("CY");

} else {
englishPage.classList.add('show')
welshPage.classList.remove('show')
storeTranslate("EN");

}  
}

const press_cy = ()=> {
const langPicker = document.querySelector('.lang-picker_cy');
const englishPage = document.querySelector(".EN")
const welshPage = document.querySelector(".CY")
const currentLang = langPicker.childNodes[3].childNodes[0].data

if(currentLang === "EN") {
englishPage.classList.remove('show')
welshPage.classList.add('show')
storeTranslate("CY");

} else {
    welshPage.classList.remove('show')
    englishPage.classList.add('show')
    storeTranslate("EN");
}  
}


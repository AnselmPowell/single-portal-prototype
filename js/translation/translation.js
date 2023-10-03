(() => {

    const localStorageKey = "translate"
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const langPicker = document.querySelector('.lang-picker_en');

    try{

        if((jsonFile)) {
            const pageType = jsonFile.find(page => page);
            // JSON.parse(localStorage.clear(localStorageKey))
            console.log('pageLang', pageType.page)
            console.log('jsonFile', jsonFile)

            if(!pageType) { 
                console.log('testt')
                jsonFile.push({page: 'EN'});
                // Save the JSON file.
                localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
            }
        } 
    } catch{}

})()

const pushToWelshPage = (pathname)=>{
    const str = pathname;
    const parts = str.split("/");
    const filename = parts[parts.length - 1];
    console.log(filename);
    const welshPathName = ("../pages/welsh_" + filename)
    return welshPathName
    
}

const pushToEnglishPage = (pathname)=>{
    const str = pathname;
    const parts = str.split("/welsh_");
    const filename = parts[parts.length - 1];
    console.log(filename);
    const englishPathName = ("../pages/" + filename)
    return englishPathName
}


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

const translateToggle = ()=> {
    
const langPicker = document.querySelector('.lang-picker_en');
// console.log(langPicker.childNodes[3].childNodes[0].data)
console.log(langPicker.childNodes[3].innerHTML)
// const currentLang = langPicker.childNodes[3].childNodes[0].data
const localStorageKey = "translate"
const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];
const pageType = jsonFile.find(page => page);

if(pageType.page == "EN") {
    console.log('press English')
    const pathName = window.location.pathname
    const newPathname = pushToWelshPage(pathName)
    window.location.href = (newPathname)
    storeTranslate("CY");
    langPicker.childNodes[3].innerHTML = "CY"

} else {
    console.log('press welsh')
    const pathName = window.location.pathname
    const newPathname = pushToEnglishPage(pathName)
    window.location.href = (newPathname)
    storeTranslate("EN");
    langPicker.childNodes[3].innerHTML = "EN"
}  
}



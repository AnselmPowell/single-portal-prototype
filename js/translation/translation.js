(() => {
    const localStorageKey = "translate"
    const jsonFile = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    try{

        if((jsonFile)) {
            const pageType = jsonFile.find(page => page);
            // JSON.parse(localStorage.clear(localStorageKey))
            console.log('pageLang', pageType)
            console.log('jsonFile', jsonFile)

            if(!pageType) {
                // console.log('inside')
                jsonFile.push({page: 'EN'});
                // Save the JSON file.
                localStorage.setItem(localStorageKey, JSON.stringify(jsonFile));
            }
            // if(pageType.page == "EN"){
            //     console.log('inside english 0')
            //     // JSON.parse(localStorage.clear(localStorageKey))
            //         const pathName = window.location.pathname
            //         setTimeout(function() {
            //             console.log('inside English')
            //             const newPathname = pushToWelshPage(pathName)
                        
            //             window.location.href = (newPathname)
            //         }, 1000);
            // } 
            // if(pageType.page == "CY"){
            //     console.log('inside wales 0')
            //         const pathName = window.location.pathname
            //         console.log(pathName)
            //         setTimeout(function() {
            //             const newPathname = pushToWelshPage(pathName)
            //             console.log('inside Wales')
            //             window.location.href = (newPathname)
            //         }, 1000);
                    
            
            // }
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

} else {
    console.log('press welsh')
    const pathName = window.location.pathname
    const newPathname = pushToEnglishPage(pathName)
    window.location.href = (newPathname)
    storeTranslate("EN");
}  
}

// const press_cy = ()=> {
// const langPicker = document.querySelector('.lang-picker_cy');
// const currentLang = langPicker.childNodes[3].childNodes[0].data

// if(currentLang === "EN") {
//     console.log('press welsh')
//     const pathname = window.location.pathname
//     // pushToWelshPage(pathname)
//     storeTranslate("CY");

// } else {
//     console.log('press english')
//     const pathname = window.location.pathname
//     // pushToEnglsihPage(pathname)
//     storeTranslate("EN");
// }  
// }


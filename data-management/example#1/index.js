const form = document.querySelector('#myForm') // first get acces to the form

form.addEventListener('change', function () {

    const formData = new FormData(form) // with form available we can parse the answers of the users into our formData object
    // the FormData object itself cannot be read or parsed so we'll have to take it apart

    let formDataObject = {} // define a Object you want the formData to be parsed to

    formData.forEach((value, key) => { // here we take all the values and keys in our formdata and assign it to the formDataObject
        formDataObject[key] = value
    })
    console.log(formDataObject) // now if we change something to the form we the output will be {firstName: "Wouter", lastName: ""}
    // this is perfect beacuse we have JSON object containing all our form data

    // Now we can call the function to store our formDataObject
    setLocalStorage("formData", formDataObject)
})


function setLocalStorage(localName, dataToStore) {
    // before we store the data check if there already is data in the localstorage
    let existing = localStorage.getItem(localName)

    // If no existing data, create an object
    // Otherwise, convert the localStorage string to an object
    existing = existing ? JSON.parse(existing) : {}

    // Add new data to localStorage Object
    existing = dataToStore

    // Save back to localStorage
    localStorage.setItem(localName, JSON.stringify(existing))
    // remember to parse your object to a string because localstorage can only store strings

}


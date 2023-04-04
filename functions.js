function validateInput()
{
    let validator = true

    let checkValue = document.getElementById("fname").value
    let checkLocation = document.getElementById("fname")
    let regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('IMIĘ: zaczyna się wielką literą, zawiera jedynie litery')
    }

    checkValue = document.getElementById("lname").value
    checkLocation = document.getElementById("lname")
    regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)*$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('NAZWISKO: zaczyna się wielką literą, zawiera maksymalnie jeden myślnik w środku nazwy')
    }

    checkValue = document.getElementById("street").value
    checkLocation = document.getElementById("street")
    regex = /^(\d+\s)?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(\s|-|(\s\d+))?)+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+\s\d+(\sr\.)?)?$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('ULICA: zaczyna się od wielkiej litery lub cyfry (w przypadku nazwy pochodzącej od daty, może zawierać rok (w przypadku nazwy pochodzącej od wydarzenia historycznego)');
    }

    checkValue = document.getElementById("city").value
    checkLocation = document.getElementById("city")
    regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+((-|\s)[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('MIASTO: zaczyna się wielką literą, zawiera maksymalnie jeden myślnik w środku nazwy')
    }

    checkValue = document.getElementById("hnumber").value
    checkLocation = document.getElementById("hnumber")
    regex = /^([1-9]|[1-9]\d|[1-9]\d{2})([a-zA-Z])?$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('NUMER DOMU: zawiera cyfry i maksymalnie jedną literę na końcu, nie zaczyna się cyfrą 0, maksymalna wartość 999')
    }

    checkValue = document.getElementById("fnumber").value
    checkLocation = document.getElementById("fnumber")
    regex = /^([1-9]|[1-9]\d|[1-9]\d{2})?$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('NUMER MIESZKANIA: zawiera jedynie cyfry, nie zaczyna się cyfrą 0, maksymalna wartość 999')
    }

    checkValue = document.getElementById("pnumber").value
    checkLocation = document.getElementById("pnumber")
    regex = /^[1-9]\d{2}-\d{3}-\d{3}$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('NUMER TELEFONU: zawiera jedynie cyfry i myślniki w formacie 000-000-000')
    }

    checkValue = new Date(document.getElementById("bday").value)
    checkLocation = document.getElementById("bday")
    regex = new Date();
    if (checkValue <= regex){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('DATA URODZENIA: nie może przekroczyć dzisiejszej daty')
    }

    checkValue = document.getElementById("pesel").value
    checkLocation = document.getElementById("pesel")
    regex = /^\d{11}$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('PESEL: zawiera dokładnie 11 cyfr')
    }

    checkValue = document.getElementById("pcode").value
    checkLocation = document.getElementById("pcode")
    regex = /^\d{2}-\d{3}$/
    if (regex.test(checkValue)){
        checkLocation.style.border = "green solid 1px"
    }
    else{
        checkLocation.style.border = "red solid 1px"
        validator = false
        window.alert('KOD POCZTOWY: zawiera jedynie cyfry oddzielone myślnikiem w formacie 00-000')
    }
    
     if (validator == true)
     {
         return true
     }
    return false
}

function clearBorders()
{
    let toClear = document.getElementById("fname")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("lname")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("street")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("city")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("hnumber")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("fnumber")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("pnumber")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("bday")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("pesel")
    toClear.style.border = "black solid 1px"

    toClear = document.getElementById("pcode")
    toClear.style.border = "black solid 1px"
}

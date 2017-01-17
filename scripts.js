function addPerson()
{
     var firstNameElement = document.getElementbyId("firstnameField");
     console.log("Adding a person!" + firstnameElement.value);
     var nameBox = document.getElementById("personNameBox");
     nameBox.innerText = firstNameElement.value;
}


function addSomething()
{
    var inputField = document.getElementById("somethingField");
    var results = document.getElementById("resultBox");

    var newElement = document.createElement("INPUT");
    newElement.setAttribute("type", "text");
    newElement.setAttribute("placeholder", inputField.value);

    results.appendChild(newElement);
}
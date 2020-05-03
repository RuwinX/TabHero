document.addEventListener("DOMContentLoaded", main);
function main() {
  var tabCollectionData = {};
  var tabKeyRepo = [];

  // used to listen to the onclick of the save all open button
  window.addEventListener('load', function listenForCollectionAdd(event) {
    var createButton = document.getElementById('collectionAddButton');
    createButton.addEventListener('click', function () { saveCollection(); });
  })
  //this is used to listen to the onclick of the my tab hero button button
  window.addEventListener('load', function (event) {
    var createButton = document.getElementById('tabHeroMainNavigationButton');
    createButton.addEventListener('click', function () { newPageNavigation(); });
  })

  //used to navigate to the new tab with tabhero's main web page from the extension pop up
  function newPageNavigation() {
    chrome.tabs.create({ url: 'coolurlhere.html' });
  }

  //this function specifies what to do when the save toCOllection button is hit.
  function saveCollection() {
    //chrome.tabs.create({url: ''http://google.ca});
    chrome.tabs.query({ currentWindow: true }, function (arrayOfTabs) {
      if ((document.getElementById("collectionNameInput").value.trim()) == "") {
        //note: getMonth is indexed from 0 for some reason so you need to add a +1 to get the actual month. 
        var today = new Date()
        today = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear() + ":" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        tabCollectionData[today] = arrayOfTabs;
        tabKeyRepo.unshift(today);
      }
      else {
        var tagValue = document.getElementById("collectionNameInput").value.trim();
        tabCollectionData[tagValue] = arrayOfTabs;
        tabKeyRepo.unshift("tagValue");
      }
      //setting the data into the local storage using chrome APIS
      chrome.storage.local.set(tabCollectionData);
      chrome.storage.local.set({ 'collectionKeys': tabKeyRepo });

      //experimental code that uses the cloud firebase var db [created in init-firebase.js to push data into the cloud DB]
      db.collection("collectionName").add(tabCollectionData)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    

    });
  }
}

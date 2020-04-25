document.addEventListener("DOMContentLoaded", main);
function main() {
  var tabCollectionData = {};
  var tabKeyRepo = [];


  //this function is used to load the default tab of the collection
  /*window.onload = function () {
      openTab(event, 'collections');
    };
    //this function is used to listen for the onclick of the hashtag tab button              
    window.addEventListener('load', function listenforHashTag(event) {
      var createButton = document.getElementById('tl_Hash');
      createButton.addEventListener('click', function () { openTab(event, 'HashT'); });
    })
    
    //this function is used to listen for the onclick of the Collections tab button       
    window.addEventListener('load', function listenForCollection(event) {
      var createButton = document.getElementById('tl_Collections');
      createButton.addEventListener('click', function () { openTab(event, 'collections'); });
    })
    
    
    
    
    function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
    
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    */

  //this function is used to listen to the onclick of the save all open button
  window.addEventListener('load', function listenForCollectionAdd(event) {
    var createButton = document.getElementById('collectionAddButton');
    createButton.addEventListener('click', function () { saveCollection(); });
  })
  //this function is used to listen to the onclick of the my tab hero button button
  window.addEventListener('load', function (event) {
    var createButton = document.getElementById('tabHeroMainNavigationButton');
    createButton.addEventListener('click', function () { newPageNavigation(); });
  })

  function newPageNavigation() {
    chrome.tabs.create({ url: 'file://./shattered%20animation%20stuff/shattering-text-animation/index.html' });
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
        tabKeyRepo.unshift(tagValue);
      }
      //setting the data into the local storage using chrome APIS
      chrome.storage.local.set(tabCollectionData);
      chrome.storage.local.set({ 'collectionKeys': tabKeyRepo });

    });
  }
}

// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
/*
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
    if (request.message === "activate_icon") {
        chrome.pageAction.show(sender.tab.id);
    }
});






//this function is used to load the default tab of the collection
window.onload = function () {
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
  
  //this function is used to listen to the onclick of the save to collection button
  window.addEventListener('load', function listenForCollectionAdd(event) {
    var createButton = document.getElementById('collectionAddButton');
    createButton.addEventListener('click', function () { saveCollection(); });
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
  
  
  //this function specifies what to do when the save toCOllection button is hit.
  function saveCollection() {
   // chrome.tabs.create({url: 'http://google.ca'});
    chrome.tabs.query({lastFocusedWindow: true}, function(arrayOfTabs) {
         var arrayLength = arrayOfTabs.length;
      for (var i = 0; i < arrayLength; i++) {
          alert(arrayOfTabs[i].url);
          //Do something
      }
    
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  alert(time);
    }
          );
  }
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml15 .word',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.ml15',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });



    */
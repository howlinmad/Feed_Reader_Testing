<h1>Front-end Nanodegree Project 6</h1>
<h3>Feed Reader Testing</h3>

Tests are done using the Jasmine BDD testing framework. <br /><br />

Tests:<br />
1) Tests whether the feeds in the reader are defined. <br />
2) Loops through each feed and checks to see if the object has a URL defined and that the URL is not empty.<br />
3) Loop through each feed and checks to se if the object has a name defined and that the name is not empty. <br />
4) Tests that the menu element to see it is hidden by default.<br />
5) Tests that the menu changes visibility changes when the menu icon is clicked. <br />
6) Tests that the asynchronous loadFeed function is called and test for at least a single element with the .entry class. <br />
7) Tests that when a new feed is loaded, the content changes. <br /><br />

Steps to run application<br />
To start the app, open index.html in your browser.<br />

The tests were written in the feedreader.js file. The test results appears at the bottom of the index.html page.<br />

Tests that are green have passed and red have failed.<br />
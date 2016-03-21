/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {       
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined and URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                 expect(feed.url).toBeDefined();                             
                 expect(feed.url).not.toEqual("");    
             });
        });
        

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('URL name defined and URL is not empty', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).toBeGreaterThan(0);
             });
         });
    });


    /* A new test suite named "The menu" */
        describe('The menu', function() {        
        /* Test that ensures the menu element is
         * hidden by default. 
         */
          it('Menu element is hidden by default', function() {
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });          
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          
          it('Menu element changes visibility when icon is clicked', function() {
              $('.menu-icon-link').click();
              //display
              expect($('body').hasClass('menu-hidden')).toBe(false);
              //hidden
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });
    /* New test suite named "Initial Entries" */
       describe('Initial Entries', function() {        
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container. */
            beforeEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });
           it('function called and at least one entry in feed', function() {
               expect($('.feed .entry').length).toBeGreaterThan(0);
           });
       });
    /* New test suite named "New Feed Selection" */
        describe('New Feed Selection', function() { 
            var $feed1, $feed2;
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes. */
            beforeEach(function(done) {
                loadFeed(0, function() {               
                    $feed1 = $('.feed').text();
                    done();
                });
            });
            it('Feed content should change after loading.', function(done){
                loadFeed(1, function() {
                    $feed2 = $('.feed').text();
                    expect($feed2).not.toEqual($feed1);
                    done();
                });
            });
        });
        
}());

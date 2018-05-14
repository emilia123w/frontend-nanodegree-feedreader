/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* all tests are placed within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

                /* loops through each feed
                 * in the allFeeds object and ensures it has a URL defined
                 * and that the URL is not empty.
                 */
        it('has URL defined', function(){
          for (i=0;i<allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe('');
          };
        });


                  /* loops through each feed
                    * in the allFeeds object and ensures it has a name defined
                    * and that the name is not empty.
                    */
        it('has name defined', function(){
            for (i=0;i<allFeeds.length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name).not.toBe('');
            };
          });

    });


    /* new menu test suite */
    describe('The menu', function(){

        /* a test that ensures the menu element is
         * hidden by default.
         * It uses the css class that determine visibility of an element .
         */
        it('is hidden by default', function(){
          expect($('body').hasClass('menu-hidden')).toEqual(true);
        })

       /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility on click', function(){

          $('.menu-icon-link').trigger('click')
          expect($('body').hasClass('menu-hidden')).not.toBe(true)
          $('.menu-icon-link').trigger('click')
          expect($('body').hasClass('menu-hidden')).toBe(true)
        })

    })
    /* a new test suite named "Initial Entries" */

    describe ('Initial Entries',function(){
      /* a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       *
       */
       beforeEach(function(done){
         loadFeed(0, function(){
           done()
         });
       });
       it('there is at least a single entry element within feed container',function(){
         expect($('.feed .entry')).toBeDefined();
       })
    })

    /*a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function(){
      /* a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * .
       */
       var entriesFirst;
       var entriesSecond;

       beforeEach(function(done){
         $('.feed').empty();
         loadFeed(0, function(){
            entriesFirst = $('.feed').find(allFeeds.html)
           done();

         loadFeed(1, function(){
            entriesSecond = $('.feed').find(allFeeds.html)
           done();
           })
       })
     });
       it('new feed loaded is different than previous', function(){
         expect(entriesFirst).not.toBe(entriesSecond);
       })

    });


}());

$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // It tests if the URL is defined and is not empty


        it('has URL defined', function () {
            allFeeds.forEach(function (tst) {
                expect(tst.url).toBeDefined();
                expect(tst.url.length).not.toBe(0);
            });
        });


        // It tests if the name of the feed is defined and it is not empty

        it('has name defined', function () {
            allFeeds.forEach(function (tst) {
                expect(tst.name).toBeDefined();
                expect(tst.name).not.toBe(0);
            });
        });
    });


    // It tests if the menu is hidden by default and it toggles when the menu icon is clicked 

    describe('The menu', function () {

        let menu = document.querySelector('.menu-icon-link');

        it('menu element is hidden', function () {
            expect(document.body.className).toContain('menu-hidden');
        });

        it('toggles the menu on click', function () {
            menu.click();
            expect(document.body.className).not.toContain('menu-hidden');

            menu.click();
            expect(document.body.className).toContain('menu-hidden')
        });
    });

    //Testing the initian entries 

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        //Tests if there is at least 1 entry after the loadFeed function is called

        it('single entry element within feed container', function () {
            let entries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(entries).toBeGreaterThan(0);
        });
    });

    //Test the New Feed Selection

    describe('New Feed Selection', function () {
        let feedSelect;
        let newFeedSelect;
        beforeEach(function (done) {
            loadFeed(0, function () {
                feedSelect = document.querySelector('.feed').innerHTML;

                loadFeed(1, function () {
                    newFeedSelect = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        // Tests if the content is changing when new feed is loaded

        it('new feed is loaded by the loadFeed function', function () {
            expect(feedSelect).not.toBe(newFeedSelect);
        });
    });
}());
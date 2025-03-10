var page = require('webpage').create();
page.open('file://chat.html', function() {
    setTimeout(function() {
        page.render('chat.png');
        phantom.exit();
    }, 7000);
});
page.open('file://remote.html', function() {
  setTimeout(function() {
        page.render('remote.png');
        phantom.exit();
    }, 7000);
});

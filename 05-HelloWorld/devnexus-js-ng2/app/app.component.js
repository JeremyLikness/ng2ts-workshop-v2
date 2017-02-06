(function(app) {
app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: '<h1>{{title}}</h1>'
    })
    .Class({
        constructor: function() {
            console.log('Constructed!');
            this.title = 'DevNexus Rocks!'
        }
    });
})(window.app || (window.app = {}));
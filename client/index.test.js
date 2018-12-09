after(function() {
    Meteor.sendCoverage(function(){});
    Meteor.exportCoverage("coverage", function(err) {console.log(err)})
    Meteor.exportCoverage("json", function(err) {console.log(err)})
    Meteor.exportCoverage("lcovonly", function(err) {console.log(err)})
});
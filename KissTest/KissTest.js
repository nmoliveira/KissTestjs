// By: Nuno Oliveira
// https://github.com/nmoliveira/KissTestjs

// kt provides the namespace
var kt = function() {

  // Creates/Get ul element for results list
  var getResultsList = function() {
    var results = document.getElementById('testResults');
    if(!results){
      results = document.createElement('ul');
      results.setAttribute('id','testResults');
      document.getElementsByTagName('body')[0].appendChild(results);
    }
    return results;
  };

  // Tests if value is true
  // @value the test
  // @desc description of the test
  var assert = function(value, desc) {
    // get list element
    var results = getResultsList();
    // create new item for the list
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(desc));
    // add class according to the result of the test 
    li.className = value ? 'kt-passed' : 'kt-failed';
    // add item to list
    results.appendChild(li);
  };

  // Tests if @actual and @expected are equal
  // @actual current value
  // @expected expected value
  // @desc description of the test
  var isEqual = function(actual, expected, desc){
    // get list element
    var results = getResultsList();
    // create new item for the list
    var li = document.createElement('li');
    // is actual equals to expected
    if(actual == expected) {
      var desc = document.createTextNode(desc);
      li.className = 'kt-passed';  
    }
    else{
      var desc = document.createTextNode(desc + ' -> Expected: "' + expected + '" Result : "' + actual + '"');
      li.className = 'kt-failed';
    }
    li.appendChild(desc);
    // add item to list
    results.appendChild(li);
  };

  // public region
  return {
    assert: assert,
    isEqual: isEqual
  }
}();
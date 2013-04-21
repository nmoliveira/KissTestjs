// By: Nuno Oliveira
// https://github.com/nmoliveira/KissTestjs

// kt provides the namespace
var kt = function() {

  // Tests if value is true
  // @value the test
  // @desc description of the test
  var assert = function(value, desc) {
    kissTest(value, null, null, desc);
  };

  // Tests if @actual and @expected are equal
  // @actual current value
  // @expected expected value
  // @desc description of the test
  var isEqual = function(actual, expected, desc){
    kissTest(actual == expected, actual, expected, desc)
  };

  // Tests if @actual and @expected are strict equal
  // @actual current value
  // @expected expected value
  // @desc description of the test
  var isStrictEqual = function(actual, expected, desc) {
    kissTest(actual === expected, actual, expected, desc);
  };

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

  // main function
  // @result the test to run
  // @actual the current value
  // @expected the expected value
  // @desc description of the test 
  var kissTest = function(result, actual, expected, desc){
    // get list element
    var results = getResultsList();
    // create new item for the list
    var li = document.createElement('li');
    // is test passed
    if(result) {
      // add test output
      var desc = document.createTextNode(desc);
      // set class to the li element
      li.className = 'kt-passed';  
    }
    else{ 
      // if test failed
      // if actual and expected are filled
      if (actual && expected) {
        // add test output
        var desc = document.createTextNode(desc + ' -> Expected: "' + expected + '" Result : "' + actual + '"');
      }
      else{
        // add test output
        var desc = document.createTextNode(desc);
      }
      // set class to the li element
      li.className = 'kt-failed';
    }
    li.appendChild(desc);
    // add item to list
    results.appendChild(li);
  };

  // public region
  return {
    assert: assert,
    isEqual: isEqual,
    isStrictEqual: isStrictEqual
  }
}();
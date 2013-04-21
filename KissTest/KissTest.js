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
  // @value - the test
  // @desc - description of the test
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
  return {
    assert: assert
  }
}();
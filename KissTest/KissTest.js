var kt = function() {
  var getResultsList = function() {
    var results = document.getElementById('testResults');
    if(!results){
      results = document.createElement('ul');
      results.setAttribute('id','testResults');
      document.getElementsByTagName('body')[0].appendChild(results);
    }
    return results;
  };
  var assert = function(value, desc) {
    var results = getResultsList();
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(desc));
    li.className = value ? 'kt-passed' : 'kt-failed';
    results.appendChild(li);
  };
  return {
    assert: assert
  }
}();
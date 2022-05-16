import 
{ fetchData } 
from './main.js'


  
await fetch('/label/getAllLabels').then(function(response) { 
    // Convert to JSON
    return response.json();
  }).then(function(L) {
      var n = JSON.stringify(L.label_content), ul = document.createElement('ul');
      document.getElementById('labels').appendChild(ul);

      L.forEach(la =>
        {
            let li = document.createElement('li');
            li.value = la.label_content;
            ul.appendChild(li);
            li.innerHTML+=la.label_content;
        })
  })


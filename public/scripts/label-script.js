import 
{ getCurrentUser, fetchData, setCurrentReservation, getCurrentReservation, getCurrentLabel, setCurrentLabel } 
from './main.js'

const resForm = document.getElementById("reservation-form");
if(resForm) resForm.addEventListener("submit", post);

function post(e) {
  e.preventDefault();

  const info = document.getElementById("label").value;
  // const resId = getCurrentReservation().reservation_id;

  fetchData('/label/postLabel', {labelContent: info, userId: getCurrentUser().user_id}, "POST")
  .then((data) => {
    data = {labelContent: info, userId: getCurrentUser().user_id}
    setCurrentLabel(data);

    console.log(getCurrentLabel(data));
    window.location.href = "labels.html";
  })
.catch((error) => {
  const errorText = error.message;
  console.log(`Error! ${errorText}`);

});

}

await fetch('/label/getAllLabels').then(function(response) { 
    // Convert to JSON
    return response.json();
  }).then(function(L) {
      var n = JSON.stringify(L.label_content), ul = document.createElement('ul');
      document.getElementById('labels').appendChild(ul);

      L.forEach(la =>
        {
          if (la.user_id == getCurrentUser().user_id) {
            let li = document.createElement('li');
            li.value = la.label_content;
            ul.appendChild(li);
            li.innerHTML+=la.label_content;
            li.style.width = "100%";

              let input = document.createElement('input');
              input.id = "new-label";
              ul.appendChild(input);

              let delbtn = document.createElement('button');
              delbtn.id = "delete-btn" + la.label_id;
              li.appendChild(delbtn);

              let editbtn = document.createElement('button');
              editbtn.id = "edit-btn" + la.label_id;
              li.appendChild(editbtn);
            
            document.getElementById("delete-btn"+ la.label_id).addEventListener('click', deleteLabel);
            document.getElementById("edit-btn"+ la.label_id).addEventListener('click', editLabel);

            function deleteLabel() {
              fetchData('/label/deleteLabel', {labelId: la.label_id}, "DELETE")
              .then((data) => {
              if(!data.message)
                console.log(data.success)
                window.location.href = "labels.html"
              })
            }

            function editLabel(e) {
              e.preventDefault();
              const ed = document.getElementById("new-label").value;
              fetchData('/label/editLabel', {labelId: la.label_id, labelContent: ed}, "PUT")
              .then((data) => {
              if(!data.message)
                console.log(data.success);
                window.location.href = "labels.html";
              })
            }
          }
        });
      })

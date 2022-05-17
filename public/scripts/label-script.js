import 
{ getCurrentUser, fetchData, getCurrentLabel, setCurrentLabel } 
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
            ul.style.listStyle = "none";
            ul.appendChild(li);
            li.innerHTML+=la.label_content;
            li.style.width = "max-content";
            li.style.fontSize = "30px"
            li.style.marginTop = "20px"
            li.style.marginLeft = "auto"
            li.style.marginRight = "auto"
            li.style.marginBottom = "20px"
            li.style.color = "white"
            li.style.border = "3px solid black"
            li.style.backgroundColor = "blue"
            li.style.textAlign = "center"

            // new input to put edited text in
              let input = document.createElement('input');
              input.id = "new-label";
              // input style
              input.style.display = "block"
              input.style.marginLeft = "auto"
              input.style.marginRight = "auto"
              input.placeholder = "Edit message in this box:"
              ul.appendChild(input);


              // Button to edit label
              let editbtn = document.createElement('button');
              editbtn.id = "edit-btn" + la.label_id;
              editbtn.textContent = "Edit message:";
              // edit button style
              editbtn.style.display = "block"
              editbtn.style.marginLeft = "auto"
              editbtn.style.marginRight = "auto"
              editbtn.style.fontSize = "10px";
              editbtn.style.color = "black";
              editbtn.style.backgroundColor = "white"
              editbtn.style.borderTopLeftRadius = "1em 1em"
              editbtn.style.borderTopRightRadius = "1em 1em"
              editbtn.style.borderBottomLeftRadius = "1em 1em"
              editbtn.style.borderBottomRightRadius = "1em 1em"

              li.appendChild(editbtn);

              
              // Button to delete label
              let delbtn = document.createElement('button');
              delbtn.id = "delete-btn" + la.label_id;
              delbtn.textContent = "Delete message:";
              // delete button style
              delbtn.style.fontSize = "10px";
              delbtn.style.color = "black";
              delbtn.style.backgroundColor = "white"
              delbtn.style.borderTopLeftRadius = "1em 1em"
              delbtn.style.borderTopRightRadius = "1em 1em"
              delbtn.style.borderBottomLeftRadius = "1em 1em"
              delbtn.style.borderBottomRightRadius = "1em 1em"
              delbtn.style.marginLeft = "auto"
              delbtn.style.marginRight = "auto"

              li.appendChild(delbtn);

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

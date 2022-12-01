// search box
let inputtext = document.getElementById("box");
let list1 = document.querySelectorAll("#list li");


inputtext.addEventListener("keyup", function(event){
  const { value } = event.target;
  const searchQuery = value;
     
  for (const nameElement of list1){

      let name = nameElement.textContent.toLowerCase();
      if(name.startsWith(searchQuery)){
          nameElement.style.display = "block";
          } else {

              nameElement.style.display = "none";
          }
          
  }

});



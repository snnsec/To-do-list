
let inputText = document.querySelector('.inputlist');
let addButton = document.querySelector('.addbutton');
let sortButton = document.querySelector('.sortbutton');
let list = document.querySelector('.container ul');
let elmnt = document.querySelector('.container')
let deleteAll = document.querySelector('.deletebutton');
let change = true;

function checklist(){
   if(list.children.length==0){
      elmnt.style.display = 'none';
   }
}
addButton.addEventListener('click', (e) => {
   elmnt.style.display = 'block'

   e.preventDefault();

   if (inputText.value != '') {


      //new list
      let myLi = document.createElement('li')
      myLi.innerHTML = inputText.value;
      list.appendChild(myLi);


      //new delete button

      let myDeleteImg = document.createElement('span');
      myDeleteImg.innerHTML = '<img src="img/deletebutton1.svg">'
      myLi.appendChild(myDeleteImg);
   }
   
   
   let deletelist = document.querySelectorAll('span');
   for (let i = 0; i < deletelist.length; i++) {
      deletelist[i].addEventListener('click', () => {
         deletelist[i].parentElement.remove();
         checklist();

      })

   }
   inputText.value = '';
})

function deleteall() {
   elmnt.remove();
}  
deleteAll.addEventListener('click', deleteall);
//sort func
function sortList() { 
   let  d; 
   let h = true; 
   while (h) { 
     h = false; 
     let b = document.querySelectorAll("li") 
     for (i = 0; i < (b.length - 1); i++) { 
       d = false; 
       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) { 
         d = true; 
         break; 
       } 
     
     } 

     if (d) { 
       b[i].parentNode.insertBefore(b[i + 1],b[i]); 
       h = true; 
     } 

   } 

   

 }
sortButton.addEventListener('click', sortListDir);
function sortListDir() { 
   let i, 
     switching, 
     b, 
     shouldSwitch, 
     dir, 
     switchcount = 0; 
   switching = true; 
   dir = "asc"; 
   while (switching) { 
     switching = false; 
     b = list.getElementsByTagName("li"); 
     for (i = 0; i < b.length - 1; i++) { 
       shouldSwitch = false; 
       if (dir == "asc") { 
         if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) { 
         document.querySelector(".sortbutton").innerHTML = 
           '<img src="/img/wsortbutton2.svg"/> '; 
           shouldSwitch = true; 
           break; 
         } 
       } else if (dir == "desc") { 
         if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) { 
         document.querySelector(".sortbutton").innerHTML = 
           '<img src="/img/wsortbutton1.svg" class="sort-icon">'; 
           shouldSwitch = true; 
           break; 
         } 
       } 
     } 
     if (shouldSwitch) { 
       b[i].parentNode.insertBefore(b[i + 1], b[i]); 
       switching = true; 
       switchcount++; 
     } else { 
       if (switchcount == 0 && dir == "asc") { 
         dir = "desc"; 
         switching = true; 
       } 
     } 
   } 
 }
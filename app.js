var myArr=[] ;
var budget = 0;
var SNo  = 1;
function getData(){
    var amount = document.getElementById("budget").value;
     budget=amount;
    console.log(budget)
    document.getElementById("btn").setAttribute("disabled",true)
}

function viewData()
{
    document.getElementById("table-expense").lastElementChild.innerHTML = "";
    var tbody= document.getElementById("table-expense").lastElementChild;
    console.log(tbody)
    var result = "";
    myArr.forEach(element => {
        result += "<tr><td>" + element.Title + " <br> " + element.Description +"</td><td>" + element.Amount + "/ Remaining"+ parseFloat(budget - element.Amount) +"</td><td><button id='edit'>Edit</button><button id='delete'>Delete</button></td></tr>";

    });

    tbody.innerHTML = result;
}

function setData(){
    var expense=document.getElementById("expense").value;
    var date=document.getElementById("date").value;
    var amount=document.getElementById("amount").value;
    var discription=document.getElementById("discription").value;
    var list = {
        "Date" : date,
        "Amount" : amount,
        "Title" : expense,
        "Description" : discription,
        "ID": SNo,
    }
    myArr.push(list);
    console.log(myArr);
    SNo = SNo + 1;
    viewData();
}

// document.getElementById("table-expense").lastElementChild.addEventListener("click", function(e){
//     var tr = e.target.parentNode.parentNode.remove();
    
// })
document.addEventListener('DOMContentLoaded', function() {
    var parentElement = document.getElementById('table-expense');
  
    parentElement.addEventListener('click', function(event) {
      var target = event.target;
      if (target.id == 'edit') {
        prompt("edit text")
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var parentElement = document.getElementById('table-expense');
  
    parentElement.addEventListener('click', function(event) {
      var target = event.target;
      if (target.id == 'delete') {
        var tr=event.target.parentNode.parentNode.remove();
      }
    });
  });












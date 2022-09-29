let emp = JSON.parse(employee) ;

console.table(emp);

for (let emp1 of emp){
    document.getElementById("contain").innerHTML += ("ID =" + " " + emp1.Unique_ID +  "  <br>"
     + "The first name : "+emp1.First_Name + " <br>"
     + "The last name : " + emp1.Last_Name + " <br>"
     + "E-Mail adress : " + emp1.Email_address + " <br>" 
     + "The job is : "  + ""+emp1.Job_Title + " " 
     + " Salary : "   + emp1.Salary + " " 
     + "<hr>") ;
    // console.log("The First Name : " + emp1.First_Name );
}
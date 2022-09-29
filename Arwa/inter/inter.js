let emp = JSON.parse(employee) ;

console.table(emp);

for (let emp1 of emp){
    document.getElementById("data").innerHTML += `<tr>
        <th>${emp1.Unique_ID}</th>
        <td>${emp1.First_Name}</td>
        <td>${emp1.Last_Name}</td>
        <td>${emp1.Email_address}</td>
        <td>${emp1.Job_Title}</td>
        <td>${emp1.Salary}</td>

       </tr>`
    //     "ID =" + " " + emp1.Unique_ID +  "  <br>"
    //  + "The first name : "+emp1.First_Name + " <br>"
    //  + "The last name : " + emp1.Last_Name + " <br>"
    //  + "E-Mail adress : " + emp1.Email_address + " <br>" 
    //  + "The job is : "  + ""+emp1.Job_Title + " " 
    //  + " Salary : "   + emp1.Salary + " " 
    //  + "<hr>"
    // console.log("The First Name : " + emp1.First_Name );
}
let employees = JSON.parse(employeesjson)

for(let employee of employees){
    document.getElementById("dtable").innerHTML += `
        <tbody>
            <tr>
            <td>${employee.uid}</td>
            <td>${employee.fname}</td>
            <td>${employee.lname}</td>
            <td>${employee.email}</td>
            <td>${employee.job}</td>
            <td>${employee.Salary}</td>
            </tr>
        </tbody>`;
}






function addEducation(){
    let table = document.getElementById('educationTable');
    let row = table.insertRow();
    let periodCell = row.insertCell(0);
    let institutionCell = row.insertCell(1);
    let certificationCell = row.insertCell(2);

    periodCell.innerHTML = '<input type="text" placeholder="Period of study">';
    institutionCell.innerHTML = '<input type="text" placeholder="Institution">';
    certificationCell.innerHTML = '<input type="text" placeholder="Certification">';
}

function sendDetails() {
    let myName = document.getElementById("name").value;
    let myContact = document.getElementById("contact").value;
    let myEmail = document.getElementById("email").value;
    let myAddress = document.getElementById("address").value;
    let checking = document.getElementsByClassName("checkskill");
    // for (let check in checking) {
    //     if (check.checked) {
    //         localStorage.getItem("skill", checking);
    //     }
    // }
    console.log(checking);
    

    localStorage.setItem("name", myName);
    localStorage.setItem("contact", myContact);
    localStorage.setItem("email", myEmail);
    localStorage.setItem("address", myAddress);
    window.location.href = "index.html";
}






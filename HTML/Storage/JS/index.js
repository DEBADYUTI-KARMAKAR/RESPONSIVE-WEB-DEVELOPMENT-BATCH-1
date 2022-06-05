function whenClick(){
    
    let name = document.getElementById('name').value;
    localStorage.setItem('Name',name);


    
    localStorage.getItem('name');

    console.log(name);
    
}
function validate(){
    let v = document.forms["frm"]["nm"].value;
    if (v == "") {
        alert("Enter name");
        return false;
    } else{
        alert("hii")
    }
}

function show(){
    let local = localStorage.getItem('Name');
    document.write(local); 
}


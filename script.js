function yourName() {
    var str1 = "First name Steven";
    var name1 = /steven/i;
    var str2 = "Last name Jones";
    var name2 = /jones/i;
    var firstname = str1.match(name1); document.getElementById("fname").innerHTML = firstname;
    var lastname = str2.match(name2); document.getElementById("lname").innerHTML = lastname;
}


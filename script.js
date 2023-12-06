function calc(){
    console.log(studentname.value, biology.value, physics.value, chemistry.value, mathematics.value, english.value, geography.value, studentID.value);

    if(studentname.value == ''&& biology.value == '' && physics.value == '' && chemistry.value == '' && mathematics.value == ''&& english.value == ''&& geography.value == ''&& studentID.value == '' ) {
        show.style.display="block"
    } 
    else{
        var confirmation = confirm("Are you sure you want to proceed")
        if (confirmation == true) {
            var sum = Number(biology.value) + Number(mathematics.value) + Number(physics.value) + Number(chemistry.value) + Number(english.value) + Number(geography.value)
            var cumulate = ((sum/600) * 100).toFixed(2)
            
            
            if(cumulate >= 0 && cumulate < 40){
                intro.innerHTML = "Welcome " +  document.getElementById('studentname').value
                compliment.innerHTML = "It is my utmodt pleasure to sincerely appreciate your efforts for this semester. please, find below how you have performed. Best regards 😘"
                result.innerHTML = "Your score is " + cumulate + "%. unfortunately , you will not be progressing to the next level. I will suggest you reconsider your intent to study in our noble institution. Thank you best wishes"
            } 
            else if (cumulate >= 40 && cumulate < 60) {
                result.innerHTML = "Your score is " + cumulate + "%. well done , however your result is not quite impressive but it would be good if you can improve more in the next session." + studentname.value
            }
            show.style.display="none"
            document.getElementById('studentname').value = ""
            document.getElementById('studentID').value = ""
            document.getElementById('biology').value = ""
            document.getElementById('chemistry').value = ""
            document.getElementById('english').value = ""
            document.getElementById('physics').value = ""
            document.getElementById('geography').value = ""
            document.getElementById('mathematics').value = ""
        }
    }
}
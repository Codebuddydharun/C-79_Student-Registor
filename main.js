student_array=[];

function submit(){
    var student_1=document.getElementById("student1").value;
    var student_2=document.getElementById("student2").value;
    var student_3=document.getElementById("student3").value;
    var student_4=document.getElementById("student4").value;
    student_array.push(student_1);
    student_array.push(student_2);
    student_array.push(student_3);
    student_array.push(student_4);
    document.getElementById("display_names").innerHTML=student_array;
    document.getElementById("submit").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    document.getElementById("display_names").innerHTML=student_array;
}
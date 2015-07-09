function Hint() {
    if(document.getElementById("clas").value === "") {
        alert("班级不能为空");
        return false;
    }
    if(document.getElementById("studentId").value === "") {
        alert("学号不能为空");
        return false;
    }
    if(document.getElementById("name").value === "") {
        alert("姓名不能为空");
        return false;
    }
    return true;
}
module.exports = Hint;


const submit= ()=>{
	var name1= document.querySelector("#name1").value
	var name2= document.querySelector("#name2").value
	window.localStorage.setItem("name1", name1)
	window.localStorage.setItem("name2", name2)
	window.location.assign("heart.html")
}

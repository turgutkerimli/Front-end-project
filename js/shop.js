var array = []
var i = 1

$(".section2 a").on("click", function (event) {
    event.preventDefault()
    var obj = {
        id: "",
        image: "",
        name: "",
        price: ""
    }
    obj.id = i
    obj.image = $(this).find("img").attr("src")
    obj.name = $(this).find("h2").text()
    obj.price = $(this).find("ins h3").text()
    array.push(obj)

    window.localStorage.setItem("object", JSON.stringify(array))
})
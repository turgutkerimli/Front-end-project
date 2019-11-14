var data = JSON.parse(localStorage.getItem("object"))
$(window).on("load", function (event) {
    event.preventDefault()
    if (data.length > 0) {
             
        for (let i = 0; i < data.length; i++) {
           
            var newItemTags = "<div class='col-lg-12 col-md-6 col-sm-6 col-12'>" 
            + "<div class='row'>" + 
                "<div class='col-lg-3 col-md-12'>" + 
                  "<img src='" + data[i].image + "'>" + "</div>" + 
                  "<div class='col-lg-7 col-md-12'>" + "<h2>" + data[i].name + "</h2>" + "<h3>" + data[i].price + "</h3>" + "<input type='number' value='1'>" + "</div>"
            +   "<div class='col-lg-2 col-md-12'>" + "<h4>" + data[i].price +  "</h4>" + "</div>" + 
                "</div>" + 
            "</div>"
            // console.log($(this).find("input").attr("value"))
            
            $(".section1>div").append(newItemTags)
        }
    }       
    else {
        var empty = "<h2>" + "Your Shopping Card Is Empty" + "</h2>"
        $(".section1>div").append(empty)
        
    }
    
})



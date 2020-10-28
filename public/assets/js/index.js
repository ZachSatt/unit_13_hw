console.log("Alive");
$(document).on("click", ".devour-button", function(e) {
    console.log(e);
    console.log("click");
    $.ajax({
        url: "/burgers/update/" + e.target.id,
        method: "PUT",
        data: { "devoured": 1 }
    }).done(function() {

    });
});
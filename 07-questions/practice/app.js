//using selectors inside the element
// traversing the dom
$(() => {
    $(".minus-icon").hide()
    $(".question-text").hide()

    $(".question-btn").on("click", function(){
        console.log(this)
        $(this).parent().parent().find(".question-text").toggle()
        $(this).find(".plus-icon").toggle()
        $(this).find(".minus-icon").toggle()
    })
})
$(function() {

    $("#infographic-cup").height(window.innerHeight - 300);
    $(window).resize(function() {
        $("#infographic-cup").height(window.innerHeight - 300);
    });

    $(".option-item").on("click", function() {
        // change selection
        $(this).addClass("selected")
        .siblings().removeClass("selected");

        // build new string
        var order = "";
        $(".option-item.selected span").each(function() {
            if ($(this).html() != "Default") {
                order += $(this).html() + " ";
            }
        })
        $(".order-preview").html(order.trim());

        // animate infographic
        $("#infographic").removeClass();
        $(".option-item.selected").each(function() {
            $("#infographic").addClass($(this).data("class"));
        })

        clearTimeout(window.showNextTab);
        window.showNextTab = setTimeout(function() {
            var $nextTab = $("ul.tabs .tab a.active").closest(".tab").next().children("a");
            $("ul.tabs").tabs("select_tab", $nextTab.attr("href").substr(1));
        }, 300);
    });

    $(".tabs").click(function() { clearTimeout(window.showNextTab); });
});
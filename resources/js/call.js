/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function checnum(a) {
    for (var b = a.value, c = 0; c < b.length; c++) {
        var e = b[c];
        if (isNaN(b) || " " == e) b = b.substring(0, b.length - 1), a.value = b
    }
}

function settoday() {
    var a = new Date,
        b = a.getFullYear;
    b ? b = a.getFullYear() : (b = a.getYear(), 200 > b && (b += 1900));
    $("#DD").val(a.getDate());
    $("#DM").val(a.getMonth() + 1);
    $("#DY").val(b)
}
$(document).ready(function() {
    var a = document.URL,
        a = a.replace(/^.*\/|\.[^.]*$/g, ""),
        a = a.split("-");
    "" != a[0] && $("#Religious option[text=" + a[0] + "]").attr("selected", "selected")
});

function calculate_star() {
    var a = parseFloat($("#DD").val()),
        b = parseFloat($("#DY").val()),
        c = parseFloat($("#TH").val()),
        e = parseFloat($("#TM").val()),
        f = parseFloat($("#TS").val()),
        g = $("#TCS").val(),
        d = parseFloat($("#TC").val());
    if (0 >= a || 31 < a || isNaN(a)) return alert("Enter valid date"), 0;
    if (0 >= b || 1E3 >= b || isNaN(b)) return alert("Enter valid year"), 0;
    if (0 >= c || 13 <= c || isNaN(c)) return alert("Enter valid hours"), 0;
    if (0 > e || 60 <= e) return alert("Enter valid minutes"), 0;
    if (0 > f || 60 <= f) return alert("Enter valid seconds"),
        0;
    if ("1" == g && (d *= -1, -12 > d || isNaN(d))) return alert("Time Zone GMT negative value between -0 and -12"), 0;
    if ("0" == g && (14 < d || isNaN(d))) return alert("Time Zone GMT positive value between 0 and 14"), 0;
    calculate()
}

function alert(a) {
    $("#dynErrDisp").show();
    $("#dynErrDisp").html(a)
}
$(document).ready(function() {
    closeModal()
});
document.addEventListener("DOMContentLoaded", function(event) {
    hide_loader();
});
$("#home_search_form").submit(function(a) {
    a.preventDefault();
    show_loader();
    a = $("#home_type_word").val();
    "" != a && (document.location = "https://www.nameslook.com/search/" + $.trim(a) + "/?utm_source=nameslook&utm_medium=search&utm_campaign=home")
});
$("#header_search_form").submit(function(a) {
    a.preventDefault();
    show_loader();
    a = $("#header_type_word").val();
    "" != a && (document.location = "https://www.nameslook.com/search/" + $.trim(a) + "/?utm_source=nameslook&utm_medium=search&utm_campaign=header")
});
$("#tool_form").submit(function(a) {
    a.preventDefault();
    $("#result_div").text("Loading Names...Please Wait..");
    a = $(this).serialize();
    var b = $("#ajax_file").val();
    $.ajax({
        type: "POST",
        url: "https://www.nameslook.com/?page=" + b + "&ajax_request=1&folder=tools",
        data: a,
        success: function(a) {
            $("#result_div").html(a)
        }
    })
});
$(".filter_form").submit(function(a) {
    a.preventDefault();
    a = $(this).attr("data-type");
    var b = $("#" + a + "_value").val(),
        c = $("input[name='" + a + "_gender']:checked").val();
    document.location = "https://www.nameslook.com/" + a + "/" + b + "/" + c + "/"
});
$(".numerology_form").submit(function(a) {
    a.preventDefault();
    var b = $(this).attr("data-type");
    a = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "https://www.nameslook.com/?page=numerology_calculator&ajax_request=1&folder=tools",
        data: a,
        success: function(a) {
            $("#" + b + "_result_div").html(a)
        }
    })
});
$(".action-heart").click(function(a) {
    a.preventDefault();
    var b = "heart-small";
    $(this).hasClass("heart-small") || (b = "heart-big");
    var c = $(this).attr("data-id");
    a = $(this).attr("data-action");
    $.ajax({
        type: "POST",
        url: "https://www.nameslook.com/?page=wishlist&ajax_request=1",
        data: {
            name_id: c,
            action_type: a
        },
        success: function(a) {
            "1" == a ? $("#favor" + c).attr({
                "class": "fa fa-heart wishlist-heart " + b + " action-heart",
                "data-action": "remove"
            }) : $("#favor" + c).attr({
                "class": "fa fa-heart-o wishlist-heart " + b + " action-heart",
                "data-action": "add"
            })
        }
    })
});
$(".view-edit").click(function() {
    var a = $(this).attr("data-id");
    $(".e_" + a).hide();
    $(".n_" + a).show()
});
$(".view-close").click(function() {
    var a = $(this).attr("data-id");
    $(".e_" + a).show();
    $(".n_" + a).hide()
});
$(".view-update").click(function() {
    $(this).text("Updating...");
    var a = $(this).attr("data-id"),
        b = $("#" + a + "_value").val(),
        c = $("#name_id").val(),
        d = $("#name_url").val();
    $.ajax({
        type: "POST",
        url: "https://www.nameslook.com/?page=ajax_add&ajax_request=1",
        data: {
            column: a,
            value: b,
            name_id: c,
            name_url: d,
            type: "view_update"
        },
        success: function(b) {
            $("button[data-id='" + a + "']").text("Updated!")
        }
    })
});

function add_comment(a) {
    $("#comment_btn").text("Adding...");
    var name_url = $("#name_url").val();
    var b = $("#name_url").val(),
        c = $("#comment_name").val(),
        d = $("#comment_email").val(),
        e = $("#user_comment").val();
    $("#comment_name,#comment_email,#user_comment").val("");
    "" != e && "" != c && $.ajax({
        type: "POST",
        url: "https://www.nameslook.com/?page=ajax_add&ajax_request=1",
        data: {
            username: c,
            email: d,
            comment: e,
            name_id: a,
            type: "comment",
            name: b,
            name_url: name_url
        },
        success: function(a) {
            $("#comment_btn").text("Post");
            alert("Posted. Thank You!")
        }
    })
}

function add_people(a) {
    $("#people_btn").text("Submitting...");
    var b = $("#name_url").val(),
        c = $("#apemail").val(),
        d = $("#apperson_name").val(),
        e = $("#approfession_name").val(),
        f = $("#apcountry").val(),
        g = $("#apcity").val(),
        h = $("#apabout").val();
    $("#apemail,#approfession_name,#apcountry,#apabout").val("");
    "" != d && "" != e && $.ajax({
        type: "POST",
        url: "https://www.nameslook.com/?page=ajax_add&ajax_request=1",
        data: {
            apcity: g,
            apcountry: f,
            apabout: h,
            apemail: c,
            apperson_name: d,
            approfession_name: e,
            name_id: a,
            type: "people_add",
            name: b
        },
        success: function(a) {
            $("#people_btn").text("Submit");
            alert("Submitted. Thank You!")
        }
    })
}

function apply_filter(a, b) {
    var c = $("#pre_tag_url").val(),
        d = $("#pre_gender").val(),
        e = $("#pre_letter").val();
    "gender" == a && (d = b);
    "tag_url" == a && (c = b);
    "letter" == a && (e = b);
    document.location = "https://www.nameslook.com/" + ("all" == c ? "all" == e ? d + "/starts-with-a/" : d + "/starts-with-" + e + "/" : "all" == e ? c + "/" + d + "/" : c + "/" + d + "/starts-with-" + e + "/")
}

function apply_names_filter(a) {
    var b = $("#pre_value").val(),
        c = $("#pre_value_type").val();
    document.location = "https://www.nameslook.com/" + (c + "/" + b + "/" + a + "/")
}
$("input[name='comment_source']").click(function() {
    "1" == $("input[name='comment_source']:checked").val() ? ($("#nicenames_comment_block").hide(), $("#facebook_comment_block").show()) : ($("#facebook_comment_block").hide(), $("#nicenames_comment_block").show())
});
document.onscroll = function() {
    if ($(window).scrollTop() > $('.logo_header').height()) {
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
};

function show_loader() {
    document.getElementById("pling").style.display = "block"
}

function hide_loader() {
    document.getElementById("pling").style.display = "none"
}
$("a").click(function() {
    "#" != $(this).attr("href") && "" != $(this).attr("href") && show_loader()
});
window.onbeforeunload = function() {
    show_loader()
};
$('#uploadbutton').click(function() {
    $('#audio_file').focus().trigger('click');
});
$('body').click(function() {
    hide_loader();
});
$("#audio_file").change(function() {
    var formData = new FormData($("#recorder")[0]);
    $.ajax({
        url: 'https://www.nameslook.com/?page=recorder&ajax_request=1',
        type: 'POST',
        data: formData,
        async: false,
        success: function(data) {
            alert(data);
        },
        cache: false,
        contentType: false,
        processData: false
    });
});
$(".play_audio").click(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', $(this).attr('data-id'));
    audioElement.play();
});
$("div[name='poll']").click(function() {
    var poll_id = $(this).attr('data-id');
    var answer = $(this).attr('value');
    $("#poll_block_" + poll_id).html('Please Wait..');
    $.ajax({
        url: 'https://www.nameslook.com/?page=ajax_add&ajax_request=1',
        type: 'POST',
        data: {
            type: 'poll',
            poll_id: poll_id,
            answer: answer
        },
        success: function(data) {
            $("#poll_block_" + poll_id).html(data);
        }
    });
});
setTimeout(function() {
    $(".loader_nl").html($("#fb_likegadget_code").val());
}, 12000);
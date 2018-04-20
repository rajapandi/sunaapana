


$(document).ready(function () {

    $("#basketClose").click(function () {
        $("#basketContainer").hide();
        $("#c_wrp").show();
        setc("BabyBasket", "close");

    });


    $("#crtbtn").click(function () {
        $("#c_wrp").hide();
        $("#basketContainer").show();
        setc("BabyBasket", "open");
    });




    $(".basket-add-img a img").click(function () {
        var _this = $(this);
        var b = $(this).attr("data-uid");
        var m = _this.attr('data-m');
        var n = _this.attr('data-n');
        var g = _this.attr('data-g');
        var itemName = $(this).closest('tr').find(".name_link").text();

        $("#c_wrp").hide();
        $("#basketContainer").show();
        setc("BabyBasket", "open");


        var ImgWrapSel = "#babynameWpId_" + b;
        var animateImgWrap = $(ImgWrapSel);

        var imgtodrag = $(this).closest('tr').find(".abs > img").eq(0);

        var itemId = "productID_" + b;
        var itemIdDel = "deleteProductID_" + b;
        var thumbSrc = base_url + "resources/img/flower-sm.png";
        var delSrc = base_url + "resources/img/delete.png";

        var newitem = '<li id="' + itemId + '">';
        newitem += '<img src="' + thumbSrc + '" />';
        newitem += '<a href="#">' + itemName + '</a>';
        newitem += '<input type="hidden" name="name[]" value="'+itemName+'">';
        newitem += '<input type="hidden" name="nameid[]" value="'+b+'">';
        newitem += '<input type="hidden" name="n[]" value="'+n+'">';
        newitem += '<input type="hidden" name="g[]" value="'+g+'">';
        newitem += '<input type="hidden" name="m[]" value="'+m+'">';
        newitem += '<a href="#" onClick="return false;" class="rmBask">';
        newitem += '<img src="' + delSrc + '" id="' + itemIdDel + '"/>';
        newitem += '</a></li>';



        var basketItemSel = "#productID_" + b;
        var basketItem = $(basketItemSel);
        var lcItemKey = "lci_" + b;

        var addMeta = [{
                id: b,
                g: g,
                n: n,
                m: m
            }];
        var addLcItem = {
            lcItemKey: addMeta
        };

        var d = animateImgWrap.offset().left;
        var e = animateImgWrap.offset().top;

        var f = $("#basketContainer").offset().left;
        var g = $("#basketContainer").offset().top

        var h = f - d;
        var i = g - e;

        var j = animateImgWrap.width() / 3;
        var k = animateImgWrap.height() / 3;

        var cart = $('#basketTitleWrap > img');
        var imgtodrag = $(this).closest('tr').find(".abs > img").eq(0);
        console.log(imgtodrag.length)
        if (imgtodrag) {
            var imgclone = imgtodrag.clone().prependTo($('body')).offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                    .css({
                        'opacity': '0.5',
                        'position': 'absolute',
                        'height': '150px',
                        'width': '150px',
                        'z-index': '100'
                    }).animate({
                opacity: 0.9
            }, 100)
                    .animate({
                        opacity: 0.9,
                        marginLeft: h,
                        marginTop: i,
                        width: j,
                        height: k
                    }, 1000);

            setTimeout(function () {
                //cart.effect("shake", {
                //times: 2
                //}, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).remove();

                var saltid = "tgselcPrintItem";
                var lcitem = '';
                var ItemObject ={};
                
                try {

                    lcitem = localStorage.getItem(saltid);
                    lcitem = ($.trim(lcitem) != '') ? lcitem : {};

                    ItemObject = new JSONObject(JSON.parse(lcitem));
                    //has method
                    if (ItemObject.has(lcItemKey)) {
                        //get Value of key

                    } else {
                        ItemObject.lcItemKey = addMeta;
                    }


                    


                } catch (e) {
                    localStorage.setItem(saltid, JSON.stringify(ItemObject));
                    //alert('enable local storage & cookies');
                }






                if (basketItem.length > 0) {
                    basketItem.animate({
                        opacity: 0
                    }, 500);
                    basketItem.before(newitem).remove();
                    basketItem.animate({
                        opacity: 0
                    }, 500);
                    basketItem.animate({
                        opacity: 1
                    }, 500);

                } else {
                    $("#basketItemsWrap li:first").before(newitem);
                    $("#basketItemsWrap li:first").hide();
                    $("#basketItemsWrap li:first").show("slow");

                }
                $("#slctd").html($("#basketItemsWrap li").length - 1)





            });
        }




        /*
         var d = animateImgWrap.offset().left;
         var e = animateImgWrap.offset().top;
         // if (basketItem.length > 1) {
         //var f = basketItem.offset().left;
         //var g = basketItem.offset().top
         //} else {
         var f = $("#basketTitleWrap").offset().left;
         var g = $("#basketTitleWrap").offset().top
         console.log(f+" " + g);
         // }
         var h = f - d;
         var i = g - e;
         var j = animateImgWrap.width() / 3;
         var k = animateImgWrap.height() / 3;
         console.log($(ImgWrapSel + " img").clone());
         imgtodrag.clone().prependTo(ImgWrapSel).css({
         'position': 'absolute',
         'text-align': 'center',
         'height': '256px',
         'width': '150px',
         'z-index': '100'
         }).animate({
         opacity: 0.9
         }, 100).animate({
         opacity: 0.9,
         marginLeft: h,
         marginTop: i,
         width: j,
         height: k
         }, 1200, function () {
         //$(this).remove();
         console.log('hello')
         
         
         if (basketItem.length > 0) {
         basketItem.animate({
         opacity: 0
         }, 500);
         basketItem.before(newitem).remove();
         basketItem.animate({
         opacity: 0
         }, 500);
         basketItem.animate({
         opacity: 1
         }, 500);
         
         } else {
         $("#basketItemsWrap li:first").before(newitem);
         $("#basketItemsWrap li:first").hide();
         $("#basketItemsWrap li:first").show("slow");
         
         }
         $("#slctd").html($("#basketItemsWrap li").length - 1)
         
         
         
         })*/




    });



    $(document).on('click', "#basketItemsWrap li .rmBask", function (b) {
        console.log('deleteing');
        var c = $(this).closest('li');

        c.hide("slow", function () {
            $(this).remove();
            $("#slctd").html($("#basketItemsWrap li").length - 1)
        });


    });







});

$(document).ready(function () {

    $("input[type='checkbox'], input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_minimal-orange',
        radioClass: 'iradio_square'

    });



    //number only method

    $(document).on('keypress', '.number-only', function (e) {
        if (isNaN(this.value + "" + String.fromCharCode(e.charCode)))
            return false;
    })
            .on("cut copy paste", function (e) {
                e.preventDefault();
            });
});




function technoNotify(title, message, type) {

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.clear();
    toastr[type](title, message);

}






$(document).ready(function () {


    $('.select2').select2();


    /* suitable */
    var formID = '#suitable_fm';
    $(formID).validate({
        rules: {
            dob: {
                required: true,
                validDate: true
            },
            gender: {
                required: true
            },
            father: {
                required: true
            }
        },
        messages: {
            dob: {
                required: "Enter Birth Date",
            },
            gender: {
                required: "Choose Gender",
            },
            father: {
                required: "Enter Father Name",
            }
        },
        focusInvalid: true,
        invalidHandler: function (form, validator) {
            if (!validator.numberOfInvalids())
                return;
            validator.errorList[0].element.focus();
        },
        errorElement: "span",
        errorClass: "help-block help-block-error",
        errorPlacement: function (e, r) {
            return false;
        },
        highlight: function (e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        },
        success: function (e) {
            e.closest(".form-group").removeClass("has-error")
        },
        submitHandler: function (form) {

            if ($(formID).valid() == true) {
                findMoon();
                //alert('success');
                //console.log($('#rasi').val());
                //console.log($('#rasi_en').val());

                //console.log($('#nak').val());
                //console.log($('#nak_en').val());
                $(form)[0].submit();
            }

            return false;
        }
    });
    /* suitable */






    /* numerolgy */
    var formID = '#numerology_form';
    $(formID).validate({
        rules: {
            baby_name: {
                required: true
            },
            birth_date: {
                required: true
            }
        },
        messages: {
            baby_name: {
                required: "Enter Name",
            },
            birth_date: {
                required: "Enter Birth Date",
            }
        },
        focusInvalid: true,
        invalidHandler: function (form, validator) {

            if (!validator.numberOfInvalids())
                return;


            validator.errorList[0].element.focus();

        },
        errorElement: "span",
        errorClass: "help-block help-block-error",
        errorPlacement: function (e, r) {
            return false;
        },
        highlight: function (e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        },
        success: function (e) {
            e.closest(".form-group").removeClass("has-error")

        },
        /*submitHandler: function (form) {
         
         if ($(formID).valid() == true) {
         
         $.ajax({
         type: "POST",
         url: base_url + 'numerology/find',
         data: $(form).serialize(),
         dataType: "JSON",
         success: function (data) {
         
         if (data.rs) {
         
         
         
         } else {
         
         technoNotify('', data.msg, 'error');
         
         }
         
         
         
         },
         error: function (x, y, z) {
         technoNotify('', 'Sorry something went wrong...', 'error');
         },
         beforeSend: function () {
         $('#axloader').show();
         
         },
         complete: function () {
         $('#axloader').hide();
         }
         })
         
         
         }
         return false;
         
         
         
         }*/


    });


    /** send otp */
    var formID = '#send_otp';
    $(formID).validate({
        rules: {
            mobile: {
                required: true
            }
        },
        messages: {
            mobile: {
                required: "Enter Mobile",
            }
        },
        focusInvalid: true,
        invalidHandler: function (form, validator) {

            if (!validator.numberOfInvalids())
                return;


            validator.errorList[0].element.focus();

        },
        errorElement: "span",
        errorClass: "help-block help-block-error",
        errorPlacement: function (e, r) {
            return false;

        },
        highlight: function (e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        },
        success: function (e) {
            e.closest(".form-group").removeClass("has-error")

        },
        submitHandler: function (form) {

            if ($(formID).valid() == true) {

                $.ajax({
                    type: "POST",
                    url: base_url + 'home/send_otp',
                    data: $(form).serialize(),
                    dataType: "JSON",
                    success: function (data) {

                        if (data.rs) {

                            $('#otp_send_wrap').remove();
                            $('#otp_verify_wrap').show();

                        } else {

                            technoNotify('', data.msg, 'error');

                        }



                    },
                    error: function (x, y, z) {
                        technoNotify('', 'Sorry something went wrong...', 'error');
                    },
                    beforeSend: function () {
                        $('#axloader').show();

                    },
                    complete: function () {
                        $('#axloader').hide();
                    }
                })


            }
            return false;
        }


    });
    /** send otp */




    /** check otp */
    var formID = '#check_otp';
    $(formID).validate({
        rules: {
            otp_token: {
                required: true
            }
        },
        otp_token: {
            mobile: {
                required: "Enter OTP",
            }
        },
        focusInvalid: true,
        invalidHandler: function (form, validator) {

            if (!validator.numberOfInvalids())
                return;


            validator.errorList[0].element.focus();

        },
        errorElement: "span",
        errorClass: "help-block help-block-error",
        errorPlacement: function (e, r) {
            return false;

        },
        highlight: function (e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        },
        success: function (e) {
            e.closest(".form-group").removeClass("has-error")

        },
        submitHandler: function (form) {

            if ($(formID).valid() == true) {

                $.ajax({
                    type: "POST",
                    url: base_url + 'home/check_reg_otp',
                    data: $(form).serialize(),
                    dataType: "JSON",
                    success: function (data) {

                        if (data.rs) {

                            $('#otp_modal').modal('hide');
                            window.location = base_url + "baby/add";

                        } else {

                            technoNotify('', data.msg, 'error');

                        }



                    },
                    error: function (x, y, z) {
                        technoNotify('', 'Sorry something went wrong...', 'error');
                    },
                    beforeSend: function () {
                        $('#axloader').show();

                    },
                    complete: function () {
                        $('#axloader').hide();
                    }
                })


            }
            return false;
        }


    });
    /** send otp */



    /* resend otp */

    $(document).on('click', '#resend_otp_anc', function (e) {
        e.preventDefault();


        $.ajax({
            type: "POST",
            url: base_url + 'home/resend_otp',
            data: {cf: true},
            dataType: "JSON",
            success: function (data) {

                if (data.rs) {

                    technoNotify('', 'OTP has sent to your mobile.', 'success');

                } else {
                    technoNotify('', data.msg, 'error');
                }



            },
            error: function (x, y, z) {

                technoNotify('', 'Sorry something went wrong...', 'error');
            },
            beforeSend: function () {
                $('#axloader').show();

            },
            complete: function () {
                $('#axloader').hide();
            }
        })


    });


    /* name add */

    $('#add_name_form').validate({
        rules: {
            baby_name: {
                required: true,
                remote:
                        {
                            url: base_url + "baby/exists",
                            type: "post",
                            data:
                                    {
                                        data: function () {
                                            return $('#baby_name').val();
                                        },
                                    }
                        },
            },
            gender: {
                required: true,
            },
            tags: {
                required: true,
            },
            'meaning[]': {
                required: true,
            },
        },
        messages: {
            baby_name: {
                required: " Enter the baby names",
                remote: "This Baby Name already exists.",
            },
            gender: {
                required: " select the gender",
            },
            tags: {
                required: "Please enter Tags",
            },
            'meaning[]': {
                required: "Please enter meanings",
            },
        },
        focusInvalid: false,
        errorElement: "span",
        errorClass: "help-block help-block-error",
        errorPlacement: function (e, r) {
            r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "gender")
                error.insertAfter("#gender_err");
            else
                error.insertAfter(element);
        },
                highlight: function (e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
        unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        },
        success: function (e) {
            e.closest(".form-group").removeClass("has-error")

        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },
                submitHandler: function (form) {
                    var formData = new FormData($("#add_name_form")[0]);

                    $.ajax({
                        type: "POST",
                        url: base_url + 'baby/insert_baby_name',
                        data: formData,
                        dataType: "JSON",
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (data) {

                            if (data.rs) {

                                if (data.reset) {
                                    var elem = $('#add_name_form .form-group');
                                    $("#add_name_form")[0].reset();
                                    $('#items-row tr').not(':first').remove();


                                } else {
                                    window.location = base_url;
                                }



                            } else {

                                technoNotify('', 'cannot add name...', 'error');
                            }

                        },
                        error: function (x, y, z) {
                            technoNotify('', 'Sorry something went wrong...', 'error');
                        },
                        beforeSend: function () {
                            $('#axloader').show();
                        },
                        complete: function () {
                            $('#axloader').hide();
                        }
                    })



                    return false;

                }

    });

    /* name add */




    /* Baby Name edit form */

    $('#baby_name_edit_form').validate({
        rules: {
            baby_name: {
                required: true,
                /*	remote: 
                 {
                 url: base_url+"names/exists",
                 type: "post",
                 data: 
                 
                 {
                 data: function(){ return $('#baby_name').val(); },
                 id: function(){ return $('#id').val(); },
                 
                 }
                 },	*/
            },
            gender: {
                required: true,
            },
            tags: {
                required: true,
            },
            'meaning[]': {
                required: true,
            },
        },
        messages: {
            baby_name: {
                required: "Please enter baby Name ",
                //remote: 'This baby Name already exists',				
            },
            gender: {
                required: "Please Select Gender",
            },
            tags: {
                required: "Please Enter Tags",
            },
            'meaning[]': {
                required: "Please Enter Meanings",
            },
        },
        focusInvalid: false,
        errorElement: "span",
        errorClass: "help-block help-block-error",
        errorPlacement: function (e, r) {

            r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
        },
        highlight: function (e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        },
        success: function (e) {
            e.closest(".form-group").removeClass("has-error")

        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "dobday" || element.attr("name") == "dobmonth" || element.attr("name") == "dobyear")
                error.insertAfter("#DOBYEAR");
            else
                error.insertAfter(element);
        },
                submitHandler: function (form) {
                    var formData = new FormData($("#baby_name_edit_form")[0]);



                    $.ajax({
                        type: "POST",
                        url: base_url + 'names/edit_baby_name',
                        data: formData,
                        dataType: "JSON",
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            //console.log(data);
                            //technoNotify('success', 'i m a toaster', 'success');	
                            if (data.rs) {
                                /* technoNotify('', 'Baby Details updated..', 'success'); */

                            } else {
                                technoNotify('', 'Updating failed..', 'error');

                            }
                            window.location = base_url + 'names';
                        },
                        error: function (x, y, z) {
                            console.log(x);
                            console.log(y);
                            console.log(z);
                            technoNotify('', 'Sorry something went wrong...', 'error');
                        },
                        beforeSend: function () {
                            $('#axloader').show();
                        },
                        complete: function () {
                            $('#axloader').hide();
                        }
                    })

                    return false;
                }


    });

    /* baby name edit form end*/


    /* delete row dynamically */
    $(document).on('click', '.dodelete', function () {
        if ($('.edit-table #items-row').find('tr').length > 1) {
            $(this).parents('tr').remove();
        } else {
            technoNotify('', 'You can not delete all items', 'warning');
        }

    });


    $(document).on('click', '.delete', function () {

        var url = $(this).data('url');
        var id = $(this).data('id');
        var value = $(this).data('value');
// value = str.replace("/ ", value);
        var label = $(this).data('label');

        var elem = $(this).parents('tr');


//alert(elem);
//console.log(elem);


        $.ajax({
            type: "POST",
            url: url,
            data: {id: id, msg: value},
            dataType: "JSON",
            /*	cache:false,
             contentType: false,
             processData: false,  */
            success: function (data) {
                /*	console.log(data);  
                 console.log(value);   */
                /*	 var msg = data.label+' deleted'; */
                /* if(data.rs){	
                 technoNotify('',  value , 'success');
                 
                 elem.remove();
                 
                 
                 }else{		
                 technoNotify('','Deleting failed..', 'error');
                 
                 } */
                window.location.reload();
                /* window.location = base_url+'setting/religion'; */
            },
            error: function (x, y, z) {
                console.log(x);
                console.log(y);
                console.log(z);
                technoNotify('', 'Sorry something went wrong...', 'error');
            },
            beforeSend: function () {
                $('#axloader').show();
            },
            complete: function () {
                $('#axloader').hide();
            }
        })

    });


    $(document).on('click', '.addrow', function () {


        var elem = $('#items-row').find('tr:first').clone();
        var input_elem = $('#items-row').find('tr:last');

        var val = input_elem.find('textarea').val();

        if (checkDuplicates()) {
            technoNotify('', 'Check duplicates', 'error');
        } else {
            if (val == '') {
                technoNotify('', 'Fill the field', 'error');
            } else {


                $('#items-row').append(elem);

                elem.find('textarea').val('').focus();
            }
        }


        /*  if(checkDuplicates()){
         alert('dublicate')
         // technoNotify('', ' check duplicates', 'error'); 
         }else if(val ==''){
         technoNotify('',  'fill the field ', 'error');
         }
         else{
         elem.find('input').val('');  
         $('#items-row').append(elem);	
         }	*/



    });


    /*check duplicate rp*/

    function checkDuplicates() {
        // get all input elements
        var $elems = $('.check_unique');

        // we store the inputs value inside this array
        var values = [];
        // return this
        var isDuplicated = false;
        // loop through elements
        $elems.each(function () {
            //If value is empty then move to the next iteration.

            if (!this.value)
                return true;
            //If the stored array has this value, break from the each method
            if (values.indexOf($.trim(this.value).toUpperCase()) !== -1) {
                isDuplicated = true;
                return false;
            }
            // store the value
            values.push($.trim(this.value).toUpperCase());
        });

        return isDuplicated;
    }

    $(document).on('click', '.addrowmean', function () {

        var elem = $('<tr> <td><div class="form-group label-floating is-empty"> <label class="control-label">Meaning</label> <input type="text" id="meaning" name="meaning[]" class="form-control check_unique" value="Family Name" required> <span class="material-input"></span> </div></td> <td class=" text-right"><a title="Remove row" href="javascript:;" class="dodelete1 btn red btn-just-icon  btn-reddit"><i class="fa fa-trash-o"></i></a></td> </tr>');
        var input_elem = $('#items-rowadd').find('tr:last');
        var val = input_elem.find('input').val();

        if (checkDuplicates()) {
            technoNotify('', 'Check duplicates', 'error');
        } else {
            if (val == '') {
                technoNotify('', 'Fill the field', 'error');
            } else {

                $('#items-rowadd').append(elem);

                elem.find('input').val('').focus();
            }
        }

    });


    /* delete row dynamically */
    $(document).on('click', '.dodelete1', function () {
        if ($('.edit-table #items-rowadd').find('tr').length > 1) {
            $(this).parents('tr').remove();
        } else {
            technoNotify('', 'You can not delete all items', 'warning');
        }


        // console.log();alert();
        var id = $(this).data("id");
        console.log(id);
        $.ajax({
            type: "POST",
            url: base_url + 'names/status_change',
            data: {id: id},
            dataType: "JSON",
            success: function (data) {
                //	console.log(data)

                // technoNotify('',  data.msg , data.err);
                window.location.reload();
            },
            error: function (x, y, z) {
                console.log(x);
                console.log(y);
                console.log(z);

            },
            beforeSend: function () {
                $('#axloader').show();
            },
            complete: function () {
                $('#axloader').hide();
            }
        })

    });

});
 
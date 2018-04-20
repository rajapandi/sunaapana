function onchangecalc(ch) {
    var onchgval = ch.value;
    window.location.href = onchgval;
}

function getid(elid) {
    var f = document.getElementById(elid);
    return f;
}

function gf(fieldname) {
    var f = $("#" + fieldname).val();
    return f;
}

function showresult(id, val) {
    var rs = getid('r' + id);
    rs.value = val;
}

function embedshowhide(obj) {
    $("#embdWidHei").show();
    $("#embdTextarea").hide();
    if (obj == 'expand') {
        $("#embedisp").show();
    } else if (obj == 'minimize') {
        $("#embedisp").hide();
    }
}

function getEmbededCode() {
    $("#embdWidHei").hide();
    $("#embdTxt").val("");
    var ifrmWidth = $("#embdWidth").val();
    var ifrmHeight = $("#embdHeight").val();
    var embedUrl = $("#embedUrl").val();
    if (ifrmWidth == "") {
        ifrmWidth = "400";
    }
    if (ifrmHeight == "") {
        ifrmWidth = "500";
    }
    $("#embdTxt").val("<iframe src='" + embedUrl + "' width='" + ifrmWidth + "' height='" + ifrmHeight + "' frameborder='0'></iframe>");
    $("#embdTextarea").show();
}

function easyRoundOf(value, decima) {
    if (isNaN(value)) {
        return 0;
    } else {
        decima = Math.pow(10, parseConv(decima));
        var rndvalus = Math.round(parseConv(value) * decima) / decima;
        if (isNaN(rndvalus)) {
            return 0;
        } else {
            return rndvalus;
        }
    }
}
$(document).ready(function() {
    $("textarea.auto_selectemb").mouseover(function() {
        $(this).select();
    });
    $("#embedisp").hide();
    conversionSelectClass();
    onkeyupValidationClass();
    closeModal();
    $('.ec_calculator_gen').find("input[type = 'text']").focusout(function() {
        $("#dynErrDisp").html("");
        $("#dynErrDisp").hide();
        var buttonValue = $('.ec_calculator_gen').find("input[type = 'button']").val();
        if (buttonValue == "Calculate" || buttonValue == "calculate" || buttonValue == "Convert" || buttonValue == "Result") {
            $('.ec_calculator_gen').find("input[type = 'reset']").after('<div class="errClass" id="dynErrDisp"></div><div id="calciScroll"></div>');
        }
    });
    $('.ec_calculator_gen').find("input[type = 'text']").keyup(function() {
        var buttonValue = $('.ec_calculator_gen').find("input[type = 'button']").val();
        if (buttonValue == "Calculate" || buttonValue == "calculate" || buttonValue == "Convert" || buttonValue == "Result") {
            var butnOnclikFunName = $('.ec_calculator_gen').find("input[type = 'button']").attr("onclick");
            var funStr = butnOnclikFunName.replace("();", "");
            funStr = funStr.replace("()", "");
            var funcStrConv = eval(funStr).toString().strcontains(".php");
            if (funcStrConv === false) {
                setTimeout(function() {
                    eval(butnOnclikFunName)
                }, 500);
                setTimeout(function() {
                    $("input[type = 'text']").focus(function() {
                        return false;
                    });
                    0 == repeatErr && ($(".ec_calculator_gen").find("input[type = 'reset']").after('<div class="errClass" id="dynErrDisp"></div><div id="calciScroll"></div>'), repeatErr = 1);
                }, 1);
            }
        }
    });
});
String.prototype.strcontains = function(it) {
    return this.indexOf(it) != -1;
};

function conversionSelectClass() {
    if ($(".easycurrency").length > 0) {
        currencySelector();
        if ($(".easycurrencyresult").length > 0) {
            $(".easycurrencyresult").html("&#36;");
        }
    }
    if ($(".easylengthunits").length > 0) {
        createUnitConversionSelector("easylength");
    }
    if ($(".easyweightunits").length > 0) {
        createUnitConversionSelector("easyweight");
    }
    if ($(".easyvolumeunits").length > 0) {
        createUnitConversionSelector("easyvolume");
    }
    if ($(".easytemperatureunits").length > 0) {
        createUnitConversionSelector("easytemperature");
    }
    if ($(".easydatastorageunits").length > 0) {
        createUnitConversionSelector("easydatastorage");
    }
    if ($(".easyenergyunits").length > 0) {
        createUnitConversionSelector("easyenergy");
    }
    if ($(".easyareaunits").length > 0) {
        createUnitConversionSelector("easyarea");
    }
    if ($(".easydegreeunits").length > 0) {
        createUnitConversionSelector("easydegree");
    }
}

function changeCurrencySymbol(currObj) {
    var currencySelVal = $(currObj).val();
    if ($(".easycurrencyresult").length > 0) {
        $(".easycurrencyresult").html(currencySelVal);
    }
}

function currencySelector() {
    var easycurrency = new Array("&#36;", "&#2352;", "&#162;", "&#163;", "&#165;", "&#8355;", "&#8356;", "&#8359;", "&#128;");
    var easycurcountry = new Array("Dollar", "Rupee", "Cent", "Pound", "Yen", "Franc", "Lira", "Peseta", "Euro");
    var currencySel = "<select onchange=changeCurrencySymbol(this)>";
    for (i = 0; i < easycurrency.length; i++) {
        currencySel += "<option value='" + easycurrency[i] + "'>" + easycurcountry[i] + " (" + easycurrency[i] + ") </option>";
    }
    currencySel += "</select>";
    $(".easycurrency").html(currencySel);
}

function createUnitConversionSelector(valus) {
    for (ij = 0; ij < $("." + valus + "units").length; ij++) {
        var ids = $("." + valus + "units").eq(ij).attr("id");
        unitConversionSelector(valus, ids);
    }
}
var easylength = new Array("mm", "cm", "dm", "m", "km", "mi", "in", "ft", "yd");
var easylengthvals = new Array("10", "1", "0.1", "0.01", "0.00001", "0.000006213711922373", "0.3937007874016", "0.03280839895013", "0.01093613298338");
var easylengthunits = new Array("Millimeter", "Centimeter", "Decimeter", "Meter", "Kilometer", "Mile", "Inch", "Foot", "Yard");
var easyweight = new Array("mg", "g", "kg", "oz", "lb", "dr", "gr");
var easyweightvals = new Array("1000", "1", "0.001", "0.03527396194958", "0.002204622621849", "0.5643833911933", "15.43235835294");
var easyweightunits = new Array("Milligram", "Gram", "Kilogram", "Ounce", "Pound", "Dram", "Grain");
var easyvolume = new Array("mm3", "ml", "cl", "l", "dal", "hl", "cm3", "dm3", "m3", "in3", "ft3", "yd3", "bbl");
var easyvolumevals = new Array("1000000", "1000", "100", "1", "0.1", "0.01", "1000", "1", "0.001", "61.02374409473", "0.03531466672149", "0.001307950619314", "0.006289810770432");
var easyvolumeunits = new Array("Cubic Millimeter", "Milliliter", "Centiliter", "liter", "dekaliter", "hectoliter", "Cubic Centimeter", "Cubic Decimeter", "Cubic Meter", "Cubic Inch", "Cubic Foot", "Cubic Yard", "Barrel");
var easytemperature = new Array("C", "K");
var easytemperaturevals = new Array("1", "274.15");
var easytemperatureunits = new Array("Celsius", "Kelvin");
var easydatastorage = new Array("bit", "B", "Kbit", "KB", "Mbit", "MB", "Gbit", "GB", "Tbit", "TB", "Pbit", "PB");
var easydatastoragevals = new Array("8388608", "1048576", "8192", "1024", "8", "1", "0.0078125", "0.0009765625", "0.00000762939453125", "9.537109375E-7", "7.450580566406E-9", "9.3132E-10");
var easydatastorageunits = new Array("Bit", "Byte", "Kilobit", "Kilobyte", "Megabit", "Megabyte", "Gigabit", "Gigabyte", "Terabit", "Terabyte", "Petabit", "Petabyte");
var easyenergy = new Array("J", "kJ", "MJ", "GJ", "cal", "kcal", "btu", "eV", "Wh", "kWh", "erg");
var easyenergyvals = new Array("1", "0.001", "0.000001", "1E-9", "0.2388458966275", "0.0002388458966275", "0.0009478169879134", "6241509744512000000", "0.0002777777777778", "2.777777777778E-7", "10000000");
var easyenergyunits = new Array("Joule", "Kilojoule", "Megajoule", "Gigajoule", "Calorie", "Kilocalorie", "BTU", "Electronvolt", "Watt Hour", "Kilowatt Hour", "ERG");
var easyarea = new Array("mm2", "acre", "are", "ha", "cm2", "m2", "km2", "ft2", "in2", "yd2", "sqmi", "twp");
var easyareavals = new Array("1000000", "0.0002471053814672", "0.01", "0.0001", "10000", "1", "0.000001", "10.76391041671", "1550.003100006", "1.195990046301", "3.861021585425E-7", "1.072505995951E-8");
var easyareaunits = new Array("Square Millimeter", "Acre", "Are", "Hectare", "Square Centimeter", "Square Meter", "Square Kilometer", "Square Foot", "Square Inch", "Square Yard", "Square Mile", "Township");
var easydegree = new Array("&deg;", "rad");
var easydegreevals = new Array("1", "0.0174532925");
var easydegreeunits = new Array("Degree", "Radians");

function unitConversionSelector(easyunits, ids) {
    var unitsConvSel = "<select id='unitConv" + ids + "' onchange='calculate()'>";
    for (i = 0; i < eval(easyunits).length; i++) {
        var unitSelVals = eval(easyunits)[i];
        if ($.isNumeric(unitSelVals.match(/\d+/))) {
            unitSelVals = unitSelVals.replace(unitSelVals.match(/\d+/), "&#xB" + unitSelVals.match(/\d+/) + ";");
        }
        unitsConvSel += "<option value='" + eval(easyunits + "vals")[i] + "'>" + unitSelVals + " </option>";
    }
    unitsConvSel += "</select>";
    $("#" + ids).html(unitsConvSel);
}

function changeUnitConversion(vals, selcIds, convUnits, unitName) {
    if ($.isNumeric(vals)) {
        var easyUnitIndex = jQuery.inArray(convUnits, eval(unitName));
        var easySelVals = $("#unitConv" + selcIds).val();
        var conVals = eval(unitName + "vals")[easyUnitIndex];
        if (unitName == "easytemperature") {
            return ((parseConv(vals) - parseConv(easySelVals)) + parseConv(conVals));
        } else {
            return ((parseConv(vals) / parseConv(easySelVals)) * parseConv(conVals));
        }
    }
}

function changeResultUnitConversion(vals, selcIds, convUnits, unitName) {
    if ($.isNumeric(vals)) {
        var easyUnitIndex = jQuery.inArray(convUnits, eval(unitName));
        var easySelVals = $("#unitConv" + selcIds).val();
        var conVals = eval(unitName + "vals")[easyUnitIndex];
        if (unitName == "easytemperature") {
            return ((parseConv(vals) + parseConv(easySelVals)) - parseConv(conVals));
        } else {
            return ((parseConv(vals) * parseConv(easySelVals)) / parseConv(conVals));
        }
    }
}

function parseConv(val) {
    return parseFloat(val);
}
var easyValid = 0;
var repeatErr = 0;

function easyCommonInputCalculation(textid, unitname, alertmsg, arind) {
    if (easyValid == 0) {
        var inputval = emptyValidation($("#" + textid + "hname").val(), alertmsg);
        if (inputval != false || inputval == 0) {
            if (arind == "" || typeof(arind) == "undefined") {
                arind = 0;
            } else {
                arind = arrayKeyFinder(unitname, arind);
            }
            return getbasicval((textid + "unit"), inputval, unitname, '', arind);
        }
    } else {
        return false;
    }
}

function easyCommonResultCalculation(textid, unitname, arind) {
    if (easyValid == 1) {
        return "";
    } else {
        if (arind == "" || typeof(arind) == "undefined") {
            arind = 0;
        } else {
            arind = arrayKeyFinder(unitname, arind);
        }
        if (isNaN(getbasicval((textid + "unit"), eval(textid + "result"), unitname, 'result', arind))) {
            return 0;
        } else {
            return getbasicval((textid + "unit"), eval(textid + "result"), unitname, 'result', arind);
        }
    }
}

function arrayKeyFinder(arrys, findval) {
    arrys = eval(arrys);
    var keystore = 0;
    return $.each(arrys, function(r, e) {
        return e == findval ? (keystore = r, !1) : void 0
    }), keystore
}

function getbasicval(string, value, arrname, type, baseunitpos) {
    if ($("#unitConv" + string).length > 0) {
        if (type == "result") {
            return changeResultUnitConversion(value, string, eval(arrname)[baseunitpos], arrname);
        } else {
            return changeUnitConversion(value, string, eval(arrname)[baseunitpos], arrname);
        }
    } else {
        return value;
    }
}

function test_val(id, error, variable) {
    var t = $("#" + id).val();
    if (t == "") {
        alert(error);
        return 0;
    } else {
        t = parseFloat(t);
        eval(variable + "=" + t);
        return 1;
    }
}

function emptyValidation(val, altmsgs) {
    if (val == "" && easyValid == 0) {
        if (altmsgs == "" || typeof(altmsgs) == "undefined") {
            altmsgs = "All Fields (Empty Field Here)";
        }
        alert("Enter " + altmsgs);
        //easyValid=1;return false;
        easyValid = 0;
        return parseFloat(0);
    } else {
        easyValid = 0;
        if (isNaN(val)) {
            return 0;
        } else {
            return parseFloat(val);
        }
    }
}
$(function() {
    0 == repeatErr && ($(".ec_calculator_gen").find("input[type = 'reset']").after('<div class="errClass" id="dynErrDisp"></div><div id="calciScroll"></div>'), repeatErr = 1);
    $(":reset").click(function() {
        $("#dynErrDisp").html("");
        $("#dynErrDisp").hide();
        if ($(".ec_calculator_gen select").attr("onchange") == "modf()") {
            setTimeout(function() {
                eval($(".ec_calculator_gen select").attr("onchange"))
            }, 100);
        }
    });
    $(":button").click(function() {
        if (0 == $(this).hasClass("btn") && 0 == $(this).hasClass("bnt") && 0 == $(this).hasClass("btnCls") && 0 == $(this).hasClass("ques_box_btn_clr") && "" == $.trim($("#dynErrDisp").html()) && $("#calciScroll").length > 0) {
            var mobiScrnWidth = $(window).width(),
                noFbtn = $("#dispCalcConts").find(":button").length;
            noFbtn > 1 ? 650 > mobiScrnWidth ? $("html, body").animate({
                scrollTop: $(this).parent().next("div").find("h4").offset().top
            }, 2e3) : $("html, body").animate({
                scrollTop: $(this).parent().prev("div").find("h4").offset().top
            }, 2e3) : 650 > mobiScrnWidth ? $("html, body").animate({
                scrollTop: $(this).parent().offset().top
            }, 2e3) : $("html, body").animate({
                scrollTop: $("#dispCalcConts").offset().top
            }, 2e3)
        }
        easyValid = 0;
    });
});

function onkeyupValidationClass() {
    $(".easynumeric").numeric();
    $(".easyinteger").numeric(false, function() {
        alert("Integers only");
        this.value = "";
        this.focus();
    });
    $(".easypositive").numeric({
        negative: false
    }, function() {
        alert("No negative values");
        this.value = "";
        this.focus();
    });
    $(".easypositive-integer").numeric({
        decimal: false,
        negative: false
    }, function() {
        alert("Positive integers only");
        this.value = "";
        this.focus();
    });
    mobileKeypad();
    mobileKeypadNumber();
}

function relUnitConversion() {
    var relUnitFrm = $("#relUnitFrm").val();
    var relUnitTo = $("#relUnitTo").val();
    if (relUnitFrm == relUnitTo) {
        alert("Both Selected Units are Same.")
        return false;
    } else {
        window.location.href = "https://www.easycalculation.com/unit-conversion/" + relUnitFrm + "-" + relUnitTo + ".html";
    }
}
var EasyMath = {
    fact: function(num) {
        Math.round(num);
        if (num < 0)
            return "Undefined";
        var fact = 1;
        for (var i = num; i > 1; i--)
            fact *= i;
        return fact;
    },
    gamma: function(num) {
        Math.round(num);
        if (num < 1)
            return "Undefined";
        var gamma = EasyMath.fact(num - 1);
        return gamma;
    },
    arcosh: function(num) {
        var arcosh = Math.log(num + Math.sqrt(num * num - 1));
        return arcosh;
    },
    arrayTrim: function(string, chars) {
        string = $.trim(string);
        if (string.charAt(0) == chars) {
            string = string.slice(1);
        }
        if (string.charAt(string.length - 1) == chars) {
            string = string.slice(string.length);
        }
        return string;
    }
}
$(document).ready(function() {
    if ("placeholder" in document.createElement("input")) return;
    $(':input[placeholder]').not(':password').each(function() {
        setupPlaceholder($(this));
    });
    $(':password[placeholder]').each(function() {
        setupPasswords($(this));
    });
    $('form').submit(function(e) {
        clearPlaceholdersBeforeSubmit($(this));
    });
});

function setupPlaceholder(input) {
    var placeholderText = input.attr('placeholder');
    setPlaceholderOrFlagChanged(input, placeholderText);
    input.focus(function(e) {
        if (input.data('changed') === true) return;
        if (input.val() === placeholderText) input.val('');
    }).blur(function(e) {
        if (input.val() === '') input.val(placeholderText);
    }).change(function(e) {
        input.data('changed', input.val() !== '');
    });
}

function setPlaceholderOrFlagChanged(input, text) {
    (input.val() === '') ? input.val(text): input.data('changed', true);
}

function setupPasswords(input) {
    var passwordPlaceholder = createPasswordPlaceholder(input);
    input.after(passwordPlaceholder);
    (input.val() === '') ? input.hide(): passwordPlaceholder.hide();
    $(input).blur(function(e) {
        if (input.val() !== '') return;
        input.hide();
        passwordPlaceholder.show();
    });
    $(passwordPlaceholder).focus(function(e) {
        input.show().focus();
        passwordPlaceholder.hide();
    });
}

function createPasswordPlaceholder(input) {
    return $('<input>').attr({
        placeholder: input.attr('placeholder'),
        value: input.attr('placeholder'),
        id: input.attr('id'),
        readonly: true
    }).addClass(input.attr('class'));
}

function clearPlaceholdersBeforeSubmit(form) {
    form.find(':input[placeholder]').each(function() {
        if ($(this).data('changed') === true) return;
        if ($(this).val() === $(this).attr('placeholder')) $(this).val('');
    });
}

function trimContinuousSymbols(strin, symb) {
    var valAry = strin.split(",");
    var newStr = "";
    for (con = 0; con < valAry.length; con++) {
        var strCount = countString(valAry[con], symb);
        if (strCount > 1) {
            valAry[con] = valAry[con].slice(0, -1);
        }
        newStr = newStr + valAry[con];
        if ((valAry.length - 1) != con) {
            newStr = newStr + ",";
        }
    }
    return newStr;
}

function countString(str, search) {
    var count = 0;
    var index = str.indexOf(search);
    while (index != -1) {
        count++;
        index = str.indexOf(search, index + 1);
    }
    return count;
}




(function($) {
    $.fn.numeric = function(config, callback) {
        if (typeof config === 'boolean') {
            config = {
                decimal: config
            };
        }
        config = config || {};
        if (typeof config.negative == "undefined") config.negative = true;
        var decimal = (config.decimal === false) ? "" : config.decimal || ".";
        var negative = (config.negative === true) ? true : false;
        var callback = typeof callback == "function" ? callback : function() {};
        return this.data("numeric.decimal", decimal).data("numeric.negative", negative).data("numeric.callback", callback).keyup($.fn.numeric.keyup);
    }
    $.fn.numeric.keyup = function(e) {
        var val = this.value;
        if (val.length > 0) {
            var carat = $.fn.getSelectionStart(this);
            var decimal = $.data(this, "numeric.decimal");
            var negative = $.data(this, "numeric.negative");
            if (decimal != "") {
                var dot = val.indexOf(decimal);
                if (dot == 0) {
                    this.value = "0" + val;
                }
                if (dot == 1 && val.charAt(0) == "-") {
                    this.value = "-0" + val.substring(1);
                }
                val = this.value;
            }
            var validChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-', decimal];
            var length = val.length;
            for (var i = length - 1; i >= 0; i--) {
                var ch = val.charAt(i);
                if (i != 0 && ch == "-") {
                    val = val.substring(0, i) + val.substring(i + 1);
                } else if (i == 0 && !negative && ch == "-") {
                    val = val.substring(1);
                }
                var validChar = false;
                for (var j = 0; j < validChars.length; j++) {
                    if (ch == validChars[j]) {
                        validChar = true;
                        break;
                    }
                }
                if (!validChar || ch == " ") {
                    val = val.substring(0, i) + val.substring(i + 1);
                }
            }
            var firstDecimal = val.indexOf(decimal);
            if (firstDecimal > 0) {
                for (var i = length - 1; i > firstDecimal; i--) {
                    var ch = val.charAt(i);
                    if (ch == decimal) {
                        val = val.substring(0, i) + val.substring(i + 1);
                    }
                }
            }
            this.value = val;
            $.fn.setSelection(this, carat);
        }
    }
    $.fn.getSelectionStart = function(o) {
        if (o.createTextRange) {
            var r = document.selection.createRange().duplicate();
            r.moveEnd('character', o.value.length);
            if (r.text == '') return o.value.length;
            return o.value.lastIndexOf(r.text);
        } else return o.selectionStart;
    }
    $.fn.setSelection = function(o, p) {
        if (typeof p == "number") p = [p, p];
        if (p && p.constructor == Array && p.length == 2) {
            if (o.createTextRange) {
                var r = o.createTextRange();
                r.collapse(true);
                r.moveStart('character', p[0]);
                r.moveEnd('character', p[1]);
                r.select();
            } else if (o.setSelectionRange) {
                o.focus();
                o.setSelectionRange(p[0], p[1]);
            }
        }
    }
})(jQuery);

function closeModal() {
    $("#dispCalcConts *").attr("disabled", false);
    $('#overlayLoader').css("display", "none");
    $("#dispCalcConts").fadeTo("fast", 1);
    var easyinputs = document.getElementsByTagName("INPUT");
    for (var ies = 0; ies < easyinputs.length; ies++) {
        if (easyinputs[ies].type === 'button' || easyinputs[ies].type === 'reset') {
            easyinputs[ies].style.visibility = 'visible';
        }
    }
}

function relUnitConversionNew() {
    var e = $("#relUnitFrmNew").val(),
        n = $("#relUnitToNew").val();
    return e == n ? (alert("Both Selected Units are Same."), !1) : void(window.location.href = "https://www.easycalculation.com/unit-conversion/bandwidth/" + e + "-" + n + ".html")
}

function mobileKeypad() {
    var e = $(window).width();
    if (480 > e) {
        var t = new Array(".easynumeric", ".easyinteger", ".easypositive", ".easypositive-integer");
        $.each(t, function(e, t) {
            $(t).prop("type", "tel")
        }), $(".ec_calculator_gen").find("input[type = 'text']").each(function() {
            var e = $(this).attr("onkeyup");
            "undefined" != typeof e && "-1" != e.indexOf("checnum(this)") && $(this).prop("type", "tel")
        })
    }
}

function mobileKeypadNumber() {
    var e = $(window).width();
    480 > e && $(".ec_calculator_gen").find("input[type = 'text']").each(function() {
        var e = $(this).attr("onkeyup");
        "undefined" == typeof e || "-1" == e.indexOf("checnum(this)") && "-1" == e.indexOf("checnum1(this)") || $(this).prop("type", "number")
    })
}

function isHTMLContains(e) {
    var r = document.createElement("div");
    r.innerHTML = e;
    for (var t = r.childNodes, n = t.length; n--;)
        if (1 == t[n].nodeType) return !0;
    return !1
}

function faqpostchecks() {
    $("#faqerr").html("");
    var e = $.trim($("#faques").val());
    if ("" == e) return $("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'> Enter your question</p>"), $("#faques").focus(), !1;
    var r = isHTMLContains(e),
        t = replaceURLWithHTMLLinks(e);
    if (0 == r && 1 == t) {
        var n = document.getElementById("faqformpost");
        n.submit()
    } else $("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'>Self promotion and external links are not accepted in your question.</p>")
}

function replaceURLWithHTMLLinks(e) {
    var r = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
        t = e.replace(r, "<a href='$1'>$1</a>");
    return t == e ? !0 : !1
}




function clrfaqs() {
    $("#faqerr").html(""), $("#faques").val("")
}

function definitionSearch() {
    var e = $("#deftext").val();
    if ("" == e) return alert("Enter Definition Name"), $("#deftext").focus(), !1;
    var r = isHTMLContains(e);
    return 0 != r ? (alert("Search content contains html code"), !1) : void(window.location.href = "maths-dictionary/dictionary-search.php?defi=" + e)
}

function formulaSearch() {
    var e = $("#formsrch").val();
    if ("" == e) return alert("Enter Formula Name"), $("#formsrch").focus(), !1;
    var r = isHTMLContains(e);
    return 0 != r ? (alert("Search content contains html code"), !1) : void(window.location.href = "formulas/formula-search.php?defi=" + e)
}

function currencyReverse() {
    var e = $("#fromcur").val(),
        r = $("#tocur").val();
    $("#fromcur option[value^='" + r + "']").attr("selected", "selected"), $("#tocur option[value^='" + e + "']").attr("selected", "selected"), currency_calc()
}
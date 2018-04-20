/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


d2r = Math.PI / 180;
r2d = 180 / Math.PI;
var ra, dc;
var pln, plt;
lord = "KeVeSuMoMaRaJuSaMe";
var dasha = [7, 20, 6, 10, 7, 18, 16, 19, 17];
var zn = "AriTauGemCanLeoVirLibScoSagCapAquPis";
var range = [1, 12, 1, 31, 1800, 2100, 0, 23, 0, 59, 0, 12, 0, 59, 0, 0, 0, 179, 0, 59, 0, 0, 0, 89, 0, 59];
var naks = ["Aswini", "Bharani", "Krittika", "Rohini", "Mrigsira", "Ardra", "Punarvasu", "Pushya", "Aslesha", "Magha", "P.Phalguni", "U.Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "P.Shadya", "U.Shadya", "Shravana", "Dhanishtha", "Shatbisha", "P.Phadra", "U.Phadra", "Revati"];

function fillDate() {
    today = new Date();
    document.LunarCalc.Month.value = today.getMonth() + 1;
    document.LunarCalc.Day.value = today.getDate();
    document.LunarCalc.Year.value = today.getFullYear();
    document.LunarCalc.Hour.value = today.getHours();
    document.LunarCalc.Min.value = today.getMinutes();
    zmins = today.getTimezoneOffset();
    with(Math) {
        zmins /= 60;
        if (zmins < 0.0) {
            var eln = document.LunarCalc.East;
            eln.checked = true;
        }
        zmins = abs(zmins);
        document.LunarCalc.ZHour.value = floor(zmins);
        document.LunarCalc.ZMin.value = (zmins - floor(zmins)) * 60;
    }
}

function checkEntries(f) {
    for (i = 0; i < 13; i++) {
        var e = f.elements[i];
        if ((e.name == "DST") || (e.name == "East") || (e.name == "South")) continue;
        if (isNaN(e.value) || (e.value < range[i * 2]) || (e.value > range[i * 2 + 1])) {
            msg = "Please enter value between " + range[i * 2] + " and " + range[i * 2 + 1] + " in the " + e.name + " field";
            alert(msg);
            return true;
        }
    }
    return false;
}

function calculate() {
    if (checkEntries(document.LunarCalc)) return;
    with(Math) {
        var mon = floor(document.LunarCalc.Month.value);
        var day = floor(document.LunarCalc.Day.value);
        var year = floor(document.LunarCalc.Year.value);
        var hr = floor(document.LunarCalc.Hour.value);
        hr += floor(document.LunarCalc.Min.value) / 60;
        var tz = floor(document.LunarCalc.ZHour.value);
        tz += floor(document.LunarCalc.ZMin.value) / 60;
        var ln = floor(document.LunarCalc.LonDeg.value);
        ln += floor(document.LunarCalc.LonMin.value) / 60;
        var la = floor(document.LunarCalc.LatDeg.value);
        la += floor(document.LunarCalc.LatMin.value) / 60;
    }
    var dst = document.LunarCalc.DST;
    var eln = document.LunarCalc.East;
    var sla = document.LunarCalc.South;
    if (eln.checked) ln = -ln;
    if (sla.checked) la = -la;
    if (dst.checked) {
        if (ln < 0.0) tz++;
        else tz--;
    }
    jd = mdy2julian(mon, day, year);
    if (ln < 0.0) f = hr - tz;
    else f = hr + tz;
    t = (jd - 2451545 - 0.5) / 36525;
    gst = ut2gst(t, f);
    t = ((jd - 2451545) + f / 24 - 0.5) / 36525;
    ay = calcayan(t);
    ob = 23.452294 - 0.0130125 * t;
    l = (218.3164591 + 481267.88134236 * t);
    d = (297.8502042 + 445267.1115168 * t);
    m = (357.5291092 + 35999.0502909 * t);
    mm = (134.9634114 + 477198.8676313 * t);
    f = (93.2720993 + 483202.0175273 * t);
    d *= d2r;
    m *= d2r;
    mm *= d2r;
    f *= d2r;
    e = 1 - 0.002516 * t - 0.0000074 * t * t;
    with(Math) {
        p = 6.288774 * sin(mm) + 1.274027 * sin(d * 2 - mm) + 0.658314 * sin(d * 2) + 0.213618 * sin(2 * mm) - 0.185116 * e * sin(m) - 0.114332 * sin(f * 2);
        p += 0.058793 * sin(d * 2 - mm * 2) + 0.057066 * e * sin(d * 2 - m - mm) + 0.053322 * sin(d * 2 + mm) + 0.045758 * e * sin(d * 2 - m) - 0.040923 * e * sin(m - mm) - 0.034720 * sin(d) - 0.030383 * e * sin(m + mm);
        p += 0.015327 * sin(d * 2 - f * 2) - 0.012528 * sin(mm + f * 2) + 0.010980 * sin(mm - f * 2) + 0.010675 * sin(d * 4 - mm) + 0.010034 * sin(3 * mm);
        p += 0.008548 * sin(d * 4 - mm * 2) - 0.007888 * e * sin(d * 2 + m - mm) - 0.006766 * e * sin(d * 2 + m) - 0.005163 * sin(d - mm) + 0.004987 * e * sin(d + m) + 0.004036 * e * sin(d * 2 - m + mm) + 0.003994 * sin(d * 2 + mm * 2);
        b = 5.128122 * sin(f) + 0.280602 * sin(mm + f) + 0.277693 * sin(mm - f) + 0.173237 * sin(d * 2 - f) + 0.055413 * sin(d * 2 - mm + f) + 0.046271 * sin(d * 2 - mm - f);
        b += 0.032573 * sin(2 * d + f) + 0.017198 * sin(2 * mm + f) + 0.009266 * sin(2 * d + mm - f) + 0.008823 * sin(2 * mm - f) + 0.008247 * e * sin(2 * d - m - f) + 0.004324 * sin(2 * d - f - 2 * mm);
        b += 0.004200 * sin(2 * d + f + mm) + 0.003372 * e * sin(f - m - 2 * d) + 0.002472 * e * sin(2 * d + f - m - mm) + 0.002222 * e * sin(2 * d + f - m) + 0.002072 * e * sin(2 * d - f - m - mm) + 0.001877 * e * sin(f - m + mm);
        b += 0.001828 * sin(4 * d - f - mm) - 0.001803 * e * sin(f + m) - 0.001750 * sin(3 * f) + 0.001570 * e * sin(mm - m - f) - 0.001487 * sin(f + d) - 0.001481 * e * sin(f + m + mm);
        r = 0.950724 + 0.051818 * cos(mm) + 0.009531 * cos(2 * d - mm) + 0.007843 * cos(2 * d) + 0.002824 * cos(2 * mm) + 0.000857 * cos(2 * d + mm) + 0.000533 * e * cos(2 * d - m);
        r += 0.000401 * e * cos(2 * d - m - mm) + 0.000320 * e * cos(mm - m) - 0.000271 * cos(d) - 0.000264 * e * cos(m + mm) - 0.000198 * cos(2 * f - mm) + 0.000173 * cos(3 * mm);
        r += 0.000167 * cos(4 * d - mm) - 0.000111 * e * cos(m) + 0.000103 * cos(4 * d - 2 * mm) - 0.000084 * cos(2 * mm - 2 * d) - 0.000083 * e * cos(2 * d + m) + 0.000079 * cos(2 * d + 2 * mm) + 0.000072 * cos(4 * d);
    }
    l += p;
    while (l < 0.0) l += 360.0;
    while (l > 360.0) l -= 360.0;
    ecl2equ(l, b, ob);
    ln = -ln;
    ln /= 15;
    ln += gst;
    while (ln < 0.0) ln += 24;
    while (ln > 24.0) ln -= 24;
    h = (ln - ra) * 15;
    with(Math) {
        u = atan(0.996647 * tan(d2r * la));
        s = 0.996647 * sin(u);
        c = cos(u);
        r = 1 / sin(d2r * r);
        dlt = atan2(c * sin(d2r * h), r * cos(d2r * dc) - c * cos(d2r * h));
        dlt *= r2d;
        hh = h + dlt;
        dlt /= 15;
        ra -= dlt;
        dc = atan(cos(d2r * hh) * ((r * sin(d2r * dc) - s) / (r * cos(d2r * dc) * cos(d2r * h) - c)));
        dc *= r2d;
    }
    equ2ecl(ra, dc, ob);
    l += ay;
    if (l < 0.0) l += 360.0;
    document.display.npmoon.value = lon2dmsz(l);
    nk = (l * 60) / 800.0;
    with(Math) {
        document.display.nnakshatra.value = naks[floor(nk)];
        nl = floor(nk) % 9;
        db = 1 - (nk - floor(nk));
        bk = calcbhukti(db, nl);
        ndasha = (db * dasha[nl]) * 365.25;
        jd1 = jd + ndasha;
        d1 = nl;
    }
    pd = calcpraty(db, nl);
    document.display.npdasha.value = lord.substr(nl * 2, 2) + "/" + lord.substr(bk * 2, 2) + "/" + lord.substr(pd * 2, 2);
    nl++;
    if (nl == 9) nl = 0;
    str = lord.substr(nl * 2, 2) + "/" + lord.substr(nl * 2, 2) + "  ";
    str += jul2mdy(jd1);
    document.display.npnextdasha.value = str;
    pln += ay;
    if (pln < 0.0) pln += 360.0;
    document.display.pmoon.value = lon2dmsz(pln);
    nk = (pln * 60) / 800.0;
    with(Math) {
        document.display.pnakshatra.value = naks[floor(nk)];
        nl = floor(nk) % 9;
        db = 1 - (nk - floor(nk));
        bk = calcbhukti(db, nl);
        ndasha = (db * dasha[nl]) * 365.25;
        jd2 = jd + ndasha;
        jul2mdy(jd2);
        diff = round(abs(jd2 - jd1));
        if (d1 != nl) {
            if (d1 < nl) diff = dasha[nl] * 365.25 - diff;
            else
                diff = dasha[d1] * 365.25 - diff;
            diff = round(abs(diff));
        }
        pd = calcpraty(db, nl);
        document.display.pdasha.value = lord.substr(nl * 2, 2) + "/" + lord.substr(bk * 2, 2) + "/" + lord.substr(pd * 2, 2);
        nl++;
        if (nl == 9) nl = 0;
        str = lord.substr(nl * 2, 2) + "/" + lord.substr(nl * 2, 2) + "  ";
        str += jul2mdy(jd2);
        document.display.pnextdasha.value = str;
        str = "";
        x = floor(diff / 365.25);
        if (x) {
            str = x + " year ";
            diff -= 365.25;
        }
        x = floor(diff / 30);
        if (x) str += x + " month(s) ";
        str += floor(diff % 30) + " days";
        document.display.diff.value = str;
    }
    today = new Date();
    mon = today.getMonth() + 1;
    day = today.getDate();
    year = today.getFullYear();
    curjd = mdy2julian(mon, day, year);
    cd = curjd - jd1;
    d1++;
    if (d1 == 9) d1 = 0;
    document.display.curdasha.value = calccurdasha(cd, d1);
    cd = curjd - jd2;
    document.display.curpdasha.value = calccurdasha(cd, nl);
}

function calccurdasha(cd, nl) {
    while (cd < 0) cd += 43830;
    len = 0;
    for (i = 0; i < 9; i++) {
        len += dasha[nl] * 365.25;
        if (len > cd) break;
        nl++;
        if (nl == 9) nl = 0;
    }
    cd = len - cd;
    cd /= dasha[nl] * 365.25
    bk = calcbhukti(cd, nl);
    pd = calcpraty(cd, nl);
    str = lord.substr(nl * 2, 2) + "/" + lord.substr(bk * 2, 2) + "/" + lord.substr(pd * 2, 2);
    return str;
}

function calcbhukti(db, dp) {
    x = 1 - db;
    y = 0;
    var buk = dp;
    for (i = 0; i < 9; i++) {
        y += dasha[buk] / 120;
        if (y > x) break;
        buk++;
        if (buk == 9) buk = 0;
    }
    return buk;
}

function calcpraty(db, dp) {
    x = 1 - db;
    y = 0;
    bk1 = dp;
    for (i = 0; i < 9; i++) {
        y += dasha[bk1] / 120;
        if (y > x) break;
        bk1++;
        if (bk1 == 9) bk1 = 0;
    }
    y = y - x;
    y = y / (dasha[bk1] / 120);
    return calcbhukti(y, bk1);
}

function calcayan(t) {
    with(Math) {
        ln = 125.0445550 - 1934.1361849 * t + 0.0020762 * t * t;
        off = 280.466449 + 36000.7698231 * t + 0.00031060 * t * t;
        off = 17.23 * sin(d2r * ln) + 1.27 * sin(d2r * off) - (5025.64 + 1.11 * t) * t;
        off = (off - 85886.27) / 3600.0;
    }
    return off;
}

function jul2mdy(JD) {
    var str;
    with(Math) {
        L = floor(JD + 0.5) + 68569;
        N = floor((4 * L) / 146097);
        L -= floor((146097 * N + 3) / 4);
        IT = floor((4000 * (L + 1)) / 1461001);
        L -= floor((1461 * IT) / 4) - 31;
        JT = floor((80 * L) / 2447);
        K = L - floor((2447 * JT) / 80);
        L = floor(JT / 11);
        JT += 2 - 12 * L;
        IK = 100 * (N - 49) + IT + L;
        str = "(M/D/Y) ";
        str += floor(JT);
        str += "/" + floor(K);
        str += "/" + floor(IK);
    }
    return str;
}

function ut2gst(t, ut) {
    t0 = 6.697374558 + (2400.051336 * t) + (0.000025862 * t * t);
    ut *= 1.002737909;
    t0 += ut;
    while (t0 < 0.0) t0 += 24;
    while (t0 > 24.0) t0 -= 24;
    return t0;
}

function ecl2equ(ln, la, ob) {
    with(Math) {
        y = asin(sin(d2r * la) * cos(d2r * ob) + cos(d2r * la) * sin(d2r * ob) * sin(d2r * ln));
        dc = r2d * y;
        y = sin(d2r * ln) * cos(d2r * ob) - tan(d2r * la) * sin(d2r * ob);
        x = cos(d2r * ln);
        x = atan2(y, x);
        x = r2d * x;
        if (x < 0.0) x += 360;
        ra = x / 15;
    }
}

function equ2ecl(ra, dc, ob) {
    ra *= 15;
    with(Math) {
        y = sin(d2r * ra) * cos(d2r * ob) + tan(d2r * dc) * sin(d2r * ob);
        x = cos(d2r * ra);
        x = atan2(y, x);
        x *= r2d;
        if (x < 0) x += 360;
        pln = x;
        y = asin(sin(d2r * dc) * cos(d2r * ob) - cos(d2r * dc) * sin(d2r * ob) * sin(d2r * ra));
        pla = r2d * y;
    }
}

function lon2dmsz(x) {
    with(Math) {
        var d, m, s;
        x = abs(x);
        d = floor(x);
        m = (x - d);
        s = m * 60;
        m = floor(s);
        s = s - m;
        z = floor(d / 30);
        d %= 30;
        str = d + "� " + m + "' " + floor(s * 60) + "\" " + zn.substr(z * 3, 3);
    }
    return str;
}

function mdy2julian(m, d, y) {
    with(Math) {
        im = 12 * (y + 4800) + m - 3;
        j = (2 * (im - floor(im / 12) * 12) + 7 + 365 * im) / 12;
        j = floor(j) + d + floor(im / 48) - 32083;
        if (j > 2299171) j += floor(im / 4800) - floor(im / 1200) + 38;
        return j;
    }
}

function fix360(v) {
    while (v < 0.0) v += 360;
    while (v > 360) v -= 360;
    return v;
}
	var naks = ["Asvini அசுவினி", "Bharani பரணி", "Krittika கிருத்திகை", "Rohini ரோகிணி", "Mrigasira மிருகசிரீஷம்", "Ardra திருவாதிரை", "Punarvasu புனர்பூசம்",	    "Pusyami பூசம்", "Aslesa ஆயில்யம்", "Magha மகம்", "P.Phalguni பூரம்", "U.Phalguni உத்திரம்", "Hasta ஹஸ்தம்", "Citra சித்திரை", "Swati சுவாதி", "Visakha விசாகம்",	    "Anuradha அனுஷம்", "Jyestha கேட்டை", "Mula முலம்", "P.Asadha பூராடம்", "U.Asadha உத்திராடம்", "Sravana திருவோணம்", "Dhanista அவிட்டம்",	    "Satabhisa சதயம்", "P.Bhadra பூரட்டாதி", "U.Bhadra உத்திரட்டாதி", "Revati ரேவதி"	];	d2r = Math.PI / 180;	r2d = 180 / Math.PI;	var ra, dc;	var pln, plt;	//var zn = "AriTauGemCanLeoVirLibScoSagCapAquPis";  // Zodiac	var zn = ["Aries Meṣa (मेष) மேஷம்", "Taurus Vṛṣabha (वृषभ) ரிஷபம்", "Gemini Mithuna (मिथुन)மிதுனம்", "Cancer Karkaṭa (कर्कट) கடகம்", "Leo Siṃha (सिंह) சிம்மம்",	    "Virgo Kanyā (कन्या) கன்னி", "Libra Tulā (तुला) துலாம்", "Scorpio Vṛścika (वृश्चिक) விருச்சிகம்", "Sagittarius Dhanus (धनुष) தனுசு", "Capricorn Makara (मकर) மகரம்", "Aquarius Kumbha (कुम्भ) கும்பம்", "Pisces Mīna (मीन) மீனம்"	];	var range = [1, 12, 1, 31, 1800, 2100, 0, 23, 0, 59, 0, 12, 0, 59, 0, 0, 0, 179, 0, 59, 0, 0, 0, 89, 0, 59];	function calculate() {	    with(Math) {	        var day = floor(document.frmInput.Day.value);	        var mon = floor(document.frmInput.Month.value);	        var year = floor(document.frmInput.Year.value);	        var hr = floor(document.frmInput.Hour.value);	        hr += floor(document.frmInput.Min.value) / 60;	        var tz = floor(document.frmInput.ZHour.value);	        tz += floor(document.frmInput.ZMin.value) / 60;	        var ln = floor(document.frmInput.LonDeg.value);	        ln += floor(document.frmInput.LonMin.value) / 60;	        var la = floor(document.frmInput.LatDeg.value);	        la += floor(document.frmInput.LatMin.value) / 60;	    }	    // checks for checked DST, East, South	    var dst = document.frmInput.DST;	    var eln = document.frmInput.East;	    var sla = document.frmInput.South;	    if (eln.checked) ln = -ln;	    if (sla.checked) la = -la;	    if (dst.checked) {	        if (ln < 0.0) tz++;	        else tz--;	    }	    jd = mdy2julian(mon, day, year);	    if (ln < 0.0) f = hr - tz;	    else f = hr + tz;	    t = (jd - 2451545 - 0.5) / 36525;	    gst = ut2gst(t, f);	    t = ((jd - 2451545) + f / 24 - 0.5) / 36525;	    ay = calcayan(t);	    ob = 23.452294 - 0.0130125 * t; //  Obliquity of Ecliptic	    l = (218.3164591 + 481267.88134236 * t);	    d = (297.8502042 + 445267.1115168 * t);	    m = (357.5291092 + 35999.0502909 * t);	    mm = (134.9634114 + 477198.8676313 * t);	    f = (93.2720993 + 483202.0175273 * t);	    d *= d2r;	    m *= d2r;	    mm *= d2r;	    f *= d2r;	    e = 1 - 0.002516 * t - 0.0000074 * t * t;	    with(Math) {	        p = 6.288774 * sin(mm) +	            1.274027 * sin(d * 2 - mm) +	            0.658314 * sin(d * 2) +	            0.213618 * sin(2 * mm) -	            0.185116 * e * sin(m) -	            0.114332 * sin(f * 2);	        p += 0.058793 * sin(d * 2 - mm * 2) +	            0.057066 * e * sin(d * 2 - m - mm) +	            0.053322 * sin(d * 2 + mm) +	            0.045758 * e * sin(d * 2 - m) -	            0.040923 * e * sin(m - mm) -	            0.034720 * sin(d) -	            0.030383 * e * sin(m + mm);	        p += 0.015327 * sin(d * 2 - f * 2) -	            0.012528 * sin(mm + f * 2) +	            0.010980 * sin(mm - f * 2) +	            0.010675 * sin(d * 4 - mm) +	            0.010034 * sin(3 * mm);	        p += 0.008548 * sin(d * 4 - mm * 2) -	            0.007888 * e * sin(d * 2 + m - mm) -	            0.006766 * e * sin(d * 2 + m) -	            0.005163 * sin(d - mm) +	            0.004987 * e * sin(d + m) +	            0.004036 * e * sin(d * 2 - m + mm) +	            0.003994 * sin(d * 2 + mm * 2);	        b = 5.128122 * sin(f) +	            0.280602 * sin(mm + f) +	            0.277693 * sin(mm - f) +	            0.173237 * sin(d * 2 - f) +	            0.055413 * sin(d * 2 - mm + f) +	            0.046271 * sin(d * 2 - mm - f);	        b += 0.032573 * sin(2 * d + f) +	            0.017198 * sin(2 * mm + f) +	            0.009266 * sin(2 * d + mm - f) +	            0.008823 * sin(2 * mm - f) +	            0.008247 * e * sin(2 * d - m - f) +	            0.004324 * sin(2 * d - f - 2 * mm);	        b += 0.004200 * sin(2 * d + f + mm) +	            0.003372 * e * sin(f - m - 2 * d) +	            0.002472 * e * sin(2 * d + f - m - mm) +	            0.002222 * e * sin(2 * d + f - m) +	            0.002072 * e * sin(2 * d - f - m - mm) +	            0.001877 * e * sin(f - m + mm);	        b += 0.001828 * sin(4 * d - f - mm) -	            0.001803 * e * sin(f + m) -	            0.001750 * sin(3 * f) +	            0.001570 * e * sin(mm - m - f) -	            0.001487 * sin(f + d) -	            0.001481 * e * sin(f + m + mm);	        r = 0.950724 + 0.051818 * cos(mm) +	            0.009531 * cos(2 * d - mm) +	            0.007843 * cos(2 * d) +	            0.002824 * cos(2 * mm) +	            0.000857 * cos(2 * d + mm) +	            0.000533 * e * cos(2 * d - m);	        r += 0.000401 * e * cos(2 * d - m - mm) +	            0.000320 * e * cos(mm - m) -	            0.000271 * cos(d) -	            0.000264 * e * cos(m + mm) -	            0.000198 * cos(2 * f - mm) +	            0.000173 * cos(3 * mm);	        r += 0.000167 * cos(4 * d - mm) -	            0.000111 * e * cos(m) +	            0.000103 * cos(4 * d - 2 * mm) -	            0.000084 * cos(2 * mm - 2 * d) -	            0.000083 * e * cos(2 * d + m) +	            0.000079 * cos(2 * d + 2 * mm) +	            0.000072 * cos(4 * d);	    }	    l += p;	    while (l < 0.0) l += 360.0;	    while (l > 360.0) l -= 360.0;	    //  Parallax calculations	    //  Topocentric calculations	    ecl2equ(l, b, ob);	    ln = -ln; // flip sign of longitude	    ln /= 15;	    ln += gst;	    while (ln < 0.0) ln += 24;	    while (ln > 24.0) ln -= 24;	    h = (ln - ra) * 15;	    with(Math) {	        // calc observer latitude vars	        u = atan(0.996647 * tan(d2r * la));	        // hh = alt/6378140; // assume sea level	        s = 0.996647 * sin(u); // assume sealevel	        c = cos(u); // + hh * cos(d2r(la)); // cos la' -- assume sea level	        r = 1 / sin(d2r * r);	        dlt = atan2(c * sin(d2r * h), r * cos(d2r * dc) - c * cos(d2r * h));	        dlt *= r2d;	        hh = h + dlt;	        dlt /= 15;	        ra -= dlt;	        dc = atan(cos(d2r * hh) * ((r * sin(d2r * dc) - s) /	            (r * cos(d2r * dc) * cos(d2r * h) - c)));	        dc *= r2d;	    }	    equ2ecl(ra, dc, ob);	    l += ay;	    if (l < 0.0) l += 360.0;	    document.frmResult.npmoon.value = lon2dmsz(l);	    nk = (l * 60) / 800.0; // get nakshatra	    with(Math) {	        document.frmResult.nnakshatra.value = naks[floor(nk)] + ' : Padham ' + pada(l);	    }	}	// Calculate Ayanamsa using J2000 Epoch	function calcayan(t) {	    with(Math) {	        ln = 125.0445550 - 1934.1361849 * t + 0.0020762 * t * t; // Mean lunar node	        off = 280.466449 + 36000.7698231 * t + 0.00031060 * t * t; // Mean Sun		        off = 17.23 * sin(d2r * ln) + 1.27 * sin(d2r * off) - (5025.64 + 1.11 * t) * t;	        off = (off - 85886.27) / 3600.0;	    }	    return off;	}	function jul2mdy(JD) {	    var str;	    with(Math) {	        L = floor(JD + 0.5) + 68569;	        N = floor((4 * L) / 146097);	        L -= floor((146097 * N + 3) / 4);	        IT = floor((4000 * (L + 1)) / 1461001);	        L -= floor((1461 * IT) / 4) - 31;	        JT = floor((80 * L) / 2447);	        K = L - floor((2447 * JT) / 80);	        L = floor(JT / 11);	        JT += 2 - 12 * L;	        IK = 100 * (N - 49) + IT + L;	        str = "(M/D/Y) ";	        str += floor(JT); // month 	        str += "/" + floor(K); // day	        str += "/" + floor(IK); // year	    }	    return str;	}	function ut2gst(t, ut) {	    t0 = 6.697374558 + (2400.051336 * t) + (0.000025862 * t * t);	    ut *= 1.002737909;	    t0 += ut;	    while (t0 < 0.0) t0 += 24;	    while (t0 > 24.0) t0 -= 24;	    return t0;	}	function ecl2equ(ln, la, ob) {	    with(Math) {	        y = asin(sin(d2r * la) * cos(d2r * ob) + cos(d2r * la) * sin(d2r * ob) * sin(d2r * ln));	        dc = r2d * y;	        y = sin(d2r * ln) * cos(d2r * ob) - tan(d2r * la) * sin(d2r * ob);	        x = cos(d2r * ln);	        x = atan2(y, x);	        x = r2d * x;	        if (x < 0.0) x += 360;	        ra = x / 15;	    }	}	function equ2ecl(ra, dc, ob) {	    ra *= 15;	    with(Math) {	        y = sin(d2r * ra) * cos(d2r * ob) + tan(d2r * dc) * sin(d2r * ob);	        x = cos(d2r * ra);	        x = atan2(y, x);	        x *= r2d;	        if (x < 0) x += 360;	        pln = x;	        y = asin(sin(d2r * dc) * cos(d2r * ob) - cos(d2r * dc) * sin(d2r * ob) * sin(d2r * ra));	        pla = r2d * y;	    }	}	// build string with degrees, minutes, seconds and zodiac sign from longitude	// calculate Julian Day from Month, Day and Year	function mdy2julian(m, d, y) {	    with(Math) {	        im = 12 * (y + 4800) + m - 3;	        j = (2 * (im - floor(im / 12) * 12) + 7 + 365 * im) / 12;	        j = floor(j) + d + floor(im / 48) - 32083;	        if (j > 2299171) j += floor(im / 4800) - floor(im / 1200) + 38;	        return j;	    }	}	// keep within 360 degrees	function fix360(v) {	    while (v < 0.0) v += 360;	    while (v > 360) v -= 360;	    return v;	}	function calculate1() {	    with(Math) {	        var mon = floor(document.frmInput.Month.value);	        var day = floor(document.frmInput.Day.value);	        var year = floor(document.frmInput.Year.value);	        var hr = floor(document.frmInput.Hour.value);	        hr += floor(document.frmInput.Min.value) / 60;	        var tz = floor(document.frmInput.ZHour.value);	        tz += floor(document.frmInput.ZMin.value) / 60;	        var ln = floor(document.frmInput.LonDeg.value);	        ln += floor(document.frmInput.LonMin.value) / 60;	        var la = floor(document.frmInput.LatDeg.value);	        la += floor(document.frmInput.LatMin.value) / 60;	    }	    // checks for checked DST, East, South	    var dst = document.frmInput.DST;	    var eln = document.frmInput.East;	    var sla = document.frmInput.South;	    if (eln.checked) ln = -ln;	    if (sla.checked) la = -la;	    if (dst.checked) {	        if (ln < 0.0) tz++;	        else tz--;	    }	    jd = mdy2julian(mon, day, year);	    if (ln < 0.0) f = hr - tz;	    else f = hr + tz;	    t = ((jd - 2415020) + f / 24 - 0.5) / 36525;	    ay = calcAyanamsa(t);	    ra = (((6.6460656 + 2400.0513 * t + 2.58e-5 * t * t + f) * 15 - ln) % 360) * d2r; // RAMC	    ob = (23.452294 - 0.0130125 * t) * d2r; // Obliquity of Ecliptic	    with(Math) {	        // Calculate Midheaven	        mc = atan2(tan(ra), cos(ob));	        if (mc < 0.0) mc += PI;	        if (sin(ra) < 0.0) mc += PI	        mc *= r2d;	        // Calculate Ascendant	        as = atan2(cos(ra), -sin(ra) * cos(ob) - tan(la * d2r) * sin(ob));	        if (as < 0.0) as += PI;	        if (cos(ra) < 0.0) as += PI;	        as *= r2d % 360.0;	    }	    // add Ayanamsa	    as = fix360(as + ay);	    mc = fix360(mc + ay);	    document.frmResult.Asc.value = lon2dmsz(as);	    calculate();	}	// Calculate the Lahiri Ayanamsa 	function calcAyanamsa(t) {	    ln = ((933060 - 6962911 * t + 7.5 * t * t) / 3600.0) % 360.0; /* Mean lunar node */	    Off = (259205536.0 * t + 2013816.0) / 3600.0; /* Mean Sun        */	    Off = 17.23 * Math.sin(d2r * ln) + 1.27 * Math.sin(d2r * Off) - (5025.64 + 1.11 * t) * t;	    Off = (Off - 80861.27) / 3600.0;	    return Off;	}	function lon2dmsz(x) {	    with(Math) {	        var d, m, s, q;	        x = abs(x);	        d = floor(x);	        m = (x - d);	        s = m * 60;	        m = floor(s);	        s = s - m;	        z = floor(d / 30);	        d %= 30;	        //str = d + "° " + m + "' " + floor(s * 60) + "\" " + zn.substr(z*3,3);	        //str = zn.substr(z*3,3);	        str = zn[floor(z)];	    }	    return str;	}	function pada(x) {	    with(Math) {	        return 1 + floor(x / 13.333) % 4;	    }	}	// write degrees minutes	function writedms(x) {	    with(Math) {	        var d, m, s;	        if (x < 0.0) sgn = -1;	        else sgn = 1;	        x = abs(x);	        d = floor(x);	        m = (x - d);	        s = m * 60;	        m = floor(s);	        s = s - m;	        str = (d * sgn) + "° " + m + "' " + floor(s * 60) + "\"";	    }	    return str;	}
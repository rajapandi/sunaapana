// JavaScript Document
 // Returns integer portion of x
         function trunc(x)
         {
            if (x < 0)
               return Math.ceil(x);
            else
               return Math.floor(x);
         }

         // Returns fractional portion of x
         function frac(x)
         {
            return Math.abs(x - trunc(x));
         }

         // Converts x (degrees) into radians
         function radians(x)
         {
            return (Math.PI/180 * x);
         }

         // Converts x (radians) into degrees
         function degrees(x)
         {
            return (180/Math.PI * x);
         }

         // Normalizes x (degrees) between 0 and 360
         function norm(x)
         {
            x = x % 360;
            if (x < 0)
               x += 360;
            return x;
         }

         // Provides an unambiguous version of atan(y/x)
         function invtan(y,x)
         {
            ap = degrees(Math.atan(y/x));
            if (y > 0)
            {
               if (x > 0)
               {
                  for (j=-360;j<=360;j+=180)
                  {
                     a = ap + j;
                     if ((a >= 0) && (a < 90))
                        return a;
                  }
               }
               else
               {
                  for (j=-360;j<=360;j+=180)
                  {
                     a = ap + j;
                     if ((a >= 90) && (a < 180))
                        return a;
                  }
               }
            }
            else
            {
               if (x < 0)
               {
                  for (j=-360;j<=360;j+=180)
                  {
                     a = ap + j;
                     if ((a >= 180) && (a < 270))
                        return a;
                  }
               }
               else
               {
                  for (j=-360;j<=360;j+=180)
                  {
                     a = ap + j;
                     if ((a >= 270) && (a < 360))
                        return a;
                  }
               }
            }
            return ap;
         }

         // Validates form entry fields
         function validate()
         {
            if ((parseInt(document.first.TH.value) < 1) || (parseInt(document.first.TH.value) > 12))
            {
               alert("Hour must be between 1 and 12");
               return false;
            }
            if ((parseInt(document.first.TM.value) < 0) || (parseInt(document.first.TM.value) > 59))
            {
               alert("Minute must be between 0 and 59");
               return false;
            }
            if ((parseInt(document.first.TS.value) < 0) || (parseInt(document.first.TS.value) > 59))
            {
               alert("Second must be between 0 and 59");
               return false;
            }
            return true;
         }

         // Returns entered time in Universal Time format
         function getUT()
         {
            hr = parseFloat(document.first.TH.value) + 12 * parseFloat(document.first.TAMPM.options[document.first.TAMPM.selectedIndex].value);
            if (hr % 12 == 0)
               hr -= 12;
            min = parseFloat(document.first.TM.value);
            sec = parseFloat(document.first.TS.value);
            
            if(isNaN(min)){min=0;}
            if (isNaN(sec)){sec=0;}
            
            hr = hr + min/60 + sec/3600;
            if (parseFloat(document.first.TCS.options[document.first.TCS.selectedIndex].value) == 0)
               hr = hr - parseFloat(document.first.TC.value);
            else
               hr = hr + parseFloat(document.first.TC.value);
            return hr;
         }

         // Returns entered date in Julian Day format
         // Argument is for fraction of day
         function getJD(time)
         {
            year = parseFloat(document.first.DY.value);
            month = parseFloat(document.first.DM.options[document.first.DM.selectedIndex].value);
            date = parseFloat(document.first.DD.value);
            date = date + time/24;
            correction = false;

            if ((year > 1582) ||
                ((year == 1582) && (month > 10)) ||
                ((year == 1582) && (month == 10) && (day >= 15)))
            {
               correction = true;
            }
            if (month <= 2)
            {
               year--;
               month += 12;
            }
            if (correction)
            {
               A = trunc(year/100);
               B = 2 - A + trunc(A/4);
            }
            else
               B = 0;
            if (year < 0)
               C = trunc((365.25 * year) - 0.75);
            else
               C = trunc(365.25 * year);
            D = trunc(30.6001 * (month + 1));
            return B + C + D + date + 1720994.5;
         }

         // Performs calculation for Moon's position
         function calculate()
         {
            if (validate())
            {
               //
               // NOTE: Epoch used is 1990 January 0.0
               //

               // Time calculations
               UT = getUT();                                         // Universal Time
               document.first.UT.value = UT;
               JD = getJD(UT);                                       // Julian Day
               document.first.JD.value = JD;
               D = JD - 2447891.5;                                   // Days since epoch
               document.first.D.value = D;
               T = (JD - 2415020)/36525;                             // Julian Century

               // Sun calculations
               eg = 279.403303;                                      // Mean ecliptic longitude of Sun at epoch
               wg = 282.768422;                                      // Ecliptic longitude of Sun at perigee at epoch
               e = 0.016713;                                         // Eccentricity of Earth's orbit at epoch
               N = norm(360/365.242191 * D);
               Ms = norm(N + eg - wg);                               // Mean anomaly of Sun
               document.first.MS.value = Ms;
               Ec = 360/Math.PI * e * Math.sin(radians(Ms));
               ls = norm(N + Ec + eg);                               // Longitude of Sun
               document.first.LS.value = ls;

               // Moon calculations
               l0 = 318.351648;                                      // Mean longitude of Moon at epoch
               P0 = 36.340410;                                       // Mean longitude of perigee at epoch
               N0 = 318.510107;                                      // Mean longitude of node at epoch
               i = 5.145396;                                         // Inclination of Moon's orbit
               l = norm(13.1763966*D + l0);                          // Mean longitude of Moon
               document.first.L.value = l;
               Mm = norm(l - 0.1114141*D - P0);                      // Mean anomaly of Moon
               document.first.MM.value = Mm;
               N = norm(N0 - 0.0529539*D);                           // Mean longitude of ascending node
               C = l - ls;
               Ev = 1.2739 * Math.sin(radians(2*C-Mm));              // Correction for evection
               Ae = 0.1858 * Math.sin(radians(Ms));                  // Correction for annual equation
               A3 = 0.37 * Math.sin(radians(Ms));                    // Third correction
               Mmp = norm(Mm + Ev - Ae - A3);                        // Corrected anomaly of Moon
               document.first.MMP.value = Mmp;
               Ec = 6.2886 * Math.sin(radians(Mmp));                 // Correction for equation of the centre
               A4 = 0.214 * Math.sin(radians(2*Mmp));                // Fourth correction
               lp = norm(l + Ev + Ec - Ae + A4);                     // Corrected longitude of Moon
               document.first.LP.value = lp;
               V = 0.6583 * Math.sin(radians(2*(lp-ls)));            // Variation
               lpp = norm(lp + V);                                   // True orbital longitude of Moon
               document.first.LPP.value = lpp;
               Np = norm(N - 0.16*Math.sin(radians(Ms)));            // Corrected longitude of node
               lm = invtan(Math.sin(radians(lpp-Np))*Math.cos(radians(i)),Math.cos(radians(lpp-Np))) + Np;
                                                                     // Ecliptic longitude of Moon
               document.first.LM.value = lm;
               bm = norm(degrees(Math.asin(Math.sin(radians(lpp-Np)) * Math.sin(radians(i)))));
                                                                     // Ecliptic latitude of Moon
               document.first.BM.value = bm;
               e = (23+26/60+21.45/3600) - (46.815/3600)*T - (0.0006/3600)*T*T + (0.00181/3600)*T*T*T;
                                                                     // Obliquity of the ecliptic
               ra = invtan(Math.sin(radians(lm))*Math.cos(radians(e)) - Math.tan(radians(bm))*Math.sin(radians(e)),Math.cos(radians(lm)));
                                                                     // R.A. of Moon
               ra /= 15;                                             // Convert from degrees to hours
               rah = trunc(ra);
               ram = trunc(frac(ra) * 60);
               ras = trunc(frac(frac(ra) * 60) * 60);
               document.first.RAH.value = rah;
               document.first.RAM.value = ram;
               document.first.RAS.value = ras;
               dec = norm(degrees(Math.asin(Math.sin(radians(bm))*Math.cos(radians(e)) + Math.cos(radians(bm))*Math.sin(radians(e))*Math.sin(radians(lm)))));
                                                                     // Dec. of Moon
               if (dec > 90)
                  dec -= 360;
               decd = trunc(dec);
               decm = trunc(frac(dec) * 60);
               decs = trunc(frac(frac(dec) * 60) * 60);
               document.first.DECD.value = decd;
               document.first.DECM.value = decm;
               document.first.DECS.value = decs;
               nak(ra,dec,e);
            }
         }

         // Perform Nakshatram calculation based on Moon's position
         function nak(ra,dec,e)
         {
            AngleBetEqAndEcliptic = e;
            FPAShift = 22.3488;
           StarsMalayalam = ["Ashwini (Aswathi)","Bharani","Krithika (Karthikai)","Rohini","Mrigasira (Magayiriyam)",
                          "Thiruvathira (Athira)","Punarvasu (Punartham)","Pushya (Pooyam)","Aslesha (Ayilyam)","Magha (Makam)",
                          "Purva Phalguni (Pooram)","Uttara Phalguni (Uthram)","Hasta (Atham)","Chitra (Chithira)","Swati (Chothy)",
                          "Visakha (Visakam)","Anuradha (Anizham)","Jyestha (Triketta)","Moola (Moolam)","PurvaAshadha (Pooradam)",
                          "UttaraAshadha (Uthradam)","Sravana (Thiruvonam)","Dhanishta (Avittam)","Satabhisha (Chathayam)",
                          "PurvaBhadra (Pururuttathy)","UttaraBhadra (Uthrattathy)","Revathi"];
		   
		   
		   
		   

                        StarsEnglish = ["Sheratan (Beta Arietis)",
                            "41 Arietis",
                            "Pleiades (Nu Tauri)",
                            "Aldebaran (Alpha Tauri)",
                            "Heka",
                            "Betelgeuse (Alpha Orionis)",
                            "Pollux (Beta Geminorum)",
                            "Asellus Australis (Delta Cancri)",
                            "Acubens (Alpha Cancri)",
                            "Regulus (Alpha Leonis)",
                            "Zosma (Delta Leonis)",
                            "Denebola (Beta Leonis)",
                            "Algorab (Delta Corvi)",
                            "Spica (Alpha Virginis)",
                            "Arcturus (Alpha Bootis)",
                            "Iota Librae",
                            "Delta Scorpii",
                            "Antares (Alpha Scorpii)",
                            "Shaula (Lambda Scorpii)",
                            "Kaus Media (Delta Sagittarii)",
                            "Nunki (Sigma Sagittarii)",
                            "Altair (Alpha Aquilae)",
                            "Alpha Delphini",
                            "Lambda Aquarii",
                            "Markab (Alpha Pegasi)",
                            "Alpheratz (Alpha Andromedae)",
                            "Zeta Piscium"];

            RA = radians(ra * 360/24);

            D = radians(dec);

            E = radians(AngleBetEqAndEcliptic);
            A = radians(360/27);
            R = Math.sin(D) * Math.sin(E) + Math.cos(D) * Math.cos(E) * Math.sin(RA);
            R = R / (Math.cos(D) * Math.cos(RA));

            if (Math.cos(RA) * Math.cos(D) < 0)
               S = Math.PI;
            else
               S = 0;

            if (Math.abs(Math.cos(D) * Math.cos(RA)) > 0.00000001)
               L = Math.atan(R) + S;
            else
               L = Math.PI/2 + S;

            L = L - radians(FPAShift) + 10 * Math.PI;
            N = 270 + Math.floor(L/A);
            N = N % 27;

            document.first.NAL.value = StarsMalayalam[N];

            document.first.NALE.value = StarsEnglish[N];
            
            var t=parseInt(document.first.TAMPM.options[document.first.TAMPM.selectedIndex].value);
            
            rasi1(StarsMalayalam[N],t);
     
         }
         
         
         
         
         
function rasi1(n,t)
{
  rasi = ["Mesham","Rishabam","Midhunam","Kadagam","Simmam","Kanni","Thulaam","Viruchigam","Dhanusu","Magaram","Kumbam","Meenam"]; 
  english=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Saggitarius","Capricorn","Aquarius","Pisces"];
  if(n==StarsMalayalam[0] || n==StarsMalayalam[1] || (n==StarsMalayalam[2] && t==0))
    {
     document.first.rasi.value = rasi[0];
    document.first.eng.value = english[0];
     } else if(n==StarsMalayalam[2] || n==StarsMalayalam[3] || (n==StarsMalayalam[4] && t==0))
           {
             document.first.rasi.value = rasi[1];document.first.eng.value = english[1];
            } else if(n==StarsMalayalam[4] || n==StarsMalayalam[5] || (n==StarsMalayalam[6] && t==0))
                    {
                      document.first.rasi.value = rasi[2];document.first.eng.value = english[2];
                     } else if(n==StarsMalayalam[6] || n==StarsMalayalam[7] || n==StarsMalayalam[8])
                           {
                              document.first.rasi.value = rasi[3];document.first.eng.value = english[3];  
                            } else if(n==StarsMalayalam[9] || n==StarsMalayalam[10] || (n==StarsMalayalam[11] && t==0))  
                                 {
                                    document.first.rasi.value = rasi[4];document.first.eng.value = english[4];              
                                  } else if(n==StarsMalayalam[11] || n==StarsMalayalam[12] || (n==StarsMalayalam[13] && t==0))
                                        {
                                         document.first.rasi.value = rasi[5];document.first.eng.value = english[5];
                                         } else if(n==StarsMalayalam[13] || n==StarsMalayalam[14] || n==StarsMalayalam[15])
                                                 {
                                                   document.first.rasi.value = rasi[6];document.first.eng.value = english[6];
                                                  } else if(n==StarsMalayalam[15] || n==StarsMalayalam[16] || n==StarsMalayalam[17])
                                                        {
                                                         document.first.rasi.value = rasi[7];document.first.eng.value = english[7];
                                                         } else if(n==StarsMalayalam[18] || n==StarsMalayalam[19] || (n==StarsMalayalam[20] && t==0))
                                                              {
                                                            document.first.rasi.value = rasi[8];document.first.eng.value = english[8];
                                                               }else if(n==StarsMalayalam[21] || n==StarsMalayalam[22] || (n==StarsMalayalam[23] && t==0))
                                                                  {
                                                                    document.first.rasi.value = rasi[9];document.first.eng.value = english[9];
                                                                    }else if(n==StarsMalayalam[23] || n==StarsMalayalam[24] || n==StarsMalayalam[25])
                                                                          {
                                                                             document.first.rasi.value = rasi[10];document.first.eng.value = english[10];
                                                                           }else if(n==StarsMalayalam[25] || n==StarsMalayalam[26] || n==StarsMalayalam[27])
                                                                              {
                                                                                 document.first.rasi.value = rasi[11];document.first.eng.value = english[11];
                                                                               }
                    }
                    

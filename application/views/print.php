<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title> com Print Out</title>
        <meta name="robots" content="nofollow" />
        <link rel="shortcut icon" href=""/>
        <style type="text/css">

            body{
                font-family:Arial,Helvetica,sans-serif;
                font-size:12px;
                text-transform:capitalize
            }

           table a{
                text-decoration:none;
                color:#15c;
                font-weight:bold;
                
            }

            table{
                border:1px solid #000;
                border-bottom:0
            }
            table th{
                text-align:left;
                font-size:14px;
                border-bottom:1px solid #000
            }
            table td{
                padding:2px;
                border-bottom:1px solid #000
            }



            @media print{
                a{
                    text-decoration:none;
                    color:#000;
                    font-weight:bold
                }
                table{
                    border:1px solid #000;
                    border-bottom:0
                }
                table th{
                    text-align:left;
                    font-size:14px;
                    border-bottom:1px solid #000
                }
                table td{
                    padding:2px;
                    border-bottom:1px solid #000
                }
                #btn{
                    display:none
                }
                #cnt{
                    display:none
                }
            }


            <?php if ($mode == 'print') { ?>

                @media screen{
                    #print{
                        display:none
                    }
                    #btn img{
                        position:absolute;
                        margin:-90px 0 0 -50px
                    }
                    #btn{
                        padding:5px;
                        border:1px solid #000;
                        cursor:pointer;
                        font-size:16px;
                        color:#fff;
                        font-weight:bold;
                        background:#ff3019;
                        background:url(data:image/svg+xml;
                            base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmMzAxOSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjZjA0MDQiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
                        background:-moz-linear-gradient(top,#ff3019 0,#cf0404 100%);
                        background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#ff3019),color-stop(100%,#cf0404));
                        background:-webkit-linear-gradient(top,#ff3019 0,#cf0404 100%);
                        background:-o-linear-gradient(top,#ff3019 0,#cf0404 100%);
                        background:-ms-linear-gradient(top,#ff3019 0,#cf0404 100%);
                        background:linear-gradient(to bottom,#ff3019 0,#cf0404 100%);
                        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3019',endColorstr='#cf0404',GradientType=0)
                    }
                }

            <?php } ?>
        </style>
    </head>
    <body>
        <div id="print">
            <img src="<?php echo base_url() ?>/resources/images/logo.png" alt=""  height="75" />
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <th style="width:3%;text-align:center;"> #</th>
                <th>Name</th>
                <th>Meaning</th>
                <th style="width:8%;text-align:left;">Gender</th>
                <th style="width:8%;text-align:left;">Numerology</th>

                <?php
                $total_names = count($names);

                for ($i = 0; $i < $total_names; $i++) {

                    $id = $nameids[$i];

                    $url = base_url("names/details/$id");
                    ?>






                    <tr>
                        
                        <td style="text-align:center;"><span><?php echo ($i + 1); ?></span></td>
                        <td><a href="<?php echo $url ?>"> <?php echo $names[$i]; ?> </a></td>
                        <td><?php echo $meaning[$i]; ?></td>
                        <td><?php echo $gender[$i]; ?></td>
                        <td style="text-align:center;"><?php echo $numerology[$i]; ?></td>
                    </tr>

<?php } ?>




            </table>
            <p>&nbsp;</p>
            <p>Best Wishes from<strong> abc.com</strong></p>
            <p><strong>Copyright © 2018 abc.com</strong></p>
        </div>
<?php if ($mode == 'print') { ?>
            <div id="cnt" style="text-align:center; top:50%; position:absolute; left:50%; margin:0px 0 0 -115px;">
                You have selected <?php echo $total_names ?> Best Baby names
                <div onclick="window.print()" id="btn"><img src="images/boygirlicon.jpg" alt="" />[ Print ]</div>
            </div>

<?php } ?>
    </body>
</html>
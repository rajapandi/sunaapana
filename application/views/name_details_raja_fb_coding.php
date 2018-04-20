<section id="home" class="ml-15 pl-10 pr-10  mb-20">

    <div class="row">

        <div class="col-sm-8 box-wrap p-15 " style="min-height: 300px;">
            <div class="row" id="head">

                <h5 class="text-center">Baby Name   >   <?php echo $name ?></h5>


            </div>
            <div class="row" id="ng">

                <div class="col-sm-3">
                    <div class="short-div">  <b>Baby Name</b> </div>
                    <div class="short-div"><b>Gender</b> </div>
                </div>
                <div class="col-sm-3">
                    <div class="short-div"> <span class="text-capitalize">: <?php echo $name ?></span> </div>
                    <div class="short-div"> <span class="text-capitalize">: <?php echo $gender ?></span> </div>
                </div>
                <div class="col-sm-6"> 


                    <script>


                        var saltid = getc('tgbnid');
                        var nmode = 'l';
                        var items = localStorage.getItem(saltid);
                        items_arr = items.split(" ");



                    </script>


                    <script>
                        var compId = '<?php echo $baby_name_id; ?>';
                        activeIcon = 'fa-heart-o';
                        if ($.inArray(compId, items_arr) > -1) {
                            nmode = 'u';
                            activeIcon = 'fa-heart';
                        }

                        var likanc = '<p><a href="javascript:void(0)" data-mode="' + nmode + '" data-uid="<?php echo $baby_name_id ?>" class="like-anc pull-right mt-10">';
                        likanc += '<span class="icon-stack like-plus">';
                        likanc += '<i class="fa ' + activeIcon + ' icon-stack-3x parent-ic"></i>';
                        likanc += '<span class="bg-icon-circle"><i class="do-md"></i></span></a></p>';

                        document.write(likanc);



                    </script>



                    <p class="text-right"><strong><span class="like-count" title="like"><?php echo $likes; ?></span></strong></p>
    <!--a href="" class="v pull-right" data-toggle="tooltip"  style="margin-right:2px;"><i class="fa fa-heart like-plus" style="padding-top: 30px; color:#c00;"  aria-hidden="true" tittle="like"></i></a -->
                </div>

            </div>
            <div class="row" id="mtic">
                <div class="col-sm-4">
                    <b>Meaning of <?php echo $name ?> </b>
                </div>
                <div class="col-sm-8">
                    <a href="javascript:void(0)" class="p pull-right mn-tgg" id="mn-anc" data-toggle="tooltip"  style="margin-right:2px;"><i class="fa fa-pencil text-center" aria-hidden="true"></i></a>
                </div>       

            </div>
            <div class="row" id="am">
                <div class="col-sm-12">
                    <span class="text-capitalize"> <?php echo $meanings ?></span>
                    <p class="text-success" id="mn_msg"></p>
                    <div id="mn-warp">
                        <input type="text" name="mn" id="mn" class="form-control" placeholder="Add Meaning" />
                        <div class="btn-warp pull-right mt-10">
                            <button type="button" class="btn btn-danger mn-tgg" id="mn-anc-close"><i class="fa fa-remove"></i> Cancel</button>
                            <button type="button" class="btn btn-primary" id="mnsb" data-uid="<?php echo $baby_name_id ?>"><i class="fa fa-print"></i> Save</button>
                        </div> 


                    </div>

                </div><br>
            </div>
            <div class="row" id="mtic">
                <div class="col-sm-4">
                    <b>Origin/Tags </b>
                </div>
            </div>
            <div class="row" id="ng">
                <div class="col-sm-8 inline-block" style="">
                    <?php

                    function random_color_part() {
                        return str_pad(dechex(mt_rand(0, 255)), 2, '0', STR_PAD_LEFT);
                    }

                    function random_color() {
                        return random_color_part() . random_color_part() . random_color_part();
                    }

                    //$color =  dechex(rand(0x000000, 0xFFFFFF));

                    $tags_arr = explode(',', $tags);


                    foreach ($tags_arr as $value) {

                        echo '<span class="label" style="margin-right:5px; margin-bottom:5px; background:#' . random_color() . '">' . ucwords($value) . '</span>';
                    }
                    ?>





                </div>
            </div>
            <div class="row" id="mtic">
                <div class="col-sm-4">
                    <b>More Info</b>
                </div>
                <div class="col-sm-8">
                    <a href="" class="p pull-right" data-toggle="tooltip"  style="margin-right:2px;"><i class="fa fa-pencil text-center" aria-hidden="true"></i></a>
                </div>  

            </div>
            <div class="row" id="am">
                <div class="col-sm-4">
                    <a href="#">Add more</a>
                </div>
            </div>
            <div class="row" id="mtic">
                <div class="col-sm-4"> 
                    <b>Comments on <?php echo $name ?> </b>
                </div>
            </div>
            <div class="row" id="comment">
                <div class="col-sm-4"> 
                    <b>Comments  </b>
                </div>
            </div>
            <div class="row">

                <div class="col-md-12">

                    <div id="fb-root"></div>
                    <script>(function (d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id))
                                return;
                            js = d.createElement(s);
                            js.id = id;
                            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=832278336921088&autoLogAppEvents=1';
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));</script>

                    
                    <div class="fb-comments" data-href="http://www.bellsmatrimony.com/" data-numposts="5"></div>
                    
                    
                </div>



                <div class="media" style="padding:10px 0;">
                    <div class="col-sm-2 media-left">
                        <img src="<?php echo base_url('resources/images/image.png') ?>" class="media-object" style="height:60px; width:70px; padding:0 10px">
                    </div>
                    <div class="media-body">
                        <div class="col-sm-10">
                            <textarea rows="2" class="text pull-left" placeholder="Add comment.."></textarea>
                        </div>
                    </div>
                </div>   
            </div>


        </div>
        <div class="col-sm-4">
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive" />
        </div>


    </div>
</section>
<style>
    .home{
        font-size: 4px;
    }
    #mtic
    {
        font-size: 100%;
        line-height: 36px;
        padding: 0 10px;
        background: #f5f5f5;
    }
    #am{
        padding: 10px;
        line-height: 1.5em;
    }
    #ng{
        font-size: 100%;
        line-height: 40px;
        padding: 0 10px;

    }
    #head{

        border-bottom: 1px solid #bbb;
        margin: 0;
        padding: 0 10px;
        line-height: 30px;
        background: #e8e8e8;

        background: linear-gradient(#fff,#ddd);
    }
    .v {
        display: inline-block;
        margin-left: 7px;
    }
    .p {
        display: inline-block;
        margin-left: 7px;
    }
    #comment{
        font-size: 100%;
        line-height: 36px;
        padding: 0 10px;
        border-bottom: 1px solid lightgrey;
    }
    .text{

        height: 60px;
        width:560px;
        padding: 10px 10px;
    }
    .fa{
        font-size: inherit;

    }
    .inline-block{
        font-size:18px;
    }


</style>

<?php

function getRandomColor() {
    $letters = '0123456789ABCDEF';
    $color = '#';
    for ($i = 0; $i < 6; $i++) {
        $color += $letters[Math . floor(random() * 16)];
    }
    return color;
}
?>





<style>

    .fa-heart{
        color:grey;
    }

    /*.bg-icon-circle{
    background:yellow;
    width:30px;
    height:30px;
    line-height:30px;
    border-radius:50%;
    
    }*/

    .icon-stack {
        position: relative;
        display: inline-block;

        vertical-align: middle;
    }

    .icon-stack-3x{
        font-size:30px;
    }

    .icon-stack-overlay {
        line-height: inherit;
        position: absolute;
        color:red;
        left:18px;
        top:4px;
        text-shadow: 2px 3px #fff;
        text-align:center;
    }











</style>




<style>
    tr.hover {
        cursor: pointer;
        /* whatever other hover styles you want */
    }

    tr.hover td{

        background: #eeeeee;
    }
</style>

<script>


    $(document).ready(function () {

        $('#mn-warp').hide();

        $(document).on('click', '.mn-tgg', function () {
            $('#mn_msg').empty();
            $('#mn-warp').slideToggle(500);
            $('#mn').val('');
            if (!$("#mn-warp").is(":hidden"))
            {
                $('#mn').focus();
            }
        });

        /* $(document).on('click', '#mn-anc-close', function () {
         $('#mn-warp').hide();
         });*/


        $('#mnsb').click(function () {

            var uid = $.trim($(this).attr('data-uid'));

            var _elt = $('#mn');

            var vl = $.trim(_elt.val());

            if (vl != '' && uid != '') {

                $.ajax({
                    type: "POST",
                    url: base_url + 'home/admn',
                    data: {id: uid, mn: vl},
                    dataType: "JSON",
                    success: function (data) {

                        if (data.rs) {

                            $('#mn_msg').text('Thanks. We will review this name');



                        } else {
                            technoNotify('', 'cannot add', 'error');
                        }


                        setTimeout(function () {
                            $('#mn_msg').empty();
                        }, 2000);

                        $('#mn-warp').slideToggle(500);


                    }
                    ,
                    error: function (x, y, z) {

                        technoNotify('', 'Sorry something went wrong...', 'error');
                    },
                    beforeSend: function () {
                        $('#axloader').show();
                    },
                    complete: function () {
                        $('#axloader').hide();
                    }
                });




            } else {
                _elt.focus();
            }



        });


        /* ********************/

        /* ********************/














        var _this = '';
        var iCls = '';
        var parent_ic = '';

        $(document).on("mouseenter", ".like-anc", function () {

            _this = $(this);

            parent_ic = _this.find('.parent-ic');



            iCls = (_this.attr('data-mode') == 'l') ? 'fa fa-plus icon-stack-1x icon-stack-overlay ' : 'fa fa-minus icon-stack-1x icon-stack-overlay ';

            $(this).find('.like-plus .do-md').addClass(iCls);
        });

        $(document).on("mouseleave", ".like-anc", function () {



            $(this).find('.like-plus .do-md').removeClass(iCls);

        });


        $(document).on('click', '.like-anc', function () {
            _this = $(this);

            _like_span = $('.like-count');
            like = _like_span.text();
            like = parseFloat(like);

            parent_ic = _this.find('.parent-ic');

            parent_ic_cls = (parent_ic.hasClass('fa-heart-o')) ? "fa-heart" : "fa-heart-o";

            var uid = _this.data('uid');
            var mode = _this.attr('data-mode');

            if ($.trim(uid) != '') {

                $.ajax({
                    type: "POST",
                    url: base_url + 'home/like',
                    data: {id: uid, md: mode},
                    dataType: "JSON",
                    success: function (data) {

                        if (data.rs) {


                            like = (mode === 'l') ? like + 1 : like - 1;

                            saltid = getc('tgbnid');

                            item = localStorage.getItem(saltid);
                            item = ($.trim(item) != '') ? item : '';



                            if (mode == 'l') {
                                _this.attr('data-mode', 'u');
                                item = item + uid + " ";
                            } else {
                                _this.attr('data-mode', 'l');
                                var likeid = new RegExp("\\b" + uid + "\\b", 'g');
                                item = item.replace(likeid, '').replace(/\s{2,}/g, ' ');
                            }


                            parent_ic.removeClass('fa-heart');
                            parent_ic.removeClass('fa-heart-o');
                            parent_ic.addClass(parent_ic_cls);

                            try {


                                localStorage.setItem(saltid, item);


                            } catch (e) {
                            }

                            _like_span.text(like);

                        } else {

                            technoNotify('', 'cookies not allowed', 'error');

                        }



                    }
                    ,
                    error: function (x, y, z) {

                        technoNotify('', 'Sorry something went wrong...', 'error');
                    },
                    beforeSend: function () {
                        //$('#axloader').show();
                        _this.addClass('liking');

                    },
                    complete: function () {
                        // $('#axloader').hide();
                        _this.removeClass('liking');
                    }
                });

            }


        });
    });



</script>
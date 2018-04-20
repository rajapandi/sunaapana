<?php
$this->load->view('inc/character_filter');
?>





<section id="home" class="pl-10 pr-10  mb-20">

    <div class="row">

        <div class=" col-md-8">
            <div class="box-wrap">






                <?php if (isset($data)) { ?>
                    <table class="table table-bordered" >
                        <thead class="">
                            <tr>
                                <th style="width:10%">Like</th>
                                <th style="width:30%">Name</th>
                                <th>Meaning</th>
                                <th style="width:13%">Numerology</th>
                                <th style="width:12%">Action</th>
                            </tr>
                        </thead>
                        <tbody>


                        <script>


                            var saltid = getc('tgbnid');
                            var nmode = 'l';
                            var items = localStorage.getItem(saltid);
                            items_arr = (typeof items_arr === 'undefined') ? [] : items.split(" ");



                        </script>



                        <?php foreach ($data as $row) {
                            ?>

                            <tr>
                                <td>
                                    <script>
                                        var compId = '<?php echo $row->baby_name_id ?>';
                                        activeIcon = 'fa-heart-o';
                                        if ($.inArray(compId, items_arr) > -1) {
                                            nmode = 'u';
                                            activeIcon = 'fa-heart';
                                        }

                                        var likanc = '<a href="javascript:void(0)" data-mode="' + nmode + '" data-uid="<?php echo $row->baby_name_id ?>" class="like-anc">';
                                        likanc += '<span class="icon-stack like-plus">';
                                        likanc += '<i class="fa ' + activeIcon + ' icon-stack-3x parent-ic"></i>';
                                        likanc += '<span class="bg-icon-circle"><i class="do-md"></i></span></a>';

                                        document.write(likanc);



                                    </script>

                                                                        <!--a href="javascript:void(0)" data-mode="l" data-uid="<?php //echo $row->baby_name_id          ?>" class="like-anc pull-left" ><i class="like-plus"  title="like"></i></a> <span class="like-count pull-right" title="like"><?php //echo $row->likes;          ?></span-->
                                    <span class="like-count" title="like"><?php echo $row->likes; ?></span>

                                </td>
                                <td><a class="name_link" href="<?php echo base_url("names/details/$row->baby_name_id") ?>"><?php echo ucwords($row->baby_name) ?></a></td>
                                <td><?php 
                                
                                echo $m = $this->n->getSingleMeaning($row->baby_name_id);
                                
                                 ?>



                                </td>
                                <td class="text-center">

 

                                    <?php echo $mn =  $this->Global_model->get_numerology_no($row->baby_name); ?></td>

                                <td>

                                   <div id="<?php echo 'babynameWpId_' . $row->baby_name_id; ?>" class="abs"><img src="<?php echo base_url() ?>resources/img/flower-md.png" alt="" height="0"></div>
                                    <div class="basket-add-img" title="Add Baby name To Basket">
                                        <a href="#" onclick="return false;" class="add-to-basket">
                                            <img src="<?php echo base_url() ?>resources/img/cart.png" alt="" data-uid="<?php echo $row->baby_name_id ?>" data-m="<?php echo $m ?>" data-g="<?php echo $row->baby_gender ?>" data-n="<?php echo $mn ?>"      >
                                        </a>
                                    </div>
                                    <!--a href="javascript:void(0)" data-mode="l" data-uid="17" class="add-basket">
                                        <span class="icon-stack">
                                            <i class="fa fa-heart icon-stack-3x parent-ic"></i>
                                            <span class="bg-icon-circle"><i class="fa fa-plus icon-stack-overlay"></i></span></span></a -->

                                </td>

                            </tr>




                        <?php } ?>
                        </tbody>
                    </table>


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

                    <?php if (isset($links)) { ?>
                        <div class="text-center">
                            <?php echo $links ?>
                        </div>
                    <?php } ?>

                <?php } else { ?>
                    <div>No name(s) found.</div>
                <?php } ?>

            </div>
        </div>

        <div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive" style="width:100%; margin-bottom: 30px;" />


            <div id="fb-root"></div>
            <script>(function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id))
                        return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));</script>

            <div class="fb-page" data-href="https://www.facebook.com/technogenesis/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/technogenesis/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/technogenesis/">Techno Genesis</a></blockquote></div>




        </div>


    </div>



</section>

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

        var _this = '';
        var iCls = '';
        var parent_ic = '';

        $(document).on("mouseenter", ".like-anc", function () {

            _this = $(this);

            _row = _this.closest('tr');
            parent_ic = _row.find('.parent-ic');



            iCls = (_this.attr('data-mode') == 'l') ? 'fa fa-plus icon-stack-1x icon-stack-overlay ' : 'fa fa-minus icon-stack-1x icon-stack-overlay ';

            $(this).find('.like-plus .do-md').addClass(iCls);
        });

        $(document).on("mouseleave", ".like-anc", function () {



            $(this).find('.like-plus .do-md').removeClass(iCls);

        });


        $(document).on('click', '.like-anc', function () {
            _this = $(this);
            _row = _this.closest('tr');
            _like_span = _row.find('.like-count');
            like = _like_span.text();
            like = parseFloat(like);

            parent_ic = _row.find('.parent-ic');

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
                        console.log(x);
                        console.log(y);
                        console.log(z);
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


    /*
     $(document).ready(function() { 
     $('table tbody tr').click( function() {
     
     
     console.log($(this).index())
     //window.location = $(this).find('a.name_link').attr('href');
     
     
     }).hover( function() {
     $(this).toggleClass('hover');
     });
     });
     
     */
</script>
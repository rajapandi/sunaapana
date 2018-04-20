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
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($data as $row) {
                                ?>

                                <tr>
                                    <td><a href="javascript:void(0)" data-mode="l" data-uid="<?php echo $row->baby_name_id ?>" class="f-20 like-anc" ><i class="fa fa-heart like-plus" aria-hidden="true" title="like"></i></a> <span class="like-count" title="like"><?php echo $row->likes; ?></span>
                                    </td>
                                    <td><a class="name_link" href="<?php echo base_url("names/details/$row->baby_name_id") ?>"><?php echo ucwords($row->baby_name) ?></a></td>
                                    <td><?php echo ucwords($row->baby_name) ?></td>
                                    <td class="text-center"><?php echo $this->Global_model->get_numerology_no($row->baby_name); ?></td>
                                </tr>

                            <?php } ?>
                        </tbody>
                    </table>

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
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive" />
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



        $('.like-anc').click(function () {
            _this = $(this);
            _row = _this.closest('tr');
            _like_span = _row.find('.like-count');
            like = _like_span.text();
            like = parseFloat(like);

            var uid = _this.data('uid');
            var mode = _this.data('mode');

            if ($.trim(uid) != '') {

                $.ajax({
                    type: "POST",
                    url: base_url + 'home/like',
                    data: {id: uid, md: mode},
                    dataType: "JSON",
                    success: function (data) {

                        if (data.rs) {
                            
                            alert(mode + " " + like)
                            like = (mode === 'l') ? like + 1 : like-1;

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
                        $('#axloader').show();

                    },
                    complete: function () {
                        $('#axloader').hide();
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
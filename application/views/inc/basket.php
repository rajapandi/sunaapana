

<div id="basketContainer" class="xs-hid">
    <form method="post" id="print_basket" action="<?php echo base_url('home/print_names') ?>" >
        <div id="basketClose" title="Close baby name basket">X</div>
        <div id="basketTitleWrap"><img src="<?php echo base_url() ?>resources/img/basket.png" alt="babyname basket">Baby Name Basket <span id="notificationsLoader"></span></div>
        <div id="basketItemsWrap">

            <ul>
                <li style="display: none;"></li>

            </ul>



        </div>


        <table border="0" cellpadding="0" cellspacing="0" id="cb">
            <tbody><tr>
                    <th colspan="2">Organize your baby name in basket its Free! its allow you to print names, send them to your friends or colleagues.</th>
                </tr>
                <tr>

                    <td class="bnt">

                        <input type="hidden" name="mode" id="mode" value="print" />
                        <button  type="button" class="btn-primary sbbas" data-mode="print">Print</button><button type="button" class="btn-success sbbas" data-mode="email">Email</button></td>
                    <td><div id="slctd">0</div></td>
                </tr>
            </tbody></table>
    </form>
</div>

<script>
    $('.sbbas').click(function () {
        $('#mode').val($(this).attr('data-mode'));
        $('#print_basket').submit();
    });


</script>

<div id="c_wrp"><div id="crtbtn">+ Open Basket</div></div>





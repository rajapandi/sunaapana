
<?php if($this->session->flashdata('success')){ ?>
<script>
   $(document).ready(function() {
   
   technoNotify("", "<?php echo $this->session->flashdata('success'); ?>", "success");
   });
</script>
<?php }else if($this->session->flashdata('error')){  ?>
<script>
   $(document).ready(function() {
   technoNotify("", "<?php echo $this->session->flashdata('error'); ?>",  "error");
   });
</script>
<?php }else if($this->session->flashdata('warning')){  ?>
<script>
   $(document).ready(function() {
   
   technoNotify("", "<?php echo $this->session->flashdata('warning'); ?>", "error");
   });
</script>
<?php }else if($this->session->flashdata('info')){  ?>
<script>
   $(document).ready(function() {
   technoNotify("", "<?php echo $this->session->flashdata('info'); ?>",  "info");
   });
</script>
<?php } ?>


<?php include 'loader.php' ?>





<div class="header-top">
      <div class="row">
		<div class="col-md-4">
			<a href="<?php echo base_url() ?>">
 <img src="<?php echo base_url() ?>resources/images/logo.png" class="main-logo" height="75" alt="logo" >
 </a>
		</div>
		<div class="col-md-8">
			
			<a href="<?php echo base_url() ?>">
 <img src="<?php echo base_url() ?>resources/images/hor_ad.jpg" class="main-logo img-responsive" height="90" alt="ads" >
 </a>
			
			
		</div>
	</div>
</div>











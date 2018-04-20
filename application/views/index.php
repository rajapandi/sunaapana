<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
      <meta name="description" content="Baby Names Services">
      <meta name="author" content="TechnoGenesis">
      <meta name="keywords" content="Baby Names Services">
     
 

<title> <?php echo 'Baby Names | '.' '.$page_title ; ?></title>

      <?php   $this->load->view('inc/top.php');?>
      
   </head>
 <body>
 
 
 <!--?php   $this->load->view('inc/left_fullpage_ad.php'); ? -->
 
   
   <div  class="full-page">
   <div id="wrapper" class="clearfix">
   	
   	
   	<header id="header" class="header">
    
    <?php   $this->load->view('inc/top_header.php');?> 
    
    
    <?php   $this->load->view('inc/menu.php');?>
    
    
    
    
    
  </header>
  
  
   	
   
   <!-- Start main-content -->
   <div class="main-content">
   
   <?php include $page_name.'.php' ?>
   
 
  
  </div>
  
   <?php   $this->load->view('inc/footer.php');?>
  
   <?php   $this->load->view('inc/bottom.php');?>
   
   
   
   </div>
    </div>
   
   <!--?php   $this->load->view('inc/right_fullpage_ad.php');? -->
   
   
   
   <?php   $this->load->view('inc/modals.php');?>
   
   
   </body>
</html>
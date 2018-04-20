$(document).ready(function(){
Dropzone.autoDiscover = false;
	
      
   $('#profile-photo-upload').dropzone({
      paramName: 'files', // The name that will be used to transfer the file
      uploadMultiple: false,
      maxFilesize: 2, //MB 
      maxFiles: 10,   
      parallelUploads: 1,
      addRemoveLinks: false,
      autoProcessQueue: true,      
      init: function() {          
        dz = this;      
		var filename = '';
		
		
		 // On adding file
     /*   dz.on('addedfile', function(file) {            
          submitButton.css('display','block');            
        });

        // On removing file
        dz.on('removedfile', function(file) {            
          if(!dz.getQueuedFiles().length){
            submitButton.css('display','none');
          }
        });  

        // On clicking submit button start upload process
        submitButton.click(function(){
          dz.processQueue();
        }); */

        // process files queue if left to upload
        dz.on('success', function(file, response) {
		
		var response = JSON.parse(response);
		var filename = response.file;	

		if(filename != ''){
		 location.reload();	

		}
         /* if(dz.getQueuedFiles().length) {              
            dz.processQueue();
          }*/
		  
		  
		  
        });

        // Send file starts
     /*   dz.on('sending', function(file, xhr, formData) {             
          formData.append('dz',1); // set to create  
          formData.append('client',JSON.stringify(client));                          
          $('.meter').show();
        });

        // File upload Progress
        dz.on('totaluploadprogress', function(progress) {            
          $('.roller').width(progress + '%');
        });
		
		*/
		
		

        dz.on('queuecomplete', function(progress) {
        
		
     
        });            
      }
    });
	
	});
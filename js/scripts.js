
/*    framework : jQuery 
*     Name  : scripts.js
*     Location : ~js\scripts.js
*     Reference : http://jquery.com/
*     CDN       : https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js   
*     -------------------------------------------------------

//    The  simulated User Interface for the web chat 
//    This file is reffered in chatPopUp.html

/* 
*     varible   : msg 
*     @type     : varible 
*     purpose   : generate  message with <p> tag as a response according to user queries.    
*     -------------------------------------------------------
*     varible   : robotMsg 
*     @type     : varible 
*     purpose   : generate  message with <p> tag as a response according to user queries.    
*     -------------------------------------------------------
*     varible   : send 
*     @type     : function 
*     purpose   : collect the user chat and show into the chat window.    
*     -------------------------------------------------------
*     varible   : robot 
*     @type     : varible 
*     purpose   : stores name for robot.    
*     -------------------------------------------------------
*     varible   : userName 
*     @type     : varible 
*     purpose   : stores name for user Name.    
*     -------------------------------------------------------
*     varible   : robotMsgCollection 
*     @type     : array 
*     purpose   : stores robot pe defined  answers collections.
*     -------------------------------------------------------
*     varible   : msgCounter 
*     @type     : varible 
*     purpose   : Initializing variable msgCounter as zero.    
*     -------------------------------------------------------
*
*/

$(function(){
	var msg, 
	robotMsg, 
	userChat, 
	send,
	robot = "Mary", 
	userName = "Nicholas", 
	chat,
	robotMsgCollection = ['How may I help you today?',
	'To rest your password just click on the details menu. Ounce you have clicked the menu a new page will appear. Select the link chage password. From this link it will take you to a screen where you can chage your password'],
	msgCounter = 0,

/*	
*     -------------------------------------------------------
*     varible   : chat 
*     @type     : function 
*     purpose   : responds the user question .    
*     -------------------------------------------------------
*/

	chat = function(){
		msg = robotMsgCollection[msgCounter];
		if(msg){

//    onece user click the "Chat now" button then show a message from robot.
			if (msgCounter === 0){
				msg = "Hi "+userName +" this is "+robot+" form Abank. " +msg;
			}
			msgCounter++;

//    Generates first automatic message.
			robotMsg = '<p class="robot"> <strong>'+robot +' :</strong>"'+ msg +'"</p>';
			$(".chatMsg").append(robotMsg);

		}else{

//    If there is no message in the response collection,
			robotMsg = '<p class="robot"> <strong>'+robot +' :</strong>Thank you. </p>';
			$(".chatMsg").append(robotMsg);
		}
	};


/*	
*     -------------------------------------------------------
*     varible   : send 
*     @type     : function 
*     purpose   : send() sending response message to the chat window.    
*     -------------------------------------------------------
*/
	send = function(){
		if($('#textarea').val()){
			msg = $('#textarea').val();
			$('#textarea').val('');
			userChat = '<p class="user"> <strong>'+userName +' :</strong>"'+ msg +'"</p>';
			$(".chatMsg").append(userChat);
			setTimeout(chat, 3000);
		}
		
	};

//   The send function triggered for Keyup event of Enter Key
	$('#textarea').keyup(function(e){
		if(e.which === 13){
			send();
		}
	});

//   The send function triggered for Click button event.
	$("#send").on('click',function(){
		send();
	});

//  initiate the chat on clicking the "Chat Now" button.
	$("#chatform").on('click','button.chatNow', function(){
		$(".chatMsg h2").hide();
		$(this).hide();
		$(".chatbox").show();
		setTimeout(chat, 1000);
	});
});
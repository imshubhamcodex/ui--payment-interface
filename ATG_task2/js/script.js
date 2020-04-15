window.onload = function(){
	document.getElementById('on-radio').checked = true;
	document.getElementById('money-calc').style.display='none';
}
window.onclick = function(e){
	if(e.target == document.getElementById('p-div') || e.target == document.getElementById('p-img') )
	{
		document.getElementsByClassName('modal-footer')[0].innerHTML = `
			<h4 id="money-calc" style="float: left; width: 80%; display:none;"><b>Total Cost: ₹ <span id="money">0</span> </b></h4>
			<button id="close-btn" style="display: none;" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button id="next-btn" type="button" class="btn btn-primary" disabled >Next →</button>

		`
		document.getElementById('p-radio').checked = true;
		document.getElementById('p-div').style.backgroundColor = 'rgba(0,191,255,0.1)';
		document.getElementById('f-div').style.backgroundColor = 'transparent';
		document.getElementById('next-btn').disabled = false;


		
	}
	if(e.target == document.getElementById('f-div') || e.target == document.getElementById('f-img'))
	{
		document.getElementById('f-radio').checked = true;
		document.getElementById('f-div').style.backgroundColor = 'rgba(0,191,255,0.1)';
		document.getElementById('p-div').style.backgroundColor = 'transparent';
		document.getElementById('next-btn').disabled = false;

			if(document.getElementById('head').textContent != "Single-cost event or multiple-cost event?"){
				document.getElementById('next-btn').onclick = function(){
				document.getElementById('close-btn').click();
			}
			document.getElementById('next-btn').textContent = "Done  .";
			document.getElementById('next-btn').style.backgroundColor = "#1bc47d";
			document.getElementById('next-btn').style.borderColor = 'transparent';
			document.getElementById('next-btn').style.outline = '0px';
		}


		
	}

	if(e.target == document.getElementById('next-btn') && document.getElementById('p-radio').checked == true && document.getElementById('head').textContent=="Paid-event or Free-event?")
	{
		document.getElementsByClassName('modal-title')[0].innerHTML = `

		<b><span onclick="changenav()" aria-hidden="true" style="margin-right: 25px;zoom:1.5;cursor: pointer;">&larr;</span>Paid Event<b>

		`;
		document.getElementById('p-img').src="img/single.png";
		document.getElementById('f-img').src="img/multi.png";
		document.getElementById('head').textContent = "Single-cost event or multiple-cost event?"
	}


	else if(e.target == document.getElementById('next-btn') && document.getElementById('p-radio').checked == true && document.getElementById('field').style.display == 'none' && document.getElementById('next-btn').textContent=="Next →" )
	{
		document.getElementById('event-type').style.display = 'none';
		document.getElementById('single-div').style.display = 'block';

		document.getElementsByClassName('modal-title')[0].innerHTML = `

		<b><span onclick="changenav()" aria-hidden="true" style="margin-right: 25px;zoom:1.5;cursor: pointer;">&larr;</span>Price & Availability<b>

		`;


			document.getElementById('next-btn').onclick = function(){
				var regex = /[0-9]/;
				if(regex.test(document.getElementById('price-single').value)){
					document.getElementById('close-btn').click();
					document.getElementById('price-single').style.border = '0';
					document.getElementById('single-price-logo').style.border = '0';

				}
				
				else{
					document.getElementById('price-single').style.border = '1px solid red';
					document.getElementById('single-price-logo').style.border = '1px solid red';
					document.getElementById("price-single").className += " Red";
				}
				
			}
			document.getElementById('next-btn').textContent = "Done  .";
			document.getElementById('next-btn').style.backgroundColor = "#1bc47d";
			document.getElementById('next-btn').style.borderColor = 'transparent';
			document.getElementById('next-btn').style.outline = '0px';
		
	}

	

	if(e.target == document.getElementById('online') || e.target == document.getElementById('on') ){
		document.getElementById('on-radio').checked = true;
		
	}
	if(e.target == document.getElementById('offline') || e.target == document.getElementById('off') ){
		document.getElementById('off-radio').checked = true;
	}

	if(document.getElementById('f-radio').checked == true && document.getElementById('head').textContent == "Single-cost event or multiple-cost event?" && e.target == document.getElementById('next-btn') && document.getElementById('field').style.display=='none' && document.getElementById('next-btn').textContent=="Next →"){
		document.getElementById('money-calc').style.display='block';
		document.getElementsByClassName('modal-title')[0].innerHTML = `

		<b><span onclick="changenav()" aria-hidden="true" style="margin-right: 25px;zoom:1.5;cursor: pointer;">&larr;</span>Multiple Ticket<b>

		`;

		document.getElementsByClassName('modal-footer')[0].innerHTML = `
				<h4 id="money-calc" style="float: left; width: 80%;"><b>Total Cost: ₹ <span id="money">0</span> </b></h4>
			<button id="close-btn" style="display: none;" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button id="next-btn" type="button" class="btn btn-primary" >Done  .</button>

		`;
			document.getElementById('next-btn').style.backgroundColor = "#1bc47d";
			document.getElementById('next-btn').style.borderColor = 'transparent';
			document.getElementById('next-btn').style.outline = '0px';


			document.getElementById('event-type').style.display = 'none';
			document.getElementById('field').style.display = 'block';
			document.getElementById('add-btn').style.display = 'inline';
			document.getElementById('f-radio').checked = false; 
			document.getElementById('f-div').style.backgroundColor='transparent';
			document.getElementById('p-radio').checked = true; 
			document.getElementById('p-div').style.backgroundColor='rgba(0,191,255,0.1)';
	}
	if(e.target == document.getElementById('next-btn') && (document.getElementById('field').style.display == 'none'|| document.getElementById('add-btn').style.display == 'inline'))
	{
			var regex = /[0-9]/;
		 	if(document.getElementById('field').style.display == 'block' && regex.test(document.getElementById('price-field').value)){
		 		if(document.getElementById('money').textContent == '0'){
		 			document.getElementById('money').textContent = document.getElementById('price-field').value;
		 			document.getElementById('launch').click();
		 		}

		 		else if(document.getElementById('field').style.display=='none')
		 			document.getElementById('launch').click();


		 	}
		 	else{
		 			
		 			if(document.getElementById('field').style.display=='block'){
		 				document.getElementById('price-field').style.border="1px solid red";
						document.getElementById('r-btn').style.border="1px solid red";
						document.getElementById('price-field').classList+=" Red";
		 			}

		 			else if(document.getElementById('money-calc').style.display == ''){
		 				document.getElementById('launch').click();
		 			}	
		 			
		 	}
		 			
	}

	if(e.target == document.getElementById('next-btn')&&document.getElementById('field').style.display == 'block')
	{
		var regex = /[0-9]/;
		if(regex.test(document.getElementById('price-field').value)){
			document.getElementById('price-field').style.border="0";
			document.getElementById('r-btn').style.border="0";
			document.getElementById('price-field').classList=" ";
			
			document.getElementById('close-btn').click();
		}
	}

	
}






function changenav(){


	if(document.getElementById('event-type').style.display == 'none' && Array.from(document.getElementById('data-list').children).length!=0 )
	{
			let allItem = document.getElementsByClassName("item-class");
			Array.from(allItem).forEach( function(element, index) {
					element.remove(); 

			});



			count=0;
			document.getElementById('money-calc').style.display='none';
			document.getElementById('add-btn').style.display='none';



			document.getElementById('data-list').innerHTML+= `

				<li class="item-class" id="field" style="display:block;"><b><span id="span-field" class="span-class"></span>${count+1}</b><span style="float:right; margin-right:5px;"><i class="fa fa-chevron-up" aria-hidden="true" style="display:none;"></i></span>
				<div class="demo-box" style="display:block;">
					<div class="detail-box">
						<ul>
							<li>
								<h4>Category?<span onclick="hide()"><i style="float:right; cursor:pointer;" class="fa fa-minus-circle" aria-hidden="true"><em style="margin-left:3px;"> Remove</em></i></span></h4>
								<input type="text" id="catValue" name="cat" placeholder="Example: Entry, food or parking etc.">
							</li>
							<li>
								<h4>Description</h4>
								<textarea id="text-field"  name="" placeholder="Description"></textarea>
							</li>
							<li>
								<h4>Ticket price for this category?</h4>
								<div class="dropdown show" style="display: inline;">
								  <a id="r-btn" class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color:rgb(221,221,221,0.7); height:40px;margin-bottom:5px; color:black;border:0;outline:0;">
								   <b>₹</b>
								  </a>

								  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
								    	<a class="dropdown-item" href="#">$</a>
									    <a class="dropdown-item" href="#">£</a>
									    <a class="dropdown-item" href="#">€</a>
								  </div>
								</div>
								<input id="price-field" type="text" name="price" placeholder="Price per ticket">
							</li>
						</ul>
					</div>	
				</div>
			</li>

			`
			document.getElementById('field').style.display = 'none';

	}



	if(document.getElementById('head').textContent == "Paid-event or Free-event?")
	{
		document.getElementById('close-btn').click();
	}

 if(document.getElementById('head').textContent == "Single-cost event or multiple-cost event?" && document.getElementById('event-type').style.display != 'none')
	{
		document.getElementById('p-img').src = "img/p.png";
		document.getElementById('f-img').src = "img/f.png";
		document.getElementById('head').textContent = "Paid-event or Free-event?";
		document.getElementsByClassName('modal-title')[0].innerHTML = `

		<b><span onclick="changenav()" aria-hidden="true" style="margin-right: 25px;zoom:1.5;cursor: pointer;">&times;</span>Event Type<b>

		`;

		document.getElementsByClassName('modal-footer')[0].innerHTML = `
				<h4 id="money-calc" style="float: left; width: 80%;display:none;"><b>Total Cost: ₹ <span id="money">0</span> </b></h4>
			<button id="close-btn" style="display: none;" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button id="next-btn" type="button" class="btn btn-primary"  >Next →</button>

		`

	}
	if(document.getElementById('event-type').style.display == 'none')
	{
		document.getElementById('event-type').style.display = 'block';
		document.getElementById('single-div').style.display =  'none';
		document.getElementsByClassName('modal-title')[0].innerHTML = `

		<b><span onclick="changenav()" aria-hidden="true" style="margin-right: 25px;zoom:1.5;cursor: pointer;">&larr;</span>Paid Event<b>

		`;

		document.getElementsByClassName('modal-footer')[0].innerHTML = `
				<h4 id="money-calc" style="float: left; width: 80%;display:none;"><b>Total Cost: ₹ <span id="money">0</span> </b></h4>
			<button id="close-btn" style="display: none;" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button id="next-btn" type="button" class="btn btn-primary" >Next →</button>

		`;
	
	}

	
}




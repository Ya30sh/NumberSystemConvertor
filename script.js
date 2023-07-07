let dropdownvalue  = document.getElementById("item");
let value = document.getElementById("value");
let value2 = document.getElementById("value2");
let ans = document.getElementById("ans");
let que = document.getElementById("que");
tempque = 0;
flag = 0;

function dropdown(temp) {
	value.innerHTML = temp;
}

function dropdown2(temp2) {
	value2.innerHTML = temp2;
}

function convert(){
	if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Decimal'){
		pattern = [0-9];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit between (0-9)";
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5 and 6' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5 and 6' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				ans.value = arrayanswer;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Binary'){
		pattern = [0-1];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0 and 1) only";
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=8){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=9){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(9,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				// ans.value = arrayanswer;
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		tempvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 2;
			temparray0 = parseInt(temparray0/2);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Binary'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 2;
					temparray0 = parseInt(temparray0/2);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(2/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 2)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-3'){
		pattern = [0-2];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1 and 2) only";
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-3'){	
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}	
			else{

				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-3'){
	temp = que.value.trim()+'.0';
	temparray = (temp.split('.'));
	temparray0 = temparray[0].split('');
	temparray2 = temparray[1].split('');
	temparray1 = temparray0.reverse();
	arrayanswer = 0;

	for(i=0;i<temparray1.length;i++){
		if(parseInt(temparray1[i]) >= 6){
			flag = 1;
			break;
		}else{
			arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
		}
	}

	if(flag != 0){
		ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
		flag = 0;
	}
	else{
		for(i=0;i<temparray2.length;i++){
			if(parseInt(temparray2[i]) >=6){
				flag = 1;
				break;
			}
			else{
				arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 3;
				temparray0 = parseInt(temparray0/3);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
			}
			ans.value = tempans1;
		}		
	}	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 3;
			temparray0 = parseInt(temparray0/3);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-3'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 3;
					temparray0 = parseInt(temparray0/3);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(3/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 3)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-4'){	
		pattern = [0-3];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2 and 3) only";
		}
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-4'){
	temp = que.value.trim()+'.0';
	temparray = (temp.split('.'));
	temparray0 = temparray[0].split('');
	temparray2 = temparray[1].split('');
	temparray1 = temparray0.reverse();
	arrayanswer = 0;

	for(i=0;i<temparray1.length;i++){
		if(parseInt(temparray1[i]) >= 6){
			flag = 1;
			break;
		}else{
			arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
		}
	}

	if(flag != 0){
		ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
		flag = 0;
	}
	else{
		for(i=0;i<temparray2.length;i++){
			if(parseInt(temparray2[i]) >=6){
				flag = 1;
				break;
			}
			else{
				arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 4;
				temparray0 = parseInt(temparray0/4);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
			}
			ans.value = tempans1;
		}		
	}	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(9,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 4;
			temparray0 = parseInt(temparray0/4);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-4'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 4;
					temparray0 = parseInt(temparray0/4);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(4/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 4)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 5;
				temparray0 = parseInt(temparray0/5);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
			}
			ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-5'){
		pattern = [0-4];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3 and 4) only";
		}	
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}			
		}
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 5;
			temparray0 = parseInt(temparray0/5);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-5'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 5;
					temparray0 = parseInt(temparray0/5);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(5/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 5)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 6;
				temparray0 = parseInt(temparray0/6);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
			}
			ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	

	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-6'){
		pattern = [0-5];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4 and 5) only";
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 6;
			temparray0 = parseInt(temparray0/6);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-6'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 6;
					temparray0 = parseInt(temparray0/6);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(6/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 6)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 7;
				temparray0 = parseInt(temparray0/7);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
			}
			ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-7'){
		pattern = [0-6];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5 and 6) only";
		}
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim() + ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 7;
			temparray0 = parseInt(temparray0/7);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-7'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 7;
					temparray0 = parseInt(temparray0/7);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(7/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 7)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 8;
				temparray0 = parseInt(temparray0/8);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
			}
			ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Octal'){
		pattern = [0-7];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6 and 7) only";
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Octal'){
		temp = que.value.trim() + ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 8;
			temparray0 = parseInt(temparray0/8);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Octal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 8;
					temparray0 = parseInt(temparray0/8);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(8/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 8)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				tempvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
			temparray0 = parseInt(temp.split("."));
			empvalue = 0;
			tempans = "";
			ans1 = ""
			ans2 = 0
			tempans1 = "";

			while(temparray0 >= 0){
				tempvalue = temparray0 % 9;
				temparray0 = parseInt(temparray0/9);
				tempans = tempans+tempvalue;
				if(temparray0 == 0){
					temparray0 = -1;
				}
			}

			ans1 = tempans.split("");
			ans2 = ans1.reverse();

			for(i=0;i<ans2.length;i++){
				tempans1 = tempans1 + ans2[i] + "";
			}

			tempans1 = tempans1 + "."; 
			temparray1 = temp.split(".");
			length = Math.pow(10,temparray1[1].length);

			for(i=0;i<4;i++){
				ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
				tempans1 = tempans1 + ans1;
				temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
			}
			ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-9'){
		pattern = [0-8];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7 and 8) only";
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 9;
			temparray0 = parseInt(temparray0/9);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-9'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 9;
					temparray0 = parseInt(temparray0/9);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(9/length)));
					tempans1 = tempans1 + ans1;
					temparray1[1] = ((parseFloat(temparray1[1] * 9)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 11;
			if(tempvalue == '10'){
				tempvalue = "A" + "";
			}
			temparray0 = parseInt(temparray0/11);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
			if(ans1 == 10){
				ans1 = "A";
			}
			tempans1 = tempans1 + ans1;
			temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-11'){
		pattern = ['aA0-9'];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and A) only";
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-11'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 11;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					temparray0 = parseInt(temparray0/11);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(11/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 11)) - ans1*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 12;
			if(tempvalue == '10'){
				tempvalue = "A" + "";
			}
			else if(tempvalue == '11'){
				tempvalue = "B" + "";
			}
			temparray0 = parseInt(temparray0/12);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
			if(ans1 == 10){
				ans1 = "A";
			}
			else if(ans1 == 11){
				ans1 = "B";
			}
			tempans1 = tempans1 + ans1;
			if(ans1 == "A"){
				ans1 = 10;
			}
			else if(ans1 == "B"){
				ans1 = 11;
			}
			temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-12'){
		pattern = ['a-bA-B0-9'];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A and B) only";
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-12'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 12;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					temparray0 = parseInt(temparray0/12);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(12/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 12)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 13;
			if(tempvalue == '10'){
				tempvalue = "A" + "";
			}
			else if(tempvalue == '11'){
				tempvalue = "B" + "";
			}
			else if(tempvalue == '12'){
				tempvalue = "C" + "";
			}
			temparray0 = parseInt(temparray0/13);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
			if(ans1 == 10){
				ans1 = "A";
			}
			else if(ans1 == 11){
				ans1 = "B";
			}
			else if(ans1 == 12){
				ans1 = "C";
			}
			tempans1 = tempans1 + ans1;
			if(ans1 == "A"){
				ans1 = 10;
			}
			else if(ans1 == "B"){
				ans1 = 11;
			}
			else if(ans1 == "C"){
				ans1 = 12;
			}
			temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-13'){
		pattern = ['a-cA-C0-9'];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B and C) only";
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-13'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 13;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					temparray0 = parseInt(temparray0/13);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(13/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 13)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 14;
			if(tempvalue == '10'){
				tempvalue = "A" + "";
			}
			else if(tempvalue == '11'){
				tempvalue = "B" + "";
			}
			else if(tempvalue == '12'){
				tempvalue = "C" + "";
			}
			else if(tempvalue == '13'){
				tempvalue = "D" + "";
			}
			temparray0 = parseInt(temparray0/14);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
			if(ans1 == 10){
				ans1 = "A";
			}
			else if(ans1 == 11){
				ans1 = "B";
			}
			else if(ans1 == 12){
				ans1 = "C";
			}
			else if(ans1 == 13){
				ans1 = "D";
			}
			tempans1 = tempans1 + ans1;
			if(ans1 == "A"){
				ans1 = 10;
			}
			else if(ans1 == "B"){
				ans1 = 11;
			}
			else if(ans1 == "C"){
				ans1 = 12;
			}
			else if(ans1 == "D"){
				ans1 = 13;
			}
			temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-14'){
		pattern = ['a-dA-D0-9'];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C and D) only";
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-14'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 14;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					temparray0 = parseInt(temparray0/14);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(14/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 14)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim() + ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 15;
			if(tempvalue == '10'){
				tempvalue = "A" + "";
			}
			else if(tempvalue == '11'){
				tempvalue = "B" + "";
			}
			else if(tempvalue == '12'){
				tempvalue = "C" + "";
			}
			else if(tempvalue == '13'){
				tempvalue = "D" + "";
			}
			else if(tempvalue == '14'){
				tempvalue = "E" + "";
			}
			temparray0 = parseInt(temparray0/15);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
			if(ans1 == 10){
				ans1 = "A";
			}
			else if(ans1 == 11){
				ans1 = "B";
			}
			else if(ans1 == 12){
				ans1 = "C";
			}
			else if(ans1 == 13){
				ans1 = "D";
			}
			else if(ans1 == 14){
				ans1 = "E";
			}
			tempans1 = tempans1 + ans1;
			if(ans1 == "A"){
				ans1 = 10;
			}
			else if(ans1 == "B"){
				ans1 = 11;
			}
			else if(ans1 == "C"){
				ans1 = 12;
			}
			else if(ans1 == "D"){
				ans1 = 13;
			}
			else if(ans1 == "E"){
				ans1 = 14;
			}
			temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Base-15'){
		pattern = ['a-eA-E0-9'];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D and E) only";
		}
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Base-15'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			else if(temparray1[i]=='F' || temparray1[i] == 'f'){
				temparray1[i] = 15;
			}
			if(temparray1[i] >= 'G' || temparray1[i] >= 'g'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(16,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				else if(temparray2[i]=='F' || temparray2[i] == 'f'){
					temparray2[i] = 15;
				}
				if((temparray2[i]) >= 'G' || temparray2[i] >= 'g'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(16,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E and F' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 15;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					temparray0 = parseInt(temparray0/15);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(15/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 15)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Binary' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 2){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(2,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0 and 1' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=2){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(2,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0 and 1' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;		
			}
		}
	}
	else if(value.innerHTML == 'Base-3' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 3){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(3,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=3){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(3,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-4' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 4){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(4,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2 and 3' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(4,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2 and 3' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-5' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 5){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(5,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=5){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(5,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3 and 4' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-6' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 6){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(6,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=6){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(6,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4 and 5' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}	
	}
	else if(value.innerHTML == 'Base-7' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 7){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(7,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1 and 2' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=7){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(7,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1 and 2' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}
		}		
	}
	else if(value.innerHTML == 'Octal' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 8){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(8,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6 and 7' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-9' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(parseInt(temparray1[i]) >= 9){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(9,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(parseInt(temparray2[i]) >=4){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(8,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7 and 8' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Decimal' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+ ".0";
		temparray0 = parseInt(temp.split("."));
		empvalue = 0;
		tempans = "";
		ans1 = ""
		ans2 = 0
		tempans1 = "";

		while(temparray0 >= 0){
			tempvalue = temparray0 % 16;
			if(tempvalue == '10'){
				tempvalue = "A" + "";
			}
			else if(tempvalue == '11'){
				tempvalue = "B" + "";
			}
			else if(tempvalue == '12'){
				tempvalue = "C" + "";
			}
			else if(tempvalue == '13'){
				tempvalue = "D" + "";
			}
			else if(tempvalue == '14'){
				tempvalue = "E" + "";
			}
			else if(tempvalue == '15'){
				tempvalue = "F" + "";
			}
			temparray0 = parseInt(temparray0/16);
			tempans = tempans+tempvalue;
			if(temparray0 == 0){
				temparray0 = -1;
			}
		}

		ans1 = tempans.split("");
		ans2 = ans1.reverse();

		for(i=0;i<ans2.length;i++){
			tempans1 = tempans1 + ans2[i] + "";
		}

		tempans1 = tempans1 + "."; 
		temparray1 = temp.split(".");
		length = Math.pow(10,temparray1[1].length);

		for(i=0;i<4;i++){
			ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
			if(ans1 == 10){
				ans1 = "A";
			}
			else if(ans1 == 11){
				ans1 = "B";
			}
			else if(ans1 == 12){
				ans1 = "C";
			}
			else if(ans1 == 13){
				ans1 = "D";
			}
			else if(ans1 == 14){
				ans1 = "E";
			}
			else if(ans1 == 15){
				ans1 = "F";
			}
			tempans1 = tempans1 + ans1;
			if(ans1 == "A"){
				ans1 = 10;
			}
			else if(ans1 == "B"){
				ans1 = 11;
			}
			else if(ans1 == "C"){
				ans1 = 12;
			}
			else if(ans1 == "D"){
				ans1 = 13;
			}
			else if(ans1 == "E"){
				ans1 = 14;
			}
			else if(ans1 == "F"){
				ans1 = 15;
			}
			temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
		}
		ans.value = tempans1;
	}
	else if(value.innerHTML == 'Base-11' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i] == ('A') || temparray1[i] == ('a')){
				temparray1[i] = 10;
			}
			if(temparray1[i] >= 'B'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(11,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i] == ('A') || temparray2[i] == ('a')){
					temparray2[i] = 10;
				}
				if(temparray2[i] >= 'B' || temparray2[i] >= 'b'){
					flag = 1;
					break;
				}else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(11,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9 and A' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-12' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]==('A') || temparray1[i]==('a')){
				temparray1[i] =10;
			}
			else if(temparray1[i]==('B') || temparray1[i]==('b')){
				temparray1[i] = 11;
			}
			if((temparray1[i]) >= 'C' || temparray1[i] >= 'c' ){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(12,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]==('A') || temparray2[i]==('a')){
					temparray2[i] =10;
				}
				else if(temparray2[i]==('B') || temparray2[i]==('b')){
					temparray2[i] = 11;
				}
				if((temparray2[i]) >= 'C' || temparray2[i] >= 'c' ){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(12,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A and B' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-13' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			if((temparray1[i]) >= 'D' || temparray1[i] >= 'd'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(13,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				if((temparray2[i]) >= 'D' || temparray2[i] >= 'd'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(13,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B and C' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-14' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			if(temparray1[i] >= 'E' || temparray1[i] >= 'e'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(14,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				if((temparray2[i]) >= 'E' || temparray2[i] >= 'e'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(14,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C and D' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	}
	else if(value.innerHTML == 'Base-15' && value2.innerHTML == 'Hexa-Decimal'){
		temp = que.value.trim()+'.0';
		temparray = (temp.split('.'));
		temparray0 = temparray[0].split('');
		temparray2 = temparray[1].split('');
		temparray1 = temparray0.reverse();
		arrayanswer = 0;

		for(i=0;i<temparray1.length;i++){
			if(temparray1[i]=='A' || temparray1[i] == 'a'){
				temparray1[i] = 10;
			}
			else if(temparray1[i]=='B' || temparray1[i] == 'b'){
				temparray1[i] = 11;
			}
			else if(temparray1[i]=='C' || temparray1[i] == 'c'){
				temparray1[i] = 12;
			}
			else if(temparray1[i]=='D' || temparray1[i] == 'd'){
				temparray1[i] = 13;
			}
			else if(temparray1[i]=='E' || temparray1[i] == 'e'){
				temparray1[i] = 14;
			}
			if(temparray1[i] >= 'F' || temparray1[i] >= 'f'){
				flag = 1;
				break;
			}else{
				arrayanswer = arrayanswer + parseInt(temparray1[i] * (Math.pow(15,i)));
			}
		}

		if(flag != 0){
			ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
			flag = 0;
		}
		else{
			for(i=0;i<temparray2.length;i++){
				if(temparray2[i]=='A' || temparray2[i] == 'a'){
					temparray2[i] = 10;
				}
				else if(temparray2[i]=='B' || temparray2[i] == 'b'){
					temparray2[i] = 11;
				}
				else if(temparray2[i]=='C' || temparray2[i] == 'c'){
					temparray2[i] = 12;
				}
				else if(temparray2[i]=='D' || temparray2[i] == 'd'){
					temparray2[i] = 13;
				}
				else if(temparray2[i]=='E' || temparray2[i] == 'e'){
					temparray2[i] = 14;
				}
				if((temparray2[i]) >= 'F' || temparray2[i] >= 'f'){
					flag = 1;
					break;
				}
				else{
					arrayanswer = (arrayanswer) + parseFloat(((temparray2[i]) * parseFloat((Math.pow(15,-(i+1)))).toFixed(4)));
				}
			}

			if(flag != 0){
				ans.value = "Write proper Number using only '0,1,2,3,4,5,6,7,8,9,A,B,C,D and E' ";
				flag = 0;
			}
			else{
				temp = arrayanswer + ".0";
				temparray0 = parseInt(temp.split("."));
				empvalue = 0;
				tempans = "";
				ans1 = ""
				ans2 = 0
				tempans1 = "";

				while(temparray0 >= 0){
					tempvalue = temparray0 % 16;
					if(tempvalue == '10'){
						tempvalue = "A" + "";
					}
					else if(tempvalue == '11'){
						tempvalue = "B" + "";
					}
					else if(tempvalue == '12'){
						tempvalue = "C" + "";
					}
					else if(tempvalue == '13'){
						tempvalue = "D" + "";
					}
					else if(tempvalue == '14'){
						tempvalue = "E" + "";
					}
					else if(tempvalue == '15'){
						tempvalue = "F" + "";
					}
					temparray0 = parseInt(temparray0/16);
					tempans = tempans+tempvalue;
					if(temparray0 == 0){
						temparray0 = -1;
					}
				}

				ans1 = tempans.split("");
				ans2 = ans1.reverse();

				for(i=0;i<ans2.length;i++){
					tempans1 = tempans1 + ans2[i] + "";
				}

				tempans1 = tempans1 + "."; 
				temparray1 = temp.split(".");
				length = Math.pow(10,temparray1[1].length);

				for(i=0;i<4;i++){
					ans1 = parseInt((temparray1[1] * parseFloat(16/length)));
					if(ans1 == 10){
						ans1 = "A";
					}
					else if(ans1 == 11){
						ans1 = "B";
					}
					else if(ans1 == 12){
						ans1 = "C";
					}
					else if(ans1 == 13){
						ans1 = "D";
					}
					else if(ans1 == 14){
						ans1 = "E";
					}
					else if(ans1 == 15){
						ans1 = "F";
					}
					tempans1 = tempans1 + ans1;
					if(ans1 == "A"){
						ans1 = 10;
					}
					else if(ans1 == "B"){
						ans1 = 11;
					}
					else if(ans1 == "C"){
						ans1 = 12;
					}
					else if(ans1 == "D"){
						ans1 = 13;
					}
					else if(ans1 == "E"){
						ans1 = 14;
					}
					else if(ans1 == "F"){
						ans1 = 15;
					}
					temparray1[1] = ((parseFloat(temparray1[1] * 16)) - parseInt(ans1)*length); 
				}
				ans.value = tempans1;
			}		
		}
	
	}
	else if(value.innerHTML == 'Hexa-Decimal' && value2.innerHTML == 'Hexa-Decimal'){
		pattern = ['a-fA-F0-9'];
		regExp = new RegExp(pattern);
		if(regExp.test(que.value)){
			ans.value = que.value.trim();
		}
		else{
			ans.value = "Enter the Digit (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F) only";
		}
	}
}

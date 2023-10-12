//players turning input
var turn=1
function nextTurn1(){
    if(turn==1){
        document.getElementById('b1').value='X';
        document.getElementById('b1').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b1').value='0';
        document.getElementById('b1').disabled=true;
        turn=1;
    }
}
function nextTurn2(){
    if(turn==1){
        document.getElementById('b2').value='X';
        document.getElementById('b2').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b2').value='0';
        document.getElementById('b2').disabled=true;
        turn=1;
    }

}

function nextTurn3(){
    if(turn==1){
        document.getElementById('b3').value='X';
        document.getElementById('b3').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b3').value='0';
        document.getElementById('b3').disabled=true;
        turn=1;
    }

}
function nextTurn4(){
    if(turn==1){
        document.getElementById('b4').value='X';
        document.getElementById('b4').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b4').value='0';
        document.getElementById('b4').disabled=true;
        turn=1;
    }

}
function nextTurn5(){
    if(turn==1){
        document.getElementById('b5').value='X';
        document.getElementById('b5').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b5').value='0';
        document.getElementById('b5').disabled=true;
        turn=1;
    }

}
function nextTurn6(){
    if(turn==1){
        document.getElementById('b6').value='X';
        document.getElementById('b6').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b6').value='0';
        document.getElementById('b6').disabled=true;
        turn=1;
    }

}
function nextTurn7(){
    if(turn==1){
        document.getElementById('b7').value='X';
        document.getElementById('b7').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b7').value='0';
        document.getElementById('b7').disabled=true;
        turn=1;
    }

}
function nextTurn8(){
    if(turn==1){
        document.getElementById('b8').value='X';
        document.getElementById('b8').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b8').value='0';
        document.getElementById('b8').disabled=true;
        turn=1;
    }

}
function nextTurn9(){
    if(turn==1){
        document.getElementById('b9').value='X';
        document.getElementById('b9').disabled=true;
        turn=0;
    }
    else{
        document.getElementById('b9').value='0';
        document.getElementById('b9').disabled=true;
        turn=1;
    }

}
//reset the game and start new game
function GameReset(){
    location.reload(0);
    document.getElementById('b1').value='';
    document.getElementById('b2').value='';
    document.getElementById('b3').value='';
    document.getElementById('b4').value='';
    document.getElementById('b5').value='';
    document.getElementById('b6').value='';
    document.getElementById('b7').value='';
    document.getElementById('b8').value='';
    document.getElementById('b9').value='';
    
}
// checking win or tie the game
function winner(b1,b2,b3,b4,b5,b6,b7,b8,b9){
    b1=document.getElementById('b1').value;
    b2=document.getElementById('b2').value;
    b3=document.getElementById('b3').value;
    b4=document.getElementById('b4').value;
    b5=document.getElementById('b5').value;
    b6=document.getElementById('b6').value;
    b7=document.getElementById('b7').value;
    b8=document.getElementById('b8').value;
    b9=document.getElementById('b9').value;
    if(((b1=='X') && (b2=='X') && (b3=='X'))||((b1=='0') && (b2=='0') && (b3=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b2').value + ' is win';
        //mark box for win
        document.getElementById('b1').style.color='red';
        document.getElementById('b2').style.color='red';
        document.getElementById('b3').style.color='red';
        //disable others boxes
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
    }
    else if(((b4=='X') && (b5=='X') && (b6=='X')||(b4=='0') && (b5=='0') && (b6=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b5').value + ' is win';
        //mark box for win
        document.getElementById('b4').style.color='red';
        document.getElementById('b5').style.color='red';
        document.getElementById('b6').style.color='red';
        //disable others boxes
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
    }
    else if(((b7=='X') && (b8=='X') && (b9=='X')||(b7=='0') && (b8=='0') && (b9=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b8').value + ' is win';
        //mark box for win
        document.getElementById('b7').style.color='red';
        document.getElementById('b8').style.color='red';
        document.getElementById('b9').style.color='red';
        //disable others boxes
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
    }
    else if(((b3=='X') && (b5=='X') && (b7=='X')||(b3=='0') && (b5=='0') && (b7=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b5').value + ' is win';
        //mark box for win
        document.getElementById('b3').style.color='red';
        document.getElementById('b5').style.color='red';
        document.getElementById('b7').style.color='red';
        //disable others boxes
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
    }
    else if(((b1=='X') && (b5=='X') && (b9=='X')||(b1=='0') && (b5=='0') && (b9=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b5').value + ' is win';
        //mark box for win
        document.getElementById('b1').style.color='red';
        document.getElementById('b5').style.color='red';
        document.getElementById('b9').style.color='red';
        //disable others boxes
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
    }
    else if(((b1=='X') && (b4=='X') && (b7=='X')||(b1=='0') && (b4=='0') && (b7=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b4').value + ' is win';
        //mark box for win
        document.getElementById('b1').style.color='red';
        document.getElementById('b7').style.color='red';
        document.getElementById('b4').style.color='red';
        //disable others boxes
        document.getElementById('b5').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
    }
    else if(((b2=='X') && (b5=='X') && (b8=='X')||(b2=='0') && (b5=='0') && (b8=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b5').value + ' is win';
        //mark box for win
        document.getElementById('b2').style.color='red';
        document.getElementById('b5').style.color='red';
        document.getElementById('b8').style.color='red';
        //disable others boxes
        document.getElementById('b1').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b9').disabled=true;
    }
    else if(((b3=='X') && (b6=='X') && (b9=='X')||(b3=='0') && (b6=='0') && (b9=='0'))){
        document.getElementById('printMessage').innerHTML='Player ' + document.getElementById('b6').value + ' is win';
        //mark box for win
        document.getElementById('b3').style.color='red';
        document.getElementById('b6').style.color='red';
        document.getElementById('b9').style.color='red';
        //disable others boxes
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
    }
    //if tie the game
    else if((b1=='X'||b1=='0')&&(b2=='X'||b2=='0')&&(b3=='X'||b3=='0')&&(b4=='X'||b4=='0')
            &&(b5=='X'||b5=='0')&&(b6=='X'||b6=='0')&&(b7=='X'||b7=='0')
            &&(b8=='X'||b8=='0')&&(b9=='X'||b9=='0')){
                document.getElementById('printMessage').innerHTML='The game is tie !';
    }
}

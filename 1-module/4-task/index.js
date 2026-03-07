function checkSpam(str) {

   let spam1='1xBet', spam2='XXX'; 
   spam1=spam1.toLowerCase();
   spam2=spam2.toLowerCase();
   let strLow=str.toLowerCase();

    if ((strLow.includes(spam1))||(strLow.includes(spam2))) return true; 
  else return false;

}

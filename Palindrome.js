const isPalindrome = (str) => {
  let nstr = String(str);
  nstr = nstr.toUpperCase();
  
  if (nstr.length < 2) {
    return true;
    }
  
  else if (nstr[0] === nstr[nstr.length - 1]){
    nstr = nstr.substr(0,1);
    nstr = nstr.substr(-1, 1);
    return isPalindrome(nstr);
    }
  
  return false;
}

export default isPalindrome;

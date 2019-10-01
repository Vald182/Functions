const isPalindrome = (str) => {
  let nstr = String(str.toUpperCase());
  if (nstr.length < 2) {
    return true;
  }
  else if (nstr[0] === nstr[nstr.length - 1]){
    nstr = nstr.substr(0,1);
    nstr = nstr.substr(-1, 1);
    return isPalindrome(nstr);
  }
  else {
    return false;
  }
}
export defaul isPalindrome;

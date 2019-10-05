const isPalindrome = (str) => {

  const nstr = String(str);
  let res = '';

  for (let i = nstr.length; i > 0; i -= 1) {
    res = res + nstr[i - 1];
  }

  if (res === nstr) {
    return true;
  }

  return false;
}

export default isPalindrome;

const substr = (str, ind = 0, len = 0) => {
  if (ind === 0 && len === 0) {
    return str;
  }

  const nstr = String(str);
  let nlen = len;
  let nind = ind;

  if (nlen === 0 || ind > (nstr.length - 1)) {
    return '';
  }

  if (len < 0) {
    nlen = 1;
  }

  if ((ind + len - 1) > nstr.length) {
    nlen = nstr.length;
  }

  if (ind < 0) {
    nind = 0;
  }

  let result = '';

  for (let i = nind; i < (nlen + nind); i += 1) {
    result += nstr[i];
  }

  return result;
}

export default substr;

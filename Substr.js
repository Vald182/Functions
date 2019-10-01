const substr = (str, ind, len) => {
  if (ind === undefined && len === undefined){
    return str; 
  }

  let nlen = len;
  let nind = ind;
  const nstr = String(str);
  
  if (ind === undefined){
    nind = 0;
  }
  
  if (len === undefined){
    nlen = 0;
  }

  if (nlen === 0 || ind > (nstr.length - 1)){
    return '';
  }

  if (len < 0){
    nlen = 1;
  }

  if ((ind + len - 1) > nstr.length){
    nlen = nstr.length;
  }

  if (ind < 0){
    nind = 0;
  }

  let result = '';

  for (let i = nind; i < (nlen + nind); i += 1){
    result = result + nstr[i];
  }
  return result;
}

export default substr;
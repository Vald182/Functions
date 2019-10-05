const apply = (num = 0, func = n => n, arg) => {
  
  if (arg === undefined) {
    throw new Error('Argument is not found');
  }  
  
  let res = arg;

  for (let i = 0; i < num; i += 1) {
    res = func(res);
  }
  return res;
}

export default apply;

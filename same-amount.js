function sameAmount(string, regex1, regex2) {
    let r1 = new RegExp(regex1, "g");
    let r2 = new RegExp(regex2, "g");
    // const matches1 = string.match(r1) || [];
    const matches1 = string.match(r1);
    // const matches2 = string.match(r2) || [];
    const matches2 = string.match(r2);
  
    // return matches1.length == matches2.length ? matches1.length == matches2.length: []
    // let l1 = matches1.length;
    // let l2 = matches2.length;

    if (matches1 == null || matches2 == null){
        return false
    }
    return matches1.length == matches2.length
  }
// const take = sameAmount('data', /q /, /qqqqqqq/)
// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqwijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
// console.log(!sameAmount(data, /q /, /qqqqqqq/))




// console.log(take)
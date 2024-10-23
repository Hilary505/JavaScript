
/* the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements */
export function getArchitects() {
    let arr = []
    let res = Array.from(document.getElementsByTagName('a'))
    let res1 = Array.from(document.getElementsByTagName('span'))
    arr.push(res)
    arr.push(res1)
    return arr
} 


/* the body of the getClassical function, which returns an array containing 2 arrays of HTML elements */
export function getClassical() {
    let arr =[]
    let res = Array.from(document.getElementsByClassName('classical'))
    let res1 = Array.from(document.querySelectorAll('a:not(.classical)'))
    arr.push(res)
    arr.push(res1)
    return arr
}

 /* the body of the getActive function, which returns an array containing 2 arrays of HTML elements */
 export function getActive() {
    let arr = []
    let res = Array.from(document.getElementsByClassName('classical active'))
    let res1 = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    arr.push(res)
    arr.push(res1)
    return arr
}
 

/* the body of the getBonannoPisano */
export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const activeClassical = Array.from(document.getElementsByTagName('a')).filter(a => 
        a.classList.contains('classical') && 
        a.classList.contains('active') && 
        a.id !== 'BonannoPisano'
    );
    return [bonannoPisano, activeClassical];
}
function treeStr(word: string): any{
    let mid = (word.length + 1)/2;
    if(word.length %2 != 0){
        return word.slice(mid - 2, mid + 1);
    }
    
    return word
}

console.log(treeStr("ahoj"))
console.log(treeStr("Pzthn"))
console.log(treeStr("mas"))
console.log(treeStr("masgo"))

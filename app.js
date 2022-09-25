/*const  { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./test/first','utf-8')
const second = readFileSync('./test/second','utf-8')

writeFileSync(
'./test/result-sync.txt',
`hello wordl : ${first},${second}`,
{flag :'a'}
)
console.log('done')
console.log('start next')*/
/*
const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./test/second','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./test/first', 'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./test/result-async.txt', 
        `here is the result of both files : ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done')
        })
    })
})
console.log('start next')*/
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    van.add(main, 
        h1(a({href:`https://github.com/${author}/Html.VanJS.Use.operator-overloading-js.20240708142227/`}, 'Use.operator-overloading-js')),
        p('演算子オーバーロードする'),
        p('開発者ツールのコンソールにて結果を確認してください。'),
        p('結果をDOMに追加しようとするとエラーになりました。:', van.tags.code(`Error: Line 6: Unexpected token ILLEGAL`)),
//        p('Operator overload'),
    )
    van.add(footer,  new Footer('ytyaru', '../').make())

    // 本題
//    let res = null
    Array.prototype.__addAssign = function(v){
        return [...this, ...v]
    }
    overload(function(){
        let a = [1,2]
        a += [3,4]
        console.log(a)
//        res = a
        // Error: Line 6: Unexpected token ILLEGAL
//        van.add(main, `let a = [1,2]`, van.tags.br(), `a += [3,4]`, van.tags.br(), `${a}`)
//        document.body.append(`${a}`)
    })();
    // null
//    van.add(main, `let a = [1,2]`, van.tags.br(), `a += [3,4]`, van.tags.br(), `${res}`)
//    document.body.append(`${res}`)
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});


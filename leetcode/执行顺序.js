const pro = new Promise((resolve, reject) => {
    const innerpro = new Promise((r, reject) => { 
        setTimeout(() => {
            r(1); 
        }); 
        console.log(2); 
        r(3); 
    });
    resolve(4);
    innerpro.then((res) => console.log(res)); 
    console.log('yideng');
})
pro.then((res) => 
    console.log(res)
); 
console.log('end');

// 2
// yideng
// end
// 3
// 4
// Promise 对象 pro 是一个立即执行函数 ，内部又创建了一个Promise 对象 innerpro同样是一个立即执行函数。
// innerpro中 2先执行，r(1)和r(3)（1放在了setTimeout中不会执行 ，r(3)已经完成了这个promise的使命）
// r(3)和resolve(4)异步任务 ，依次放入异步任务队列（先进先出）。
// 所以执行顺序是  2、yideng、end（同步任务）、3,4（异步任务） 


// 首先，我们创建了一个 Promise 对象 pro，它在初始化时会立即执行传入的函数。
// 在这个函数中，我们又创建了一个内部的 Promise 对象 innerpro。
// 在内部 Promise 对象的初始化函数中，我们设置了一个定时器，但在定时器之后立即调用了 r(3)。
// 这意味着定时器并不会影响内部 Promise 对象的状态，因为在定时器之后立即调用了 resolve 函数。
// 接着，外部 Promise 对象 pro 调用了 resolve(4)，这会触发内部 Promise 对象 innerpro 的 then 方法，输出 3。
// 然后，外部 Promise 对象 pro 也会输出 4。
// 最后，我们在外部 Promise 对象 pro 的外部调用了 console.log('end')，输出 end。
// 因此，整个代码的执行结果应该是 2、yideng、end、3、4。



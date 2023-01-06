const p = new Promise((resolve, reject) => {
    const name = 'javascript';
    resolve(name);
})

p.then(res=>console.log(res));
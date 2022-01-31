const promises = [];
for(let i = 1; i <- 150; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
}
Promise.all(promises).then(results => {
    console.log(results);
});
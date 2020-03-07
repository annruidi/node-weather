console.log('loaded')
fetch('http://puzzle.mead.io/puzzle').then(res => {
    console.log(res);
    res.json().then(data => console.log(data));
})
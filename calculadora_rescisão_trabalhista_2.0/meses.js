function calculaData() {
    let date1 = new Date('2017-03-17');
    let date2 = new Date('2022-03-17');

    let start = Math.floor(date1 / (3600 * 24 * 1000));
    let end = Math.floor(date2 / (3600 * 24 * 1000));

    let daysDiff = end - start;
    let monthDiff = daysDiff / 30;
    console.log(monthDiff.toFixed());
}

console.log(calculaData());
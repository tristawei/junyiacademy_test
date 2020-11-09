function lcm(number) {
    const n1 = 3;
    const n2 = 5;
    return Array.from({length: number}, (_, i) => i + 1)
        .filter(v => {
            return (v % n1 !== 0 && v % n2 !== 0) || v % (n1 * n2) === 0;
        });
}

console.log(lcm(15).length);
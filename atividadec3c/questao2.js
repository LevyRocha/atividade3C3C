function bhaskara(ax2, bx, c) {

    const delta = bx * bx - 4 * ax2 * c;
    let result = [];

    if (delta < 0) {
        result = 'Delta é negativo';
    } else {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        result.push(x1, x2);
    }

    return result;
}

//bhaskara(3, -5, 12);
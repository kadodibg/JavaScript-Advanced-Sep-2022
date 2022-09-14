function gcd(a, b) {
    let R = 0;
    while ((a % b) > 0) {
        R = a % b;
        a = b;
        b = R;
    }

    console.log(b);
}
gcd(2154, 458);
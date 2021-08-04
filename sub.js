let number = 100;
next:
for (let i = 2; i < number; i++) {

    for (let j = 2; j < i; j++) {
        if(i % j === 0) continue next;
    }
    console.log(`${i} делитель данного числа 1 и ${i}`);
}
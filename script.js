const imgs = [
    'PNG_transparency_demonstration_1.png',
    'pngimg.com - mario_PNG125.png',
    'pngimg.com - simpsons_PNG88.png',
    'Spiderman-png-Clipart.png',
    'hot-dog-street-snack-isolated-transparent_107791-18353.jpg.avif'
    ];

    for (let i = 0; i < imgs.length; i++) {
        const img = document.createElement("img");
        img.src = imgs[i];
        img.classList.add("image");
        document.getElementById("imageContainer").appendChild(img);
    }
    


    let sumFor = 0;
    for (let i = 1; i <= 10; i++) {
        sumFor += i;
    }
    let sumWhile = 0;
    let j = 1;
    while (j <= 10) {
        sumWhile += j;
        j++;
    }
    let sumDoWhile = 0;
    let k = 1;
    do {
        sumDoWhile += k;
        k++;
    } while (k <= 10);
    document.getElementById("1").innerHTML = "for: " + sumFor + "<br>while: " + sumWhile + "<br>do while: " + sumDoWhile;





    for (let i = 1; i <= 7; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
        stars += '*';
        }
        document.write(stars + '<br>'); 
    }





    const arr1 = [1,2,3,4,5];
    let product = 1;
    for (let i = 0; i < arr1.length; i++) {
        product *= arr1[i];
    }
    document.getElementById("2").innerHTML = "PRODUCT OF THE ELEMENT ARRAY: " + product;





    const arr = [1, 2, 5, 9, 4, 13, 4, 10];
    let found = false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 4) {
            found = true;
            document.getElementById("3").innerHTML = 'WE HAVE ONE';
            break;
        }
    }
    if (!found) {
        document.getElementById("3").innerHTML = 'THERES IS NO ELEMENT LIKE THIS.';
    }
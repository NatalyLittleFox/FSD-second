const slider = (arr, exp) => {
    const arrows = $('.preview__image__arrows-item');
    const image = $('.preview__image')
    const leftArrow = $(arrows[0]);
    const rightArrow = $(arrows[1]);
    const countCircle = $('.preview__counter-button');
    let counter = 0;
    leftArrow.click(function (e) {
        counter--;
        if (exp == 'svg') {
            image.css({
                backgroundImage: `url("/assets/img/${arr[counter]}.svg")`,
            });
        } else if (exp === 'png') {
            image.css({
                backgroundImage: `url("/assets/img/${arr[counter]}.png")`,
            });
        }
        $(countCircle[counter]).addClass('current');
        $(countCircle[counter + 1]).removeClass('current');
        if (counter < 0) {
            $(countCircle[counter]).removeClass('current');
            counter = arr.length - 1;
            $(countCircle[counter]).addClass('current');
            if (exp == 'svg') {
                image.css({
                    backgroundImage: `url("/assets/img/${arr[counter]}.svg")`,
                });
            } else if (exp === 'png') {
                image.css({
                    backgroundImage: `url("/assets/img/${arr[counter]}.png")`,
                });
            }
        }
        console.log(arr[counter])
        console.log(counter)
    })
    rightArrow.click(function (e) {
        counter++;
        if (exp == 'svg') {
            image.css({
                backgroundImage: `url("/assets/img/${arr[counter]}.svg")`,
            });
        } else if (exp === 'png') {
            image.css({
                backgroundImage: `url("/assets/img/${arr[counter]}.png")`,
            });
        }
        $(countCircle[counter]).addClass('current');
        $(countCircle[counter - 1]).removeClass('current');
        if (counter >= arr.length) {
            counter = 0;
            $(countCircle[counter]).addClass('current');
            if (exp == 'svg') {
                image.css({
                    backgroundImage: `url("/assets/img/${arr[counter]}.svg")`,
                });
            } else if (exp === 'png') {
                image.css({
                    backgroundImage: `url("/assets/img/${arr[counter]}.png")`,
                });
            }
        }
    })
}

export {
    slider
}
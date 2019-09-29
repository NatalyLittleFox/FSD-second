const rate = () => {
    const rateButton = $('.rate__button');
    let starsArr = Array.from(rateButton);
    const currentStar = () => {
        starsArr.forEach(function (elem, counter) {
            $(elem).click(function () {
                let clickedStar = $(starsArr[counter]);
                if (clickedStar.attr('data-starred')) {
                    let i = counter;
                    while (i < starsArr.length) {
                        $(starsArr[i+1]).removeAttr('data-starred')
                        $(starsArr[i+1]).css({
                            backgroundImage: "url('/assets/img/star_border.svg')"
                        })
                        i++;
                    }
                } else {
                    let i = counter;
                    while (i >= 0) {
                        $(starsArr[i]).attr('data-starred', 'true')
                        $(starsArr[i]).css({
                            backgroundImage: "url('/assets/img/star.svg')"
                        })
                        i--;
                    }
                }
            })
        })
    }
    currentStar();
}

export {
    rate
}
const like = () => {
    const likeButton = $('.like__button');
    let liked = false;
    let value = $('.like__value');
    let counter = Number(value.text());
    if (value.text() === '') {
        value.text(counter); // default 0 value
    }
    likeButton.click(function (e) {
        if (liked === false) {
            counter++;
            liked = true;
            value.css({
                color: '#BC9CFF',
            })
        } else if (liked === true) {
            counter--;
            liked = false;
            value.css({
                color: 'rgba(31, 32, 65, 0.25)',
            })
        }
        value.text(counter);
    })
}

export {
    like
}
import $ from 'jquery';

let dropdown = $('.dropdown');
let dropdownMenu = $('.dropdown-menu');
let dropdownButton = $('.dropdown-button');

const click = dropdownButton.click(function (e) {
    if (dropdownMenu.hasClass('show')) {
        dropdown.css({
            borderColor: 'rgba(31, 32, 65, 0.25)' // dark 25
        })
    } else {
        dropdown.css({
            borderColor: 'rgba(31, 32, 65, 0.5)' // dark 50
        })
    }
});

const blur = dropdownButton.blur(function () {
    dropdown.css({
        borderColor: 'rgba(31, 32, 65, 0.25)' // dark 25
    })
})

const dropdownSelectedItem = function () {
    $('.dropdown-item>span').click(function (e) {
        let text = this.innerText;
        $('.dropdown-selectedText').text(text);
    })
}

let counter = 0;

const dropdownCounter = function () {
    $('.dropdown-item__quantity__countButton-minus').click(function () {
        counter--;
        $('.dropdown-item__quantity__counter').text(counter);
        if (counter < 0) {
            counter = 0;
            $('.dropdown-item__quantity__counter').text(counter);
        }
    })
    $('.dropdown-item__quantity__countButton-plus').click(function () {
        counter++;
        $('.dropdown-item__quantity__counter').text(counter);
    })

}

setInterval(function(){
    if ($('.dropdown-item__quantity__counter').text() == '0') {
        $('.dropdown-item__quantity__countButton-minus').css({
            cursor: 'default',
            borderColor: 'rgba(31, 32, 65, 0.25)',
        });
        $('.dropdown-item__quantity__countButton-minus').hover(function(){
            $(this).css({
                background: 'transparent'
            })
        })
    } else {
        $('.dropdown-item__quantity__countButton-minus').css({
            cursor: 'pointer',
            borderColor: 'rgba(31, 32, 65, 0.5)'
        })
        $('.dropdown-item__quantity__countButton-minus').hover(function(){
            $(this).css({
                background: 'rgba(31, 32, 65, 0.05)'
            })
        })
    }
}, 100)



export {
    dropdown,
    dropdownMenu,
    dropdownButton,
    click,
    blur,
    dropdownSelectedItem,
    dropdownCounter
}
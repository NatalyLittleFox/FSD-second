const checkboxListShow = () => {
    let checkboxExpandableButton = $('.checkbox_expandable__button');

    checkboxExpandableButton.click(function () {
        $(this).toggleClass('checkbox_expandable__button_rotate');
        let buttonId = this.id;
        let checkboxExpandableList = $(`.checkbox_expandable__list#${buttonId}`);
        checkboxExpandableList.toggleClass('d-none')
    })

}



export {
    checkboxListShow
}
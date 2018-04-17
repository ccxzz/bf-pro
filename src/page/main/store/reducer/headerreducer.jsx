const HeaderDataObj = {
    selectMenuName: 'home'
};
const HeaderReducer = (state = HeaderDataObj, action) => {
    switch (action.type) {
        case 'MENU_CHANGE':
            return Object.assign({}, state, {
                selectMenuName: action.text
            })
        default:
            return state;
    }
}

export default HeaderReducer
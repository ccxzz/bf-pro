import { connect } from 'react-redux';
import HeaderMenuAction from  '../../store/action/headeraction';
const mapStateToProps = (state) => {
    return ({
        selectMenuName: state.headerReducer.selectMenuName
    })
};
const mapDispatchToProps = (dispatch) => {
    return {
        menuChange: (value) => dispatch(HeaderMenuAction.menuChange(value.key)),
    }
};

const { menuChange } = this.props; //render()

connect(mapStateToProps, mapDispatchToProps)(menuitem) //export
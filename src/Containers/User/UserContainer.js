import {connect} from "react-redux";
import LoginComponent from '../../Components/LoginRegisterComponent/LoginRegisterComponent';
import {login} from "../../State/Action";


// subscribe
let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

// publish
let mapDispatchToProps = (dispatch) => {
    return {
        login: (userObj) => {
            dispatch(login(userObj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
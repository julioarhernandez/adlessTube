import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

const Notify = (message, type) => {
    const defaultProps = {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    return toast[type](message,defaultProps);
};
export default Notify;
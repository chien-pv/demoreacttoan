import ReactDOM from 'react-dom';


function ModalPortal(props){


    return ReactDOM.createPortal(
            props.children,
            document.getElementById("modal-root")
    )
}

export default ModalPortal;
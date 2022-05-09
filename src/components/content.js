import ListUser from "./list_user";
import UserInfo from "./user_info";
import {useState, useEffect} from "react";
import ModalPortal from "./modal_portal";
import PopupUser from "./popup_user";

function Content() {
    let [users, setUser] = useState([
        {
            id: "1",
            image: "",
            fullName: "nguyen Van A",
            email: "nguyena@gmail.com",
            isActive: true
        },
        {
            id: "2",
            image: "",
            fullName: "nguyen Van B",
            email: "nguyenb@gmail.com",
            isActive: true
        }
    ]);


    return (
     <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
         <div className="row">
                <ListUser users={users}/>
                <UserInfo/>
                <ModalPortal>
                    <PopupUser/>
                </ModalPortal>
                
         </div>
     </main>
    );  
  }
  
export default Content;
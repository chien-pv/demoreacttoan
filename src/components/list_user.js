import SearchUser from "./search_user";
import TableUser from "./table_user";

function ListUser(props) {
    return (
        <div className="col-md-9">
            <SearchUser/>
            <TableUser users={props.users}/>
        </div>
    );
  }
  
export default ListUser;
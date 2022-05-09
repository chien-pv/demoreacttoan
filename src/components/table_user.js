import Item from "./item";

function TableUser(props) {
    console.log(props)
    let data = props.users.map((user, index)=>{
        return  <Item index={index} user={user} /> 
    })
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Full Name</th>
            <th scope="col">Status</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {data}
        </tbody>
      </table>
    );
  }
  
export default TableUser;
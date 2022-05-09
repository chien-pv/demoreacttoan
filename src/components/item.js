function Item(props) {
    let {image, fullName, email, isActive} = props.user
    return (
        <tr>
            <th scope="row">{props.index +1}</th>
            <td>{image}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{isActive}</td>
            <td>@mdo</td>
      </tr>
    );
  }
  
export default Item;
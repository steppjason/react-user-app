import User from "./User"

function UserList(props) {
	return (
		<ul className="userlist">
			{props.users.map((user) => {
				return <User key={user.id} username={user.username} age={user.age} />
			})}
			{props.users.length === 0 && <li>No users found</li>}
		</ul>
	)
}

export default UserList

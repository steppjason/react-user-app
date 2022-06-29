import User from "./User"

function UserList(props) {
	return (
		<ul className="userlist">
			{props.users.map((user) => {
				return <User key={user.id} username={user.username} age={user.age} />
			})}
		</ul>
	)
}

export default UserList

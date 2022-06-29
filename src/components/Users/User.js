function User(props) {
	return (
		<li className="userlist__user">
			<div className="userlist__username">{props.username}</div>
			<div className="userlist__age">{props.age} years old</div>
		</li>
	)
}

export default User

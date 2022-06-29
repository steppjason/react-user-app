import { useState } from "react"

function AddUser(props) {
	const [username, setUsername] = useState("")
	const [age, setAge] = useState("")

	const addUserHandler = (e) => {
		e.preventDefault()
		if (username.trim().length === 0 || age.trim().length === 0) {
			props.onError("Error", "Please enter a username and age")
			return
		}

		if (+age < 1) {
			props.onError("Error", "Age must be greater than 0")
			return
		}

		props.onAddUser(username, age)
		resetForm()
	}

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value)
	}

	const ageChangeHandler = (e) => {
		setAge(e.target.value)
	}

	const resetForm = () => {
		setUsername("")
		setAge("")
	}

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" onChange={usernameChangeHandler} value={username} />
			<label htmlFor="age">Age (Years)</label>
			<input type="number" id="age" onChange={ageChangeHandler} value={age} />
			<button type="submit">Add User</button>
		</form>
	)
}

export default AddUser

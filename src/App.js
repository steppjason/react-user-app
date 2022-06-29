import React, { useState } from "react"
import AddUser from "./components/Users/AddUser"
import Card from "./components/UI/Card"
import UserList from "./components/Users/UserList"
import Modal from "./components/UI/Modal"

function App() {
	const USERS = []

	const [users, setUsers] = useState(USERS)
	const [error, setError] = useState()

	const addUserHandler = (username, age) => {
		setUsers((prev) => {
			return [...prev, { id: Math.random(), username: username, age: age }]
		})
	}

	const errorHandler = (title, message) => {
		setError({ title: title, message: message })
	}

	const resetErrorHandler = () => {
		setError(null)
	}

	return (
		<div className="wrapper">
			{error && <Modal title={error.title} message={error.message} onClose={resetErrorHandler} />}
			<Card>
				<AddUser onAddUser={addUserHandler} onError={errorHandler} error={error} />
			</Card>
			<Card>
				<UserList users={users} />
			</Card>
		</div>
	)
}

export default App

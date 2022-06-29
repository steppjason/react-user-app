import Card from "./Card"

function Modal(props) {

	return (
		<div className="modal" onClick={props.onClose}>
			<Card>
				<h3 className="modal__title">{props.title}</h3>
				<div className="modal__message">{props.message}</div>
			</Card>
		</div>
	)
}

export default Modal

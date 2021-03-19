import React from "react"
import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { fetchData } from "../../redux/invoiceReducer"

const AddDocument = () => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(fetchData())
	}

	return (
		<>
			<h6 className="mt-4 text-left">Stwórz nowy dokument:</h6>

			<div className="input-group mb-4 d-flex justify-content-left">
				<div className="input-group-append">
					<Link to={`/create-document`}>
						<Button onClick={handleClick} variant="info w-100 btn-sm">
							<p className="text-left text-light m-0">Utwórz</p>
						</Button>
					</Link>
				</div>
			</div>
			<hr />
		</>
	)
}

export default AddDocument

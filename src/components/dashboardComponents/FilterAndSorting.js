import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { sortData, fetchData, filterData } from "../../redux/invoiceReducer"

const FilterAndSorting = () => {
	const dispatch = useDispatch()
	const documents = useSelector(state => state.documents.documents)

	const sort = order => {
		const sortedDocuments = documents.sort((a, b) => {
			if (order === "ascending") {
				return a.id - b.id
			} else if (order === "descending") {
				return b.id - a.id
			}
			return documents
		})
		dispatch(sortData(sortedDocuments))
	}

	const fetch = () => {
		dispatch(fetchData())
	}

	const filter = type => {
		dispatch(filterData(type))
	}

	return (
		<>
			<div className="d-flex">
				<h6 className="w-50">Sortuj przez datę utworzenia:</h6>
				<h6 className="w-50">Filtruj:</h6>
			</div>
			<div className="d-flex mb-4">
				<div className="d-flex w-50">
					<Button onClick={() => sort("descending")} variant="info btn-sm" className="mr-2" href="">
						Od najnowszych
					</Button>
					<Button onClick={() => sort("ascending")} variant="info btn-sm" href="">
						Od najstarszych
					</Button>
				</div>

				<div className="d-flex w-50">
					<Button onClick={fetch} variant="info btn-sm" className="mr-2" href="">
						Wszystkie
					</Button>

					<Button onClick={() => filter("invoice")} variant="info btn-sm" className="mr-2" href="">
						Faktury
					</Button>

					<Button
						onClick={() => filter("prepayment-invoice")}
						variant="info btn-sm"
						className="mr-2"
						href=""
					>
						Faktury zaliczkowe
					</Button>
					<Button onClick={() => filter("receipt")} variant="info btn-sm" href="">
						Paragony
					</Button>
				</div>
			</div>
			<hr />
		</>
	)
}

export default FilterAndSorting

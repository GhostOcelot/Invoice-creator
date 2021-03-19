export const FETCH_DATA = "FETCH_DATA"
export const ADD_DOCUMENT = "ADD_INVOICE"
export const SORT_DATA = "SORT_DATA"
export const FILTER_DATA = "FILTER_DATA"

export const invoiceReducer = (state = { documents: [] }, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return { ...state, documents: [...action.payload.documents] }

		case ADD_DOCUMENT:
			return { ...state, documents: [action.payload.newDocument, ...state.documents] }

		case SORT_DATA:
			return { ...state, documents: [...action.payload.documents] }

		case FILTER_DATA:
			return { ...state, documents: [...action.payload.documents] }

		default:
			return state
	}
}

export const fetchData = () => dispatch => {
	fetch("http://localhost:3005/documents?_sort=id&_order=desc")
		.then(res => res.json())
		.then(data => {
			dispatch({ type: FETCH_DATA, payload: { documents: data } })
		})
}

export const addDocument = newDocument => dispatch => {
	fetch("http://localhost:3005/documents", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newDocument),
	}).then(() => {
		dispatch({ type: ADD_DOCUMENT, payload: { newDocument: newDocument } })
	})
}

export const sortData = data => dispatch => {
	dispatch({ type: SORT_DATA, payload: { documents: data } })
}

export const filterData = type => dispatch => {
	fetch(`http://localhost:3005/documents?type=${type}&_sort=id&_order=desc`)
		.then(res => res.json())
		.then(data => {
			dispatch({ type: FILTER_DATA, payload: { documents: data } })
		})
}

import React from "react"
import Navigation from "../Navigation"
import AddDocument from "./AddDocument"
import AllDocuments from "./AllDocuments"
import { Container } from "react-bootstrap"
import FilterAndSorting from "./FilterAndSorting"

const Dashboard = () => {
	return (
		<>
			<Navigation />
			<Container>
				<AddDocument />
				<FilterAndSorting />
				<AllDocuments />
			</Container>
		</>
	)
}

export default Dashboard

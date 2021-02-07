import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import SearchForm from "../SearchForm";
import EmployeeList from "../EmployeeList";

class Container extends Component {

    state = {
        search: "",
        results: [],
        sort: {
            column: null,
            direction: "desc",
            icon: "fas fa-sort-up"
        }
    }

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
        this.setState({icon: "fas fa-sort-up"}); 
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        const lowercasedSearch = this.state.search.toLowerCase();
        const searchResult = this.state.results.filter(name => name.name.first.concat(name.name.last).toLocaleLowerCase().includes(lowercasedSearch));
        return (
            <div>
                <Jumbotron
                    heading="Employee Directory"
                    subHeading="Use the search box to narrow your results."
                />
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeList
                    sortFunction={this.sortFunction}
                    icon={this.state.icon}
                    results={searchResult}
                />
            </div>
        );
    }
}

export default Container;
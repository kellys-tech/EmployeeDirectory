import React from "react";

function EmployeeList(props) {
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={() => props.sortName("Name")}>Name <i className={props.icon}></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                    <tr key={result.name.first + result.id.value}>
                        <th scope="row"><img alt={result.name.first} src={result.picture.thumbnail}></img></th>
                        <td>{result.name.first + " " + result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{(result.dob.date)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeList;
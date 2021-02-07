import React from "react";

function EmployeeList(props) {
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={() => props.sortFunction("Name")}>Name <i className={props.icon}></i></th>
                    <th scope="col" onClick={() => props.sortFunction("Phone")}>Phone <i className={props.icon}></i></th>
                    <th scope="col" onClick={() => props.sortFunction("Email")}>Email <i className={props.icon}></i></th>
                    <th scope="col" onClick={() => props.sortFunction("DOB")}>DOB <i className={props.icon}></i></th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                    <tr key={result.name.first + result.id.value}>
                        <th scope="row"><img alt={result.name.first} src={result.picture.thumbnail}></img></th>
                        <td>{result.name.first + " " + result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{new Intl.DateTimeFormat('en-US', { year: "numeric", month: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(result.dob.date))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeList;
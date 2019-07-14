import React from "react";

class OperationsList extends React.Component {

    state = {
        searchText: "",
        operationItems: [
            {
                name: "Filter",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Derive",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Join",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Union",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Sort",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Group By",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Dedupe",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Validation",
                desc: "Lorem ipsum is demo text"
            }
        ],
        operationItemsCopy: [
            {
                name: "Filter",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Derive",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Join",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Union",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Sort",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Group By",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Dedupe",
                desc: "Lorem ipsum is demo text"
            },
            {
                name: "Validation",
                desc: "Lorem ipsum is demo text"
            }
        ]
    };

    handleSearch = (event) => {
        const searchText = event.target.value;
        const operationItems = this.state.operationItemsCopy.filter(oItem => oItem.name.indexOf(searchText) > -1);
        this.setState({
            searchText,
            operationItems: searchText.length ? operationItems : this.state.operationItemsCopy
        });
    }

    render() {
        return (
            <div className="operations-list">
            </div>
        );
    }
};

export default OperationsList;
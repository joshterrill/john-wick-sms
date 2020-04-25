import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    state = {
        recipients: [],
        contractStatuses: [],
    };
    componentDidMount = async () => {
        const recipientsPromise = fetch("http://localhost:3030/recipients").then(res => res.json());
        const contractStatusesPromise = fetch("http://localhost:3030/contract-statuses").then(res => res.json());
        const [ recipients, contractStatuses ] = await Promise.all([recipientsPromise, contractStatusesPromise]);
        this.setState({
            recipients,
            contractStatuses,
        });
    }
    submitForm = e => {
        e.preventDefault();
    }
    render() {
        const { recipients, contractStatuses } = this.state;
        return (
            <div className="app">
                <header className="app-header">
                    <h1 className="title">Continental Administrative Office</h1>
                    <p className="subtitle">Fill out the form below</p>
                </header>
                <form className="app-form" onSubmit={this.submitForm}>
                    <div className="input-block">
                        <label>TO</label>
                        <select>
                            {recipients.map(recipient =>
                                <option key={recipient.id} value={recipient.number}>{recipient.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="input-block">
                        <label>STATUS</label>
                        <select>
                            {contractStatuses.map(contractStatus =>
                                <option key={contractStatus} value={contractStatus}>{contractStatus}</option>
                            )}
                        </select>
                    </div>
                    <div className="input-block">
                        <label>NAME</label>
                        <input type="text" />
                    </div>
                    <div className="input-block">
                        <label>AMOUNT</label>
                        <input type="text" />
                    </div>
                    <div className="input-block">
                        <label>LOCATION</label>
                        <input type="text" />
                    </div>
                    <div className="submit-container">
                        <button type="submit" className="submit">Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

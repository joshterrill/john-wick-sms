import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    submitForm = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <h1 className="title">Continental Administrative Office</h1>
                    <p className="subtitle">Fill out the form below</p>
                </header>
                <form className="app-form" onSubmit={this.submitForm}>
                    <div className="input-block">
                        <label>TO</label>
                        <input type="text" />
                    </div>
                    <div className="input-block">
                        <label>STATUS</label>
                        <select>
                            <option>OPEN CONTRACT</option>
                            <option>CLOSED CONTRACT</option>
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

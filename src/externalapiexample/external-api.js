import React, { useState } from "react";

const ExternalApi = () => {
    const [message, setMessage] = useState("");
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    // Auth removed; secure endpoint call disabled

    const callApi = async () => {
        try {
            const response = await fetch(`${serverUrl}/api/messages/public-message`);

            const responseData = await response.json();

            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const callSecureApi = async () => {
        setMessage("Authentication removed: protected call disabled.");
    };

    return (
        <div className="container">
            <h1>External API</h1>
            <p>
                Use these buttons to call an external API. Protected call is disabled since authentication was removed.
            </p>
            <div
                className="btn-group mt-5"
                role="group"
                aria-label="External API Requests Examples"
            >
                <button type="button" className="btn btn-primary" onClick={callApi}>
                    Get Public Message
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={callSecureApi}
                >
                    Get Protected Message
                </button>
            </div>
            {message && (
                <div className="mt-5">
                    <h6 className="muted">Result</h6>
                    <div className="container-fluid">
                        <div className="row">
                            <code className="col-12 text-light bg-dark p-4">{message}</code>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExternalApi;

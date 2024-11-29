"use client";

import React, { useState } from 'react';
import "./styles.css";


const AgentDetail = ({ agent }) => {
    const [agentName, setAgentName] = useState(agent.name);
    const [agentPrompt, setAgentPrompt] = useState(agent.prompt);

    const handleNameChange = (e) => setAgentName(e.target.value);
    const handlePromptChange = (e) => setAgentPrompt(e.target.value);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    value={agentName}
                    onChange={handleNameChange}
                    className="text-2xl font-bold border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 mr-2">Test Call</button>
                    <button className="bg-green-500 text-white px-4 py-2">Test Chat</button>
                </div>
            </div>
            <textarea
                value={agentPrompt}
                onChange={handlePromptChange}
                className="w-full h-64 border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default AgentDetail;

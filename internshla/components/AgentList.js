"use client";
import React from 'react';
import Link from 'next/link';
import "./styles.css";


const AgentList = ({ agents }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Agents List</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Prompt</th>
                    </tr>
                </thead>
                <tbody>
                    {agents.map(agent => (
                        <tr key={agent.id} className="cursor-pointer hover:bg-gray-200">
                            <td className="py-2">{agent.id}</td>
                            <td className="py-2">
                                <Link href={`/agents/${agent.id}`}>
                                    <a>{agent.name}</a>
                                </Link>
                            </td>
                            <td className="py-2">{agent.prompt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AgentList;

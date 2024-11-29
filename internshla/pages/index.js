"use client";

import Layout from '../components/Layout';
import AgentList from '../components/AgentList';

const agentsData = [
    { id: 1, name: 'Agent 1', prompt: 'Prompt 1' },
    { id: 2, name: 'Agent 2', prompt: 'Prompt 2' },
    // Add more agents...
];

export default function Home() {
    return (
        <Layout>
            <AgentList agents={agentsData} />
        </Layout>
    );
}

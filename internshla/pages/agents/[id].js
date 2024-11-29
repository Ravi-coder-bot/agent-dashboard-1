"use client";

import Layout from '../../components/Layout';
import AgentDetail from '../../components/AgentDetail';

const agentsData = [
    { id: 1, name: 'Agent 1', prompt: 'Prompt 1' },
    { id: 2, name: 'Agent 2', prompt: 'Prompt 2' },
    
];

export default function AgentPage({ agent }) {
    return (
        <Layout>
            <AgentDetail agent={agent} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = agentsData.map(agent => ({
        params: { id: agent.id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const agent = agentsData.find(agent => agent.id === parseInt(params.id));
    return { props: { agent } };
}

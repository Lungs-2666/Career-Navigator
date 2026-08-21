    import { Position } from "@xyflow/react";

    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    }

    export const devops_nodes = [
        {
            id: '1',
            position: { x: 0, y: 0 },
            data: {
                label: 'Foundations & Linux',
                items: [
                    "Operating systems",
                    "Linux basics",
                    "Command line",
                    "Shell scripting",
                    "Networking basics - IP, DNS...",
                    "Git + GitHub/GitLab"
                ],
                label_color: '#4f9acc'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '2',
            position: { x: 350, y: 0 },
            data: {
                label: 'CI/CD & Containers',
                items: [
                    "CI concepts",
                    "CD concepts",
                    "CI/CD tools",
                    "Pipeline design",
                    "Docker basics",
                    "Docker commands",
                    "Docker compose"
                ],
                label_color: '#12c55c'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '3',
            position: { x: 350, y: 200 },
            data: {
                label: 'Cloud, IaC & Orchestration',
                items: [
                    "Cloud fundamentals",
                    "Core cloud services",
                    "Deploy to cloud",
                    "IaC concepts",
                    "Terraform",
                    "K8s core concepts",
                    "Workloads & config",
                    "Scaling & updates"
                ],
                label_color: '#9768ceff'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '4',
            position: { x: 700, y: 0 },
            data: {
                label: 'Monitoring, security & operations',
                items: [
                    "Logging",
                    "Metrics",
                    "Monitoring tools",
                    "Alerting & SLO/SLI",
                    "Security basics",
                    "Secrets & incidents management",
                    "Root cause analysis (RCA)"
                ],
                label_color: '#db5555'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '5',
            position: { x: 1050, y: 0 },
            data: {
                label: 'Practice & career',
                items: [
                    "Home lab / cloud sandbox",
                    "CI/CD project",
                    "K8s / IaC projects",
                    "Documentation",
                    "communication",
                    "Continuous learning"
                ],
                label_color: '#53be45'
            },
            type: 'skills_node',
            ...nodeDefaults
        }
    ];

    export const devops_edges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2'
        },
        {
            id: 'e1-3',
            source: '1',
            target: '3'
        },
        {
            id: 'e2-4',
            source: '2',
            target: '4'
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4'
        },
        {
            id: 'e4-5',
            source: '4',
            target: '5'
        }
    ];

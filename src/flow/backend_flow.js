    import { Position } from "@xyflow/react";
    
    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };

    export const backend_nodes = [
        {
            id: '1',
            position: { x: 0, y: 0 },
            data: {
                label: 'Python core',
                items: [
                    "Python syntax",
                    "Variables",
                    "Data Types",
                    "Conditions",
                    "Loops",
                    "Functions + Function Parameters",
                    "Lists",
                    "Tuples",
                    "Tupes + Dictionaries",
                    "Sets",
                    "String Methods",
                    "Files",
                    "JSON",
                    "Exceprions",
                    "Classes + Inheritance",
                    "Decorators",
                    "Generators",
                    "Iterators",
                    "Type Hints"
                ],
                label_color: '#3b66f1'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '2',
            position: { x: 350, y: 0 },
            data: {
                label: 'Python tools',
                items: [
                    "Python Interpreter",
                    "venv",
                    "pip",
                    "requirements.txt",
                    "puprojects.toml",
                    "Virtual Environment",
                    "Black + Ruff",
                    "mypy",
                    "Python Logging",
                    "Debugger",
                    "Git"
                ],
                label_color: '#d1c301'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '3',
            position: { x: 600, y: 0 },
            data: {
                label: 'Web & HTTP',
                items: [
                    "Client & Server",
                    "HTTP",
                    "Request + Response",
                    "HTTP methods",
                    "Status codes",
                    "Headers",
                    "Cookies + Sessions",
                    "JSON API",
                    "URL & query params",
                    "Path parameters",
                    "CORS",
                    "Middleware"
                ],
                label_color: '#3b66f1'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '4',
            position: { x: 600, y: 300 },
            data: {
                label: 'Databases: SQL & PostgreSQL',
                items: [
                    "SQL basics",
                    "PostgreSQL",
                    "Tables & Columns",
                    "Primary key & Foreign key",
                    "One-to-one & many-to-many",
                    "SELECT, INSERT, UPDATE, DELETE, JOIN",
                    "Indexes",
                    "Transactions",
                    "Constraints",
                    "Migrations"
                ],
                label_color: '#d1c301'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '5',
            position: { x: 1000, y: 0 },
            data: {
                label: 'Authentication',
                items: [
                    "User model",
                    "Registration",
                    "Login & logout",
                    "Password Hashing",
                    "bcrypt / Argon2",
                    "Session Auth",
                    "JWT Auth",
                    "Access token & Refresh token",
                    "OAuth2 & OAuth providers",
                    "Email verefication",
                    "Password reset",
                    "MFA"
                ],
                label_color: '#3b66f1'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
    ];

    export const backend_edges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2'
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3'
        },
        {
            id: 'e2-4',
            source: '2',
            target: '4'
        },
        {
            id: 'e3-5',
            source: '3',
            target: '5'
        },
        {
            id: 'e4-5',
            source: '4',
            target: '5'
        }
    ];

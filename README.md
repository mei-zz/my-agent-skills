# my-agent-skills

A collection of agent skills for AI coding assistants, organized by department.

## Available Skills

### General Skills
- **api-docs-writer** - 根据源代码自动生成符合 OpenAPI 规范的 API 文档
- **code-review-pro** - 专业的代码审查工具，检查代码质量、潜在bug和最佳实践

### Backend Team
- **api-helper** - 后端团队API开发辅助工具，提供RESTful API设计规范和代码生成

### Frontend Team
- **component-builder** - 前端团队组件构建工具，提供React/Vue组件模板和最佳实践

## Directory Structure

```
skills/
├── api-docs-writer/          # General skill
├── code-review-pro/          # General skill
├── backend-team/             # Backend team skills
│   └── api-helper/
└── frontend-team/            # Frontend team skills
    └── component-builder/
```

## Installation

Install all skills via skills.sh:

```bash
npx skills install mei-zz/my-agent-skills
```

Or search for specific skills:

```bash
npx skills find
```

## Usage

After installation, activate a skill by name in your AI coding assistant.
# my-agent-skills

A collection of agent skills for AI coding assistants, organized by department.

## Available Skills

### General Skills
| Skill | Description |
|-------|-------------|
| **api-docs-writer** | 根据源代码自动生成符合 OpenAPI 规范的 API 文档 |
| **code-review-pro** | 专业的代码审查工具，检查代码质量、潜在bug和最佳实践 |

### Backend Team
| Skill | Description |
|-------|-------------|
| **api-helper** | 后端团队API开发辅助工具，提供RESTful API设计规范和代码生成 |

### Frontend Team
| Skill | Description |
|-------|-------------|
| **component-builder** | 前端团队组件构建工具，提供React/Vue组件模板和最佳实践 |

## Directory Structure

```
skills/
── api-docs-writer/          # General skill
│   ├── SKILL.md
│   └── scripts/test.js
├── code-review-pro/          # General skill
│   ├── SKILL.md
│   └── scripts/test.js
── backend-team/             # Backend team skills
│   └── api-helper/
│       ├── SKILL.md
│       └── scripts/test.js
└── frontend-team/            # Frontend team skills
    └── component-builder/
        ├── SKILL.md
        └── scripts/test.js
```

## Quick Start

### Installation

```bash
npx skills install mei-zz/my-agent-skills
```

### Testing

```bash
# Run all tests
node scripts/run-all-tests.js

# Run single skill test
node skills/api-docs-writer/scripts/test.js
```

## Documentation

See [操作手册.md](docs/操作手册.md) for complete guide.

## Usage

After installation, activate a skill by name in your AI coding assistant.
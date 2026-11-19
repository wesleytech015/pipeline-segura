# Pipeline Segura - DevSecOps

## Sobre o Projeto

Projeto acadêmico criado para demonstrar uma pipeline DevSecOps automatizada.

A aplicação é uma API REST simples em Node.js com Express. O principal objetivo do projeto é executar verificações de segurança automaticamente a cada alteração enviada para o GitHub.

## Tecnologias

- Node.js
- Express
- Docker
- Docker Compose
- GitHub Actions
- Gitleaks
- Semgrep
- Trivy
- Checkov
- OWASP ZAP

## Estrutura do Projeto

```text
pipeline-segura/
├── .github/
│   └── workflows/
│       └── devsecops.yml
├── src/
│   └── app.js
├── .gitleaks.toml
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

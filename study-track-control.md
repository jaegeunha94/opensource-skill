# Study Track Control

Claude routine runs for study tracks must check this file before creating a lesson.

Set `enabled` to `false` to skip today's run. Set it back to `true` when the
subject should resume.

Rules:

- Use lowercase `true` or `false`.
- The special `__all__` row is checked first.
- If `__all__` is `false`, every subject is skipped regardless of its own row.
- If `__all__` is `true`, each subject uses its own row.
- Match subjects by `subject-slug`.
- If a subject is `false`, do not create lessons, update progress, commit, or push.
- If a subject is missing from this table, treat it as enabled to preserve existing behavior.

| subject-slug | enabled | note |
|--------------|---------|------|
| __all__ | false | Set this to false to skip every study-track routine. |
| computer-networking | true | |
| senior-http-web-protocol-interview | true | |
| operating-systems | true | |
| database-systems | true | |
| computer-architecture | true | |
| file-structures | true | |
| data-structures | true | |
| ui-ux-terms | true | |
| senior-html-css-interview | true | |
| senior-javascript-interview | true | |
| senior-react-nextjs-interview | true | |
| senior-frontend-interview | true | |
| python-backend-engineering | true | |
| python-experienced-interview | true | |
| senior-backend-interview | true | |
| senior-system-design-interview | true | |
| senior-linux-server-operations-interview | true | |
| senior-backend-security-interview | true | |
| senior-observability-incident-response-interview | true | |
| senior-aws-cloud-architecture-interview | true | |
| senior-cloudflare-configuration-interview | true | |
| senior-docker-kubernetes-virtualization-interview | true | |
| senior-kubernetes-interview | true | |
| senior-cicd-deployment-strategy-interview | true | |
| senior-performance-optimization-interview | true | |
| senior-redis-cache-strategy-interview | true | |
| senior-message-queue-async-processing-interview | true | |
| senior-rag-interview | true | |
| senior-llm-wiki-file-format-rag-interview | true | |
| senior-langchain-langgraph-interview | true | |
| senior-ai-harness-interview | true | |
| senior-llm-engineering-interview | true | |
| senior-chatbot-service-interview | true | |
| senior-claude-code-interview | true | |
| senior-hermes-agent-interview | true | |
| senior-openclaw-interview | true | |

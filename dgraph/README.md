# dgraph and graphQL with docker compose

## Upload schema

```bash
curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'
```

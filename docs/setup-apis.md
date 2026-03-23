# API Setup Documentation

## n8n Integration

El bot utiliza un webhook de n8n para procesar mensajes.

### Webhook URL
La URL configurada actualmente es:
`https://n8n.srv1187720.hstgr.cloud/webhook/ca259ad3-2ffe-4de3-9798-9a9103ad80ca`

### Payload de Envío
El bot envía un objeto JSON con la siguiente estructura:
```json
{
  "message": "Mensaje del usuario",
  "timestamp": "2026-03-22T21:30:00.000Z",
  "source": "aysa-bot-demo"
}
```

### Respuesta Esperada
El webhook debe responder con un JSON que contenga el campo `reply` o `text`:
```json
{
  "reply": "Respuesta del asistente"
}
```

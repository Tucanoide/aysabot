export const sendToN8n = async (message: string, sessionId: string) => {
  // User provided n8n webhook URL
  const N8N_WEBHOOK_URL = "https://n8n.srv1187720.hstgr.cloud/webhook/ca259ad3-2ffe-4de3-9798-9a9103ad80ca";

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatInput: message,
        message,
        sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message to n8n: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("n8n Integration Error:", error);
    return { error: "Could not connect to the bot service." };
  }
};

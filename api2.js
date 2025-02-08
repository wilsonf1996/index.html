async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("response");

    if (!userInput) {
        alert("Digite uma pergunta antes de enviar.");
        return;
    }

    const apiKey = "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"; 
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const headers = {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
    };

    const body = JSON.stringify({
        model: "gpt-3.5-turbo", // Ou outro modelo que você estiver usando
        messages: [{ role: "user", content: userInput }],
        max_tokens: 100 
    });

    try {
        const response = await fetch(apiUrl, { method: "POST", headers, body });
        const data = await response.json();
        responseDiv.innerHTML = `<p><strong>Resposta:</strong> ${data.choices[0].message.content}</p>`;
    } catch (error) {
        responseDiv.innerHTML = "<p>Erro ao conectar com a IA.</p>";
    }
}


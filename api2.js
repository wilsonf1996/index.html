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


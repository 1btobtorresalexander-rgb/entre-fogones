
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido."
    });
  }

  const {
    ingredients = [],
    timeMinutes = 20,
    method = "sartén",
    preferences = "",
    budget = true
  } = req.body || {};

  if (!Array.isArray(ingredients)) {
    return res.status(400).json({
      error: "La lista de ingredientes no es válida."
    });
  }

  try {
    const response = await client.responses.create({
      model: "gpt-5.5",
      instructions:
        "Eres un cocinero experto de Entre Fogones. " +
        "Responde en español de España. Propón hasta 3 recetas " +
        "prácticas, con ingredientes, cantidades, pasos y tiempos. " +
        "Prioriza los ingredientes indicados y respeta el tiempo " +
        "y método de cocción. No inventes que el usuario tiene " +
        "ingredientes que no ha indicado. Si hay alérgenos o " +
        "restricciones, tenlos en cuenta.",
      input:
        "Ingredientes disponibles: " + ingredients.join(", ") +
        "\nTiempo máximo: " + timeMinutes + " minutos." +
        "\nMétodo de cocción: " + method +
        "\nPreferencias: " + (preferences || "Ninguna indicada") +
        "\nPriorizar ingredientes económicos: " + (budget ? "Sí" : "No") +
        "\nCrea propuestas claras y fáciles de seguir."
    });

    return res.status(200).json({
      text: response.output_text
    });
  } catch (error) {
    console.error("Error al generar recetas:", error.message);

    return res.status(500).json({
      error: "No se pudieron generar las recetas. Comprueba la configuración de OpenAI."
    });
  }
};

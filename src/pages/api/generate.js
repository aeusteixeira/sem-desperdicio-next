// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {
    try {
        const configuration = new Configuration({
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
          });
          const openai = new OpenAIApi(configuration);
          
          const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: req.body.prompt,
            max_tokens: 1000,
          });
          
          res.status(200).json({message: completion.data.choices[0].text})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
  }
  
import axios from 'axios';

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

const apiKey = process.env.API_KEY;


const messages = [
        {
            role: "system",
            content: "You are a helpful assistant."
        },
        {
            role: "user",
            content: "How is your health?"
        }];

async function run() {
    if(!apiKey){
        console.log("no api key found");
    }else {
        console.log("api key found " + apiKey);
    }
    const chatResponse = await axios.post(OPENAI_API_URL, {
        model: 'gpt-4o',
        messages,
        temperature: 0.3
    }, {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    });
    console.log("gpt response code : "+chatResponse.status)
}

run();

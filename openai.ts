
import OpenAI from 'openai';
import { ClientOptions } from 'openai';


const customConfig: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY,
  
};
const openai = new OpenAI(customConfig);
export default openai;



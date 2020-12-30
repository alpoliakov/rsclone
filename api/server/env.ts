import { config } from 'dotenv';

const result = config();

if(!result.error) {
  const { parsed } = result;
  if (parsed) {
    for ( let [key, value] of Object.entries(parsed)) {
      if (value) {
        process.env[key] = value;
        console.log(`${key}=${value}`);
      }
    }
  }
}

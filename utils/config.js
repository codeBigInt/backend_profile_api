import * as dotenv from "dotenv"

dotenv.config({ path: ["./*"] })

export const PORT = process.env.PORT || 3000
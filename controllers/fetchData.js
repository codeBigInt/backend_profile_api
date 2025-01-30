import { getUTCTime } from "../utils/getUTCTime.js"

export const fetchData = (req, res) => {
    const data = {
        email: "elliotlucky509@gmail.com",
        current_datetime: getUTCTime(),
        github_url: "https://github.com/codeBigInt/backend_profile_api"
    }
    res.status(200).send(data)
}


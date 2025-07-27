export default function handler(req, res) {
  if (req.method === "GET") {
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.status(403)end();
    }
  } else if (req.method === "POST") {
    console.log("POST webhook triggered:", JSON.stringify(req.body, null, 2));
    res.status(200)end();
  } else {
    res.status(404)end();
  }
}

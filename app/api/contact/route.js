const handler = (req, res) => {
  console.log(req.body);
  res.status(200).json({ name: "drago" })
}
export default handler;
function status(req, res) {
  res.status(200).json({ chave: "API funcionando" });
}

export default status;

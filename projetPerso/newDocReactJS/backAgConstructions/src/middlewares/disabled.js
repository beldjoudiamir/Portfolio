export const disabled = (_, res) => {
  return res.status(409).json({ code: "E_DISABLED" });
};

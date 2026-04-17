export const index = (req, res) => {
  return res.status(200).json({
    success: "true",
    message: "Notes has been fetched successfully",
  });
};

export const store = (req, res) => {
  const { note } = req.body;

  return res.status(201).json({
    success: "true",
    message: "Notes has been created successfully",
    data: note,
  });
};

export const show = (req, res) => {
  const { id } = req.params.id;
  return res.status(200).json({
    success: "true",
    message: "Note has been fetched successfully",
    data: id,
  });
};

export const update = (req, res) => {
  const { note } = req.body;

  return res.status(200).json({
    success: "true",
    message: "Notes has been updated successfully",
    data: note,
  });
};

export const destroy = (req, res) => {
  const { id } = req.params.id;
  return res.status(200).json({
    success: "true",
    message: "Note has been fetched successfully",
    data: id,
  });
};

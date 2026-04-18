export const getNotes = (req, res) => {
  return res.status(200).json({
    success: "true",
    message: "Notes has been fetched successfully",
  });
};

export const createNote = (req, res) => {
  const { note } = req.body;

  return res.status(201).json({
    success: "true",
    message: "Notes has been created successfully",
    data: note,
  });
};

export const getNote = (req, res) => {
  const { id } = req.params.id;
  return res.status(200).json({
    success: "true",
    message: "Note has been fetched successfully",
    data: id,
  });
};

export const updateNote = (req, res) => {
  const { note } = req.body;

  return res.status(200).json({
    success: "true",
    message: "Notes has been updated successfully",
    data: note,
  });
};

export const deleteNote = (req, res) => {
  const { id } = req.params.id;
  return res.status(200).json({
    success: "true",
    message: "Note has been fetched successfully",
    data: id,
  });
};

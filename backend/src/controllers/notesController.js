import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort by newest first (desc. order)

  return res.status(200).json({
    success: "true",
    message: "Notes has been fetched successfully",
    data: notes,
  });
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.create({
    title: title,
    content: content,
  });

  return res.status(201).json({
    success: "true",
    message: "Notes has been created successfully",
    data: note,
  });
};

export const getNote = async (req, res) => {
  const id = req.params.id;

  const note = await Note.findById(id);

  return res.status(200).json({
    success: "true",
    message: "Note has been fetched successfully",
    data: note,
  });
};

export const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  const note = await Note.findByIdAndUpdate(
    id,
    {
      title: title,
      content: content,
    },
    { returnDocument: "after" },
  );

  return res.status(200).json({
    success: "true",
    message: "Notes has been updated successfully",
    data: note,
  });
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;

  const note = await Note.findByIdAndDelete(id);

  return res.status(200).json({
    success: "true",
    message: "Note has been deleted successfully",
    data: note,
  });
};

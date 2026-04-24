import Note from "../models/Note.js";

const notFoundError = (data, message) => {
  if (!data) {
    return res.status(404).json({
      success: false,
      message: message || "Not found",
      data: data,
    });
  }
};

const internalServerError = (method, error) => {
  console.error(`Error in ${method}: ${error}`);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort by newest first (desc. order)

    notFoundError(notes, "Notes not found");

    return res.status(200).json({
      success: true,
      message: "Notes has been fetched successfully",
      data: notes,
    });
  } catch (error) {
    internalServerError("getNotes", error);
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title: title,
      content: content,
    });

    return res.status(201).json({
      success: true,
      message: "Notes has been created successfully",
      data: note,
    });
  } catch (error) {
    internalServerError("createNote", error);
  }
};

export const getNote = async (req, res) => {
  try {
    const id = req.params.id;

    const note = await Note.findById(id);

    notFoundError(note, "Note not found");

    return res.status(200).json({
      success: true,
      message: "Note has been fetched successfully",
      data: note,
    });
  } catch (error) {
    internalServerError("getNote", error);
  }
};

export const updateNote = async (req, res) => {
  try {
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

    notFoundError(note, "Note not found");

    return res.status(200).json({
      success: true,
      message: "Notes has been updated successfully",
      data: note,
    });
  } catch (error) {
    internalServerError("updateNote", error);
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;

    const note = await Note.findByIdAndDelete(id);

    notFoundError(note, "Note not found");

    return res.status(200).json({
      success: true,
      message: "Note has been deleted successfully",
      data: note,
    });
  } catch (error) {
    internalServerError("deleteNote", error);
  }
};

import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort by newest first (desc. order)

    if (!notes) {
      return res.status(404).json({
        success: false,
        message: "Notes not found",
        data: notes,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notes has been fetched successfully",
      data: notes,
    });
  } catch (error) {
    console.error("Error in getNotes:", error);
    res.status(500).json({
      success: false,
      message: "Server Internal Error",
    });
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
    console.error("Error in createNote:", error);
    res.status(500).json({
      success: false,
      message: "Server Internal Error",
    });
  }
};

export const getNote = async (req, res) => {
  try {
    const id = req.params.id;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: note,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note has been fetched successfully",
      data: note,
    });
  } catch (error) {
    console.error("Error in getNote:", error);
    res.status(500).json({
      success: false,
      message: "Server Internal Error",
    });
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

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: note,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notes has been updated successfully",
      data: note,
    });
  } catch (error) {
    console.error("Error in updateNote:", error);
    res.status(500).json({
      success: false,
      message: "Server Internal Error",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: note,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note has been deleted successfully",
      data: note,
    });
  } catch (error) {
    console.error("Error in deleteNote:", error);
    res.status(500).json({
      success: false,
      message: "Server Internal Error",
    });
  }
};

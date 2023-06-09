import Permit from '../models/Permit.js';

export const getPermits = async (req, res) => {
  try {
    const permits = await Permit.find();
    res.json(permits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPermit = async (req, res) => {
  try {
    const { id } = req.params;
    const permit = await Permit.findById(id);

    if (permit) {
      return res.json(permit);
    }

    res.status(404).json({ message: 'House not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPermit = async (req, res) => {
  try {
    const permit = new Permit(req.body);
    await permit.save();
    res.status(201).json(house);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePermit = async (req, res) => {
  try {
    const { id } = req.params;
    const permit = await Permit.findByIdAndUpdate(id, req.body)
    res.status(201).json(permit);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePermit = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Permit.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Permit deleted");
    }

    throw new Error("Permit not found");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
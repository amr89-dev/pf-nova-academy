const { Resource } = require("../db");

const createResource = async (req, res) => {
  try {
    const { name, type, link, lessonId } = req.body;
    const resource = await Resource.create({ name, type, link, lessonId});
    res.json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating resource" });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving resources" });
  }
};

const getResourceById = async (req, res) => {
  try {
    const { resourceId } = req.params;
    const resource = await Resource.findByPk(resourceId);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving resource" });
  }
};

const updateResourceById = async (req, res) => {
  try {
    const { resourceId } = req.params;
    const { name, type, link } = req.body;
    const resource = await Resource.findByPk(resourceId);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    resource.name = name;
    resource.type = type;
    resource.link = link;
    await resource.save();
    res.json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating resource" });
  }
};

const deleteResourceById = async (req, res) => {
  try {
    const { resourceId } = req.params;
    const resource = await Resource.findByPk(resourceId);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    await resource.destroy();
    res.json({ message: "Resource deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting resource" });
  }
};

module.exports = {
  createResource,
  getResources,
  getResourceById,
  updateResourceById,
  deleteResourceById,
};

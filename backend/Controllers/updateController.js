const Update = require('../Model/updates');

// @desc    Get all updates
// @route   GET /api/updates
// @access  Public
const getUpdates =async (req, res, next) => {
  const updates = await Update.find().sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: updates.length,
    data: updates
  });
};

// @desc    Get single update
// @route   GET /api/updates/:id
// @access  Public
const getUpdate = async (req, res, next) => {
  const update = await Update.findById(req.params.id);
  
  if (!update) {
    return res.status(404).json({
      success: false,
      message: 'Update not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: update
  });
};

// @desc    Create new update
// @route   POST /api/updates
// @access  Private (Admin only)
const createUpdate =async (req, res, next) => {
  const update = await Update.create(req.body);
  
  res.status(201).json({
    success: true,
    data: update
  });
};

// @desc    Update an update
// @route   PUT /api/updates/:id
// @access  Private (Admin only)
const updateUpdate = async (req, res, next) => {
  let update = await Update.findById(req.params.id);
  
  if (!update) {
    return res.status(404).json({
      success: false,
      message: 'Update not found'
    });
  }
  
  update = await Update.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  res.status(200).json({
    success: true,
    data: update
  });
};

// @desc    Delete an update
// @route   DELETE /api/updates/:id
// @access  Private (Admin only)
const deleteUpdate = async (req, res, next) => {
  const update = await Update.findById(req.params.id);
  
  if (!update) {
    return res.status(404).json({
      success: false,
      message: 'Update not found'
    });
  }
  
  await Update.findByIdAndDelete(req.params.id);
  
  res.status(200).json({
    success: true,
    data: {}
  });
};

// Export all functions at once
module.exports = {
  getUpdates,
  getUpdate,
  createUpdate,
  updateUpdate,
  deleteUpdate
};
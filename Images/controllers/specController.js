import airCirculationModel from "../models/Spec Models/Cooling Features Models/airCirculationModel.js";
import allRoundCoolingModeModal from "../models/Spec Models/Cooling Features Models/allRoundCoolingModeModal.js";
import fastChillingModeModal from "../models/Spec Models/Cooling Features Models/fastChillingModeModal.js";
import fastIceModeModal from "../models/Spec Models/Cooling Features Models/fastIceModeModal.js";
import bodyMaterialModel from "../models/Spec Models/Design & Body Models/bodyMaterialModel.js";
import freezerMountModel from "../models/Spec Models/Design & Body Models/freezerMountModel.js";
import handleTypeModel from "../models/Spec Models/Design & Body Models/handleTypeModel.js";
import indicatorLightModel from "../models/Spec Models/Ease of Use Features Models/indicatorLightModel.js";
import bacterialGrowthPreventionModel from "../models/Spec Models/Freshness Models/bacterialGrowthPreventionModel.js";
import maintainFoodVitalsModels from "../models/Spec Models/Freshness Models/maintainFoodVitalsModels.js";
import brandModel from "../models/Spec Models/General Models/brandModel.js";

import panelDisplayModel from "../models/Spec Models/General Models/panelDisplayModel.js";
import refrigeratorTypeModel from "../models/Spec Models/General Models/refrigeratorTypeModel.js";
import iceMakerTypeModel from "../models/Spec Models/Interior Features Models/iceMakerTypeModel.js";
import shelfMaterialModel from "../models/Spec Models/Interior Features Models/shelfMaterialModel.js";
import compressorModel from "../models/Spec Models/Technical Specification Models/compressorModel.js";
import coolingTechnologyModel from "../models/Spec Models/Technical Specification Models/coolingTechnologyModel.js";
import warrantyTypeModel from "../models/Spec Models/Warranty Models/warrantyTypeModel.js";
import refrigerantModel from "../models/Spec Models/Technical Specification Models/refrigerantModel.js";
import gasketTypeModel from "../models/Spec Models/Interior Features Models/gasketTypeModel.js";

//Air Circulation Create Controller
export const createAirCirculationController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await airCirculationModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Air Circulartion Specification already exists",
      });
    }
    const spec = await new airCirculationModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Air Ciculation Controller",
    });
  }
};

//Air Circulation Uppdate Controller
export const updateAirCirculationController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await airCirculationModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Air Circulation Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Air Circulation Spec",
    });
  }
};

//Air Circulation Get All Controller
export const airCirculationController = async (req, res) => {
  try {
    const spec = await airCirculationModel.find({});
    res.status(200).send({
      success: true,
      message: "All Air Circulation Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Air Circulation Specs",
    });
  }
};

//Single Air Controller Specification Controller
export const singleAirCirculationController = async (req, res) => {
  try {
    const spec = await airCirculationModel.findOne({ id: req.params._id });
    res.status(200).send({
      success: true,
      message: "Air Circulation specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting air circulation specifcation",
      error,
    });
  }
};

//Delete Air Circulation Spec Controller

export const deleteAirCirculationController = async (req, res) => {
  try {
    const { id } = req.params;
    await airCirculationModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Air Circulation Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting air circulation specification",
      error,
    });
  }
};

//All Round Cooling Create Controller
export const createAllRoundCoolingController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await allRoundCoolingModeModal.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "All ROund COoling Specification already exists",
      });
    }
    const spec = await new allRoundCoolingModeModal({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in All Round Cooling Controller",
    });
  }
};

//All Round Cooling Uppdate Controller
export const updateAllRoundCoolingController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await allRoundCoolingModeModal.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "All Round Cooling Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating All Round Cooling Spec",
    });
  }
};

//All Round Cooling Get All Controller
export const allRoundCoolingController = async (req, res) => {
  try {
    const spec = await allRoundCoolingModeModal.find({});
    res.status(200).send({
      success: true,
      message: "All All ROund Cooling Mode Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all All Round Cooling Specs",
    });
  }
};

//Single All Round Cooling Specification Controller
export const singleAllRoundCoolingController = async (req, res) => {
  try {
    const spec = await allRoundCoolingModeModal.findOne({ id: req.params._id });
    res.status(200).send({
      success: true,
      message: "All Round Cooling Mode specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all round cooling mode specifcation",
      error,
    });
  }
};

//Delete All Round Cooling Spec Controller

export const deleteAllRoundCoolingController = async (req, res) => {
  try {
    const { id } = req.params;
    await allRoundCoolingModeModal.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "All Round Cooling Mode Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting all round cooling specification",
      error,
    });
  }
};

// Fast Chilling Mode Create Controller
export const createFastChillingModeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await fastChillingModeModal.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Fast Chilling Mode Specification already exists",
      });
    }
    const spec = await new fastChillingModeModal({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fast Chilling Mode Controller",
    });
  }
};

//Fast Chilling Mode Uppdate Controller
export const updateFastChillingModeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await fastChillingModeModal.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Fast Chilling Mode Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Fast Chilling Mode Spec",
    });
  }
};

//Fast CHilling Mode Get All Controller
export const fastChillingModeController = async (req, res) => {
  try {
    const spec = await fastChillingModeModal.find({});
    res.status(200).send({
      success: true,
      message: "All Fast Chilling Modes Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Fast Chilling Mode Specs",
    });
  }
};

//Single Fast Chilling Mode Specification Controller
export const singleFastChillingModeController = async (req, res) => {
  try {
    const spec = await fastChillingModeModal.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "All Fast Chilling Mode specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting fast chilling mode specifcation",
      error,
    });
  }
};

//Delete Fast Chilling Mode Spec Controller

export const deleteFastChillingModeController = async (req, res) => {
  try {
    const { id } = req.params;
    await fastChillingModeModal.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Fast Chilling Mode Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting fast chilling mode specification",
      error,
    });
  }
};

// Fast Ice Mode Create Controller
export const createFastIceModeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await fastIceModeModal.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Fast Ice Mode Specification already exists",
      });
    }
    const spec = await new fastIceModeModal({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fast Ice Mode Controller",
    });
  }
};

//Fast Ice Mode Uppdate Controller
export const updateFastIceModeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await fastIceModeModal.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Fast Ice Mode Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Fast Ice Mode Spec",
    });
  }
};

//Fast Ice Mode Get All Controller
export const fastIceModeController = async (req, res) => {
  try {
    const spec = await fastIceModeModal.find({});
    res.status(200).send({
      success: true,
      message: "All Fast Ice Modes Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Fast Ice Mode Specs",
    });
  }
};

//Single Fast Ice Mode Specification Controller
export const singleFastIceModeController = async (req, res) => {
  try {
    const spec = await fastIceModeModal.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "All Fast Ice Mode specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting fast ice mode specifcation",
      error,
    });
  }
};

//Delete Fast Ice Mode Spec Controller

export const deleteFastIceModeController = async (req, res) => {
  try {
    const { id } = req.params;
    await fastIceModeModal.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Fast Ice Mode Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting fast ice mode specification",
      error,
    });
  }
};

// Body Material Create Controller
export const createBodyMaterialController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await bodyMaterialModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Body Material Specification already exists",
      });
    }
    const spec = await new bodyMaterialModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Body Material Controller",
    });
  }
};

//Body Material Uppdate Controller
export const updateBodyMaterialController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await bodyMaterialModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Body Material Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Body Material Spec",
    });
  }
};

//Body Material Get All Controller
export const bodyMaterialController = async (req, res) => {
  try {
    const spec = await bodyMaterialModel.find({});
    res.status(200).send({
      success: true,
      message: "All Body Material Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Body Material Specs",
    });
  }
};

//Single Body Material Specification Controller
export const singleBodyMaterialController = async (req, res) => {
  try {
    const spec = await bodyMaterialModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Body Material specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting body material specifcation",
      error,
    });
  }
};

//Delete Fast Ice Mode Spec Controller

export const deleteBodyMaterialController = async (req, res) => {
  try {
    const { id } = req.params;
    await bodyMaterialModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Body Material Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting body material specification",
      error,
    });
  }
};

// Freezer Mount Create Controller
export const createFreezerMountController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await freezerMountModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Freezer Mount Specification already exists",
      });
    }
    const spec = await new freezerMountModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Freezer Mount Controller",
    });
  }
};

//Freezer Mount Update Controller
export const updateFreezerMountController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await freezerMountModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Freezer Mount Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Freezer Mount Spec",
    });
  }
};

//Freezre Mount Get All Controller
export const freezerMountController = async (req, res) => {
  try {
    const spec = await freezerMountModel.find({});
    res.status(200).send({
      success: true,
      message: "All Freezer Mount Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Freezre Mount Specs",
    });
  }
};

//Single Freezer Mount Specification Controller
export const singleFreezerMountController = async (req, res) => {
  try {
    const spec = await freezerMountModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Freezre Mount specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting freezer mount specifcation",
      error,
    });
  }
};

//Delete Freezer Mount Spec Controller

export const deleteFreezerMountController = async (req, res) => {
  try {
    const { id } = req.params;
    await freezerMountModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Freezer Mount Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting freezer mount specification",
      error,
    });
  }
};

// Handle Type Create Controller
export const createHandleTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await handleTypeModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Handle Type Specification already exists",
      });
    }
    const spec = await new handleTypeModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Handle Type Controller",
    });
  }
};

//Handle Type Update Controller
export const updateHandleTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await handleTypeModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Handle Type Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Handle Type Spec",
    });
  }
};

//Handle Type Get All Controller
export const handleTypeController = async (req, res) => {
  try {
    const spec = await handleTypeModel.find({});
    res.status(200).send({
      success: true,
      message: "All Handle Type Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Handle Type Specs",
    });
  }
};

//Single Handle Type Specification Controller
export const singleHandleTypeController = async (req, res) => {
  try {
    const spec = await handleTypeModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Handle Type specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting handle type specifcation",
      error,
    });
  }
};

//Delete Handle Type Spec Controller

export const deleteHandleTypeController = async (req, res) => {
  try {
    const { id } = req.params;
    await handleTypeModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Handle Type Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting handle type specification",
      error,
    });
  }
};

// Indicator Light Create Controller
export const createIndicatorLightController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await indicatorLightModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Indicator Light Specification already exists",
      });
    }
    const spec = await new indicatorLightModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Indicator Light Controller",
    });
  }
};

//Indicator Light Update Controller
export const updateIndicatorLightController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await indicatorLightModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Indicator Light Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Indicator Light Spec",
    });
  }
};

//Indicator Light Get All Controller
export const indicatorLightController = async (req, res) => {
  try {
    const spec = await indicatorLightModel.find({});
    res.status(200).send({
      success: true,
      message: "All Indicator Light Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Indicator Light Specs",
    });
  }
};

//Single Indicator Light Specification Controller
export const singleIndicatorLightController = async (req, res) => {
  try {
    const spec = await indicatorLightModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Indicator Light specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting indicator light specifcation",
      error,
    });
  }
};

//Delete Indicator Light Spec Controller

export const deleteIndicatorLightController = async (req, res) => {
  try {
    const { id } = req.params;
    await indicatorLightModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Indicator Light Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting indicator light specification",
      error,
    });
  }
};

// Bacterial Growth Prevention Create Controller
export const createBacterialGrowthPreventionController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await bacterialGrowthPreventionModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Bacterial Growth Prevention Specification already exists",
      });
    }
    const spec = await new bacterialGrowthPreventionModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Bacterial Growth Prevention Controller",
    });
  }
};

//Bacteria Growth Prevention Update Controller
export const updateBacterialGrowthPreventionController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await bacterialGrowthPreventionModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Bacterial Growth Prevention Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Bacterial Growth Prevention Spec",
    });
  }
};

//Bacterial Growth Prevention Get All Controller
export const bacterialGrowthPreventionController = async (req, res) => {
  try {
    const spec = await bacterialGrowthPreventionModel.find({});
    res.status(200).send({
      success: true,
      message: "All Bacterial Growth Prevention Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Bacterial Growth Prevention Specs",
    });
  }
};

//Single Bacterial Growth Prevention Specification Controller
export const singleBacterialGrowthPreventionController = async (req, res) => {
  try {
    const spec = await bacterialGrowthPreventionModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message:
        "Bacterial Growth Prevention specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting bacterial growth prevention specifcation",
      error,
    });
  }
};

//Delete Bacterial Growth Prevention Spec Controller

export const deleteBacterialGrowthPreventionController = async (req, res) => {
  try {
    const { id } = req.params;
    await bacterialGrowthPreventionModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Bacterial Growth Prevention Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting bacterial growth prevention specification",
      error,
    });
  }
};

// Food Vitals Tecjhnology Create Controller
export const createFoodVitalsTechnologyController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await maintainFoodVitalsModels.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Food Vitals Technology Specification already exists",
      });
    }
    const spec = await new maintainFoodVitalsModels({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Food Vitals Technology Controller",
    });
  }
};

//Food Vitals Technology Update Controller
export const updateFoodVitalsTechnologyController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await maintainFoodVitalsModels.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Food Vitals Technology Spec Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Food Vitals Technology Spec",
    });
  }
};

//Food Vitals Technology Get All Controller
export const foodVitalsTechnologyController = async (req, res) => {
  try {
    const spec = await maintainFoodVitalsModels.find({});
    res.status(200).send({
      success: true,
      message: "All Food Vitals Technology Specs List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Food Vitals Technology Specs",
    });
  }
};

//Single Food Vitals Technology Specification Controller
export const singleFoodVitalsTechnologyController = async (req, res) => {
  try {
    const spec = await maintainFoodVitalsModels.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Food Vitals Technology specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting food vitals technology specifcation",
      error,
    });
  }
};

//Delete Food Vitals Technology Spec Controller

export const deleteFoodVitalsTechnologyController = async (req, res) => {
  try {
    const { id } = req.params;
    await maintainFoodVitalsModels.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Food Vitals Technology Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting food vitals technology specification",
      error,
    });
  }
};

// Brand Create Controller
export const createBrandController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await brandModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Brand already exists",
      });
    }
    const spec = await new brandModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Brand Controller",
    });
  }
};

//Brand Update Controller
export const updateBrandController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await brandModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Brand Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Brand",
    });
  }
};

//Brand Get All Controller
export const brandController = async (req, res) => {
  try {
    const spec = await brandModel.find({});
    res.status(200).send({
      success: true,
      message: "All Brands List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Brands",
    });
  }
};

//Single Brand Controller
export const singleBrandController = async (req, res) => {
  try {
    const spec = await brandModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Brand is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting food vitals technology specifcation",
      error,
    });
  }
};

//Delete Brand Controller

export const deleteBrandController = async (req, res) => {
  try {
    const { id } = req.params;
    await brandModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Brand successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting brand",
      error,
    });
  }
};

// Panel Display Create Controller
export const createPanelDisplayController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await panelDisplayModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Panel Display Spcification already exists",
      });
    }
    const spec = await new panelDisplayModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Panel Display Controller",
    });
  }
};

//Panel Display Update Controller
export const updatePanelDisplayController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await panelDisplayModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Panel Display Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Panel Display Specification",
    });
  }
};

//Panel Display Get All Controller
export const panelDisplayController = async (req, res) => {
  try {
    const spec = await panelDisplayModel.find({});
    res.status(200).send({
      success: true,
      message: "All Panel Display Specification List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Panel Displays",
    });
  }
};

//Single Panel Display Controller
export const singlePanelDisplayController = async (req, res) => {
  try {
    const spec = await panelDisplayModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Panel Display Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Panel Display specifcation",
      error,
    });
  }
};

//Delete Panel Display Controller

export const deletePanelDisplayController = async (req, res) => {
  try {
    const { id } = req.params;
    await panelDisplayModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Panel Display Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting panel display",
      error,
    });
  }
};

// Refrigerator Type Create Controller
export const createRefrigeratorTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await refrigeratorTypeModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Refrigerator Type Spcification already exists",
      });
    }
    const spec = await new refrigeratorTypeModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Refrigerator Type Controller",
    });
  }
};

// Refrigerator Type Controller
export const updateRefrigeratorTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await refrigeratorTypeModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Refrigerator Type Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Refrigerator Type Specification",
    });
  }
};

//Refrigerator Type Get All Controller
export const refrigeratorTypeController = async (req, res) => {
  try {
    const spec = await refrigeratorTypeModel.find({});
    res.status(200).send({
      success: true,
      message: "All Refrigerator Type  List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Refrigerator Type",
    });
  }
};

//Single Refrigerator Type Controller
export const singleRefrigeratorTypeController = async (req, res) => {
  try {
    const spec = await refrigeratorTypeModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Refrigerator Type Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Refrigerator Type specifcation",
      error,
    });
  }
};

//Delete Refrigerator Type Controller

export const deleteRefrigeratorTypeController = async (req, res) => {
  try {
    const { id } = req.params;
    await refrigeratorTypeModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Refrigerator Type Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting refrigerator type",
      error,
    });
  }
};

// Ice Maker Type Create Controller
export const createIceMakerTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await iceMakerTypeModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Ice Maker Type Spcification already exists",
      });
    }
    const spec = await new iceMakerTypeModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Ice Maker Type Controller",
    });
  }
};

// Ice Maker Type Controller
export const updateIceMakerTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await iceMakerTypeModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Ice Maker Type Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Ice Maker Type Specification",
    });
  }
};

//Ice Maker Type Get All Controller
export const iceMakerTypeController = async (req, res) => {
  try {
    const spec = await iceMakerTypeModel.find({});
    res.status(200).send({
      success: true,
      message: "All Ice Maker Type List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Ice Maker Type",
    });
  }
};

//Single Ice Maker Type Controller
export const singleIceMakerTypeController = async (req, res) => {
  try {
    const spec = await iceMakerTypeModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Ice Maker Type Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Ice Maker Type specifcation",
      error,
    });
  }
};

//Delete Gasket Type Controller

export const deleteIceMakerTypeController = async (req, res) => {
  try {
    const { id } = req.params;
    await iceMakerTypeModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Ice Maker Type Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting ice maker type",
      error,
    });
  }
};

// Gasket Type Create Controller
export const createGasketTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await gasketTypeModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Gasket Type Spcification already exists",
      });
    }
    const spec = await new gasketTypeModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Gasket Type Controller",
    });
  }
};

// Gasket Type Controller
export const updateGasketTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await gasketTypeModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Gasket Type Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Gasket Type Specification",
    });
  }
};

//Gasket Type Get All Controller
export const gasketTypeController = async (req, res) => {
  try {
    const spec = await gasketTypeModel.find({});
    res.status(200).send({
      success: true,
      message: "All Gasket Type List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Gasket Type",
    });
  }
};

//Single Gasket Type Controller
export const singleGasketTypeController = async (req, res) => {
  try {
    const spec = await gasketTypeModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Gasket Type Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Gasket Type specifcation",
      error,
    });
  }
};

//Delete Gasket Type Controller

export const deleteGasketTypeController = async (req, res) => {
  try {
    const { id } = req.params;
    await gasketTypeModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Gasket Type Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting gasket type",
      error,
    });
  }
};

// Shelf Material Create Controller
export const createShelfMaterialController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await shelfMaterialModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Shelf Material Spcification already exists",
      });
    }
    const spec = await new shelfMaterialModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Shelf Material Controller",
    });
  }
};

// Shelf Material Controller
export const updateShelfMaterialController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await shelfMaterialModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Shelf Material Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Shelf Material Specification",
    });
  }
};

//Shelf Material Get All Controller
export const shelfMaterialController = async (req, res) => {
  try {
    const spec = await shelfMaterialModel.find({});
    res.status(200).send({
      success: true,
      message: "All Shelf Material List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Shelf Material",
    });
  }
};

//Single Shelf Material Controller
export const singleShelfMaterialController = async (req, res) => {
  try {
    const spec = await shelfMaterialModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Shelf Material Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Shelf Material specifcation",
      error,
    });
  }
};

//Delete Gasket Type Controller

export const deleteShelfMaterialController = async (req, res) => {
  try {
    const { id } = req.params;
    await shelfMaterialModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Shelf Material Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting shelf material",
      error,
    });
  }
};

// Compressor Create Controller
export const createCompressorController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await compressorModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Compressor Specification already exists",
      });
    }
    const spec = await new compressorModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Compressor Controller",
    });
  }
};

// Compressor Controller
export const updateCompressorController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await compressorModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Compressor Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Compressor Specification",
    });
  }
};

//Shelf Material Get All Controller
export const compressorController = async (req, res) => {
  try {
    const spec = await compressorModel.find({});
    res.status(200).send({
      success: true,
      message: "All Compressor List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Compressor List",
    });
  }
};

//Single Compressor Controller
export const singleCompressorController = async (req, res) => {
  try {
    const spec = await compressorModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Compressor Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Compressor specifcation",
      error,
    });
  }
};

//Delete Compressor Controller

export const deleteCompressorController = async (req, res) => {
  try {
    const { id } = req.params;
    await compressorModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Compressor Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting compressor",
      error,
    });
  }
};

// Cooling Technology Create Controller
export const createCoolingTechnologyController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await coolingTechnologyModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Cooling Technology Specification already exists",
      });
    }
    const spec = await new coolingTechnologyModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Cooling Technology Controller",
    });
  }
};

// Cooling Technology Controller
export const updateCoolingTechnologyController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await coolingTechnologyModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Cooling Technology Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Cooling Technology Specification",
    });
  }
};

//Cooling Technology Get All Controller
export const coolingTechnologyController = async (req, res) => {
  try {
    const spec = await coolingTechnologyModel.find({});
    res.status(200).send({
      success: true,
      message: "All Cooling Technology List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Cooling Technology List",
    });
  }
};

//Single Cooling Technology Controller
export const singleCoolingTechnologyController = async (req, res) => {
  try {
    const spec = await coolingTechnologyModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Cooling Technology Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Cooling Technology specifcation",
      error,
    });
  }
};

//Delete Cooling Technology Controller

export const deleteCoolingTechnologyController = async (req, res) => {
  try {
    const { id } = req.params;
    await coolingTechnologyModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Cooling Technology Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting cooling technology",
      error,
    });
  }
};

// Refrigerant Create Controller
export const createRefrigerantController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await refrigerantModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "Compressor Specification already exists",
      });
    }
    const spec = await new refrigerantModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Refrigerant Controller",
    });
  }
};

// Refrigerant Controller
export const updateRefrigerantController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await refrigerantModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Refrigerant Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Refrigerant Specification",
    });
  }
};

//Refrigerant Get All Controller
export const refrigerantController = async (req, res) => {
  try {
    const spec = await refrigerantModel.find({});
    res.status(200).send({
      success: true,
      message: "All Refrigerant List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Refrigerant List",
    });
  }
};

//Single Refrigerant Controller
export const singleRefrigerantController = async (req, res) => {
  try {
    const spec = await refrigerantModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Refrigerant Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Refrigerant specifcation",
      error,
    });
  }
};

//Delete Refrigerant Controller

export const deleteRefrigerantController = async (req, res) => {
  try {
    const { id } = req.params;
    await refrigerantModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Refrigerant Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting refrigerant",
      error,
    });
  }
};

// Warranty Type Create Controller
export const createWarrantyTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }

    const existingSpec = await warrantyTypeModel.findOne({ name });
    if (existingSpec) {
      return res.status(200).send({
        success: true,
        message: "WarrantyType Specification already exists",
      });
    }
    const spec = await new warrantyTypeModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "New Spec Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Warranty Type Controller",
    });
  }
};

// Warranty Type Controller
export const updateWarrantyTypeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const spec = await warrantyTypeModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Warranty Type Specification Successfully Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Warranty Type Specification",
    });
  }
};

//Warranty Type Get All Controller
export const warrantyTypeController = async (req, res) => {
  try {
    const spec = await warrantyTypeModel.find({});
    res.status(200).send({
      success: true,
      message: "All Warranty Type List",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Getting all Warranty Type List",
    });
  }
};

//Single Warranty Type Controller
export const singleWarrantyTypeController = async (req, res) => {
  try {
    const spec = await warrantyTypeModel.findOne({
      id: req.params._id,
    });
    res.status(200).send({
      success: true,
      message: "Warranty Type Specification is succesfully retrieved",
      spec,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Warranty Type specifcation",
      error,
    });
  }
};

//Delete Warranty Type Controller

export const deleteWarrantyTypeController = async (req, res) => {
  try {
    const { id } = req.params;
    await warrantyTypeModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Warranty Type Specification successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Warranty Type",
      error,
    });
  }
};

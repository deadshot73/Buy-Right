import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  airCirculationController,
  allRoundCoolingController,
  bacterialGrowthPreventionController,
  bodyMaterialController,
  brandController,
  compressorController,
  coolingTechnologyController,
  createAirCirculationController,
  createAllRoundCoolingController,
  createBacterialGrowthPreventionController,
  createBodyMaterialController,
  createBrandController,
  createCompressorController,
  createCoolingTechnologyController,
  createFastChillingModeController,
  createFastIceModeController,
  createFoodVitalsTechnologyController,
  createFreezerMountController,
  createGasketTypeController,
  createHandleTypeController,
  createIceMakerTypeController,
  createIndicatorLightController,
  createPanelDisplayController,
  createRefrigerantController,
  createRefrigeratorTypeController,
  createShelfMaterialController,
  createWarrantyTypeController,
  deleteAirCirculationController,
  deleteAllRoundCoolingController,
  deleteBacterialGrowthPreventionController,
  deleteBodyMaterialController,
  deleteBrandController,
  deleteCompressorController,
  deleteCoolingTechnologyController,
  deleteFastChillingModeController,
  deleteFastIceModeController,
  deleteFoodVitalsTechnologyController,
  deleteFreezerMountController,
  deleteGasketTypeController,
  deleteHandleTypeController,
  deleteIceMakerTypeController,
  deleteIndicatorLightController,
  deletePanelDisplayController,
  deleteRefrigerantController,
  deleteRefrigeratorTypeController,
  deleteShelfMaterialController,
  deleteWarrantyTypeController,
  fastChillingModeController,
  fastIceModeController,
  foodVitalsTechnologyController,
  freezerMountController,
  gasketTypeController,
  handleTypeController,
  iceMakerTypeController,
  indicatorLightController,
  panelDisplayController,
  refrigerantController,
  refrigeratorTypeController,
  shelfMaterialController,
  singleAirCirculationController,
  singleAllRoundCoolingController,
  singleBacterialGrowthPreventionController,
  singleBodyMaterialController,
  singleBrandController,
  singleCompressorController,
  singleCoolingTechnologyController,
  singleFastChillingModeController,
  singleFastIceModeController,
  singleFoodVitalsTechnologyController,
  singleFreezerMountController,
  singleGasketTypeController,
  singleHandleTypeController,
  singleIceMakerTypeController,
  singleIndicatorLightController,
  singlePanelDisplayController,
  singleRefrigerantController,
  singleRefrigeratorTypeController,
  singleShelfMaterialController,
  singleWarrantyTypeController,
  updateAirCirculationController,
  updateAllRoundCoolingController,
  updateBacterialGrowthPreventionController,
  updateBodyMaterialController,
  updateBrandController,
  updateCompressorController,
  updateCoolingTechnologyController,
  updateFastChillingModeController,
  updateFastIceModeController,
  updateFoodVitalsTechnologyController,
  updateFreezerMountController,
  updateGasketTypeController,
  updateHandleTypeController,
  updateIceMakerTypeController,
  updateIndicatorLightController,
  updatePanelDisplayController,
  updateRefrigerantController,
  updateRefrigeratorTypeController,
  updateShelfMaterialController,
  updateWarrantyTypeController,
  warrantyTypeController,
} from "../controllers/specController.js";

const router = express.Router();

//Spec Routes

// Create Speification - Air Circulation
router.post(
  "/air-circulation",
  requireSignIn,
  isAdmin,
  createAirCirculationController
);

// Update Specification - Air Circulation
router.put(
  "/air-circulation/:id",
  requireSignIn,
  isAdmin,
  updateAirCirculationController
);

// Get All Specification
router.get("/air-circulation", airCirculationController);

//Get Single Specification - Air Circulation
router.get("/air-circulation/:id", singleAirCirculationController);

//Delete Specification - Air Circulation
router.delete(
  "/air-circulation/:id",
  requireSignIn,
  isAdmin,
  deleteAirCirculationController
);

// Create Speification - All Round Cooling
router.post(
  "/all-round-cooling",
  requireSignIn,
  isAdmin,
  createAllRoundCoolingController
);

// Update Speification - All Round Cooling
router.put(
  "/all-round-cooling/:id",
  requireSignIn,
  isAdmin,
  updateAllRoundCoolingController
);

// Get All Specification - All Round Cooling
router.get("/all-round-cooling", allRoundCoolingController);

//Get Single Specification - All Round Cooling
router.get("/all-round-cooling/:id", singleAllRoundCoolingController);

//Delete Specification - All Round Cooling
router.delete(
  "/all-round-cooling/:id",
  requireSignIn,
  isAdmin,
  deleteAllRoundCoolingController
);

// Create Speification - Fast Chilling Mode
router.post(
  "/fast-chilling-mode",
  requireSignIn,
  isAdmin,
  createFastChillingModeController
);

// Update Speification - Fast Chilling Mode
router.put(
  "/fast-chilling-mode/:id",
  requireSignIn,
  isAdmin,
  updateFastChillingModeController
);

// Get All Specification - Fast Chilling Mode
router.get("/fast-chilling-mode", fastChillingModeController);

//Get Single Specification - Fast Chilling Mode
router.get("/fast-chilling-mode/:id", singleFastChillingModeController);

//Delete Specification - All Round Cooling
router.delete(
  "/fast-chilling-mode/:id",
  requireSignIn,
  isAdmin,
  deleteFastChillingModeController
);

// Create Specification - Fast Ice Mode
router.post(
  "/fast-ice-mode",
  requireSignIn,
  isAdmin,
  createFastIceModeController
);

// Update Speification - Fast Chilling Mode
router.put(
  "/fast-ice-mode/:id",
  requireSignIn,
  isAdmin,
  updateFastIceModeController
);

// Get All Specification - Fast Chilling Mode
router.get("/fast-ice-mode", fastIceModeController);

//Get Single Specification - Fast Chilling Mode
router.get("/fast-ice-mode/:id", singleFastIceModeController);

//Delete Specification - All Round Cooling
router.delete(
  "/fast-ice-mode/:id",
  requireSignIn,
  isAdmin,
  deleteFastIceModeController
);

// Create Speification - Body Material
router.post(
  "/body-material",
  requireSignIn,
  isAdmin,
  createBodyMaterialController
);

// Update Speification - Body Material
router.put(
  "/body-material/:id",
  requireSignIn,
  isAdmin,
  updateBodyMaterialController
);

// Get All Specification - Body Material
router.get("/body-material", bodyMaterialController);

//Get Single Specification - Body Material
router.get("/body-material/:id", singleBodyMaterialController);

//Delete Specification - Body Material
router.delete(
  "/body-material/:id",
  requireSignIn,
  isAdmin,
  deleteBodyMaterialController
);

// Create Speification - Freezer Mount
router.post(
  "/freezer-mount",
  requireSignIn,
  isAdmin,
  createFreezerMountController
);

// Update Speification - Freezer Mount
router.put(
  "/freezer-mount/:id",
  requireSignIn,
  isAdmin,
  updateFreezerMountController
);

// Get All Specification - Freezer Mount
router.get("/freezer-mount", freezerMountController);

//Get Single Specification - Freezer Mount
router.get("/freezer-mount/:id", singleFreezerMountController);

//Delete Specification - Freezer Mount
router.delete(
  "/freezer-mount/:id",
  requireSignIn,
  isAdmin,
  deleteFreezerMountController
);

// Create Speification - Handle Type
router.post("/handle-type", requireSignIn, isAdmin, createHandleTypeController);

// Update Speification - Handle Type
router.put(
  "/handle-type/:id",
  requireSignIn,
  isAdmin,
  updateHandleTypeController
);

// Get All Specification - Handle Type
router.get("/handle-type", handleTypeController);

//Get Single Specification - Handle Type
router.get("/handle-type/:id", singleHandleTypeController);

//Delete Specification - Handle Type
router.delete(
  "/handle-type/:id",
  requireSignIn,
  isAdmin,
  deleteHandleTypeController
);

// Create Speification - Indicator Light
router.post(
  "/indicator-light",
  requireSignIn,
  isAdmin,
  createIndicatorLightController
);

// Update Speification - Indicator Light
router.put(
  "/indicator-light/:id",
  requireSignIn,
  isAdmin,
  updateIndicatorLightController
);

// Get All Specification - Indicator Light
router.get("/indicator-light", indicatorLightController);

//Get Single Specification - Indicator Light
router.get("/indicator-light/:id", singleIndicatorLightController);

//Delete Specification - Indicator Light
router.delete(
  "/indicator-light/:id",
  requireSignIn,
  isAdmin,
  deleteIndicatorLightController
);

// Create Speification - Bacterial Growth Prevention
router.post(
  "/bacterial-growth-prevention",
  requireSignIn,
  isAdmin,
  createBacterialGrowthPreventionController
);

// Update Speification - Bacterial Growth Prevention
router.put(
  "/bacterial-growth-prevention/:id",
  requireSignIn,
  isAdmin,
  updateBacterialGrowthPreventionController
);

// Get All Specification - Bacterial Growth Prevention
router.get("/bacterial-growth-prevention", bacterialGrowthPreventionController);

//Get Single Specification - Bacterial Growth Prevention
router.get(
  "/bacterial-growth-prevention/:id",
  singleBacterialGrowthPreventionController
);

//Delete Specification - Bacterial Growth Prevention
router.delete(
  "/bacterial-growth-prevention/:id",
  requireSignIn,
  isAdmin,
  deleteBacterialGrowthPreventionController
);

// Create Speification - Food Vitals Technology
router.post(
  "/food-vitals-technology",
  requireSignIn,
  isAdmin,
  createFoodVitalsTechnologyController
);

// Update Speification - Food Vitals Technology
router.put(
  "/food-vitals-technology/:id",
  requireSignIn,
  isAdmin,
  updateFoodVitalsTechnologyController
);

// Get All Specification - Food Vitals Technology
router.get("/food-vitals-technology", foodVitalsTechnologyController);

//Get Single Specification - Food Vitals Technology
router.get("/food-vitals-technology/:id", singleFoodVitalsTechnologyController);

//Delete Specification - Food Vitals Technology
router.delete(
  "/food-vitals-technology/:id",
  requireSignIn,
  isAdmin,
  deleteFoodVitalsTechnologyController
);

// Create Speification - Brands
router.post("/brands", requireSignIn, isAdmin, createBrandController);

// Update Speification - Brands
router.put("/brands/:id", requireSignIn, isAdmin, updateBrandController);

// Get All Specification - Brands
router.get("/brands", brandController);

//Get Single Specification - Brands
router.get("/brands/:id", singleBrandController);

//Delete Specification - Brands
router.delete("/brands/:id", requireSignIn, isAdmin, deleteBrandController);

// Create Speification - Panel Display
router.post(
  "/panel-display",
  requireSignIn,
  isAdmin,
  createPanelDisplayController
);

// Update Speification - Panel Display
router.put(
  "/panel-display/:id",
  requireSignIn,
  isAdmin,
  updatePanelDisplayController
);

// Get All Specification - Panel Display
router.get("/panel-display", panelDisplayController);

//Get Single Specification - Panel Display
router.get("/panel-display/:id", singlePanelDisplayController);

//Delete Specification - Panel Display
router.delete(
  "/panel-display/:id",
  requireSignIn,
  isAdmin,
  deletePanelDisplayController
);

// Create Speification - Gasket Type
router.post("/gasket-type", requireSignIn, isAdmin, createGasketTypeController);

// Update Speification - Gasket Type
router.put(
  "/gasket-type/:id",
  requireSignIn,
  isAdmin,
  updateGasketTypeController
);

// Get All Specification - Gasket Type
router.get("/gasket-type", gasketTypeController);

//Get Single Specification - Gasket Type
router.get("/gasket-type/:id", singleGasketTypeController);

//Delete Specification - Gasket Type
router.delete(
  "/gasket-type/:id",
  requireSignIn,
  isAdmin,
  deleteGasketTypeController
);

// Create Speification - Ice Maker Type
router.post(
  "/ice-maker-type",
  requireSignIn,
  isAdmin,
  createIceMakerTypeController
);

// Update Speification - Ice Maker Type
router.put(
  "/ice-maker-type/:id",
  requireSignIn,
  isAdmin,
  updateIceMakerTypeController
);

// Get All Specification - Ice Maker Type
router.get("/ice-maker-type", iceMakerTypeController);

//Get Single Specification - Ice Maker Type
router.get("/ice-maker-type/:id", singleIceMakerTypeController);

//Delete Specification - Ice Maker Type
router.delete(
  "/ice-maker-type/:id",
  requireSignIn,
  isAdmin,
  deleteIceMakerTypeController
);

// Create Speification - Shelf Material
router.post(
  "/shelf-material",
  requireSignIn,
  isAdmin,
  createShelfMaterialController
);

// Update Speification - Shelf Material
router.put(
  "/shelf-material/:id",
  requireSignIn,
  isAdmin,
  updateShelfMaterialController
);

// Get All Specification - Shelf Material
router.get("/shelf-material", shelfMaterialController);

//Get Single Specification - Shelf Material
router.get("/shelf-material/:id", singleShelfMaterialController);

//Delete Specification - Shelf Material
router.delete(
  "/shelf-material/:id",
  requireSignIn,
  isAdmin,
  deleteShelfMaterialController
);

// Create Speification - Compressors
router.post("/compressors", requireSignIn, isAdmin, createCompressorController);

// Update Speification - Compressors
router.put(
  "/compressors/:id",
  requireSignIn,
  isAdmin,
  updateCompressorController
);

// Get All Specification - Compressors
router.get("/compressors", compressorController);

//Get Single Specification - Compressors
router.get("/compressors/:id", singleCompressorController);

//Delete Specification - Compressors
router.delete(
  "/compressors/:id",
  requireSignIn,
  isAdmin,
  deleteCompressorController
);

// Create Speification - Cooling Technology
router.post(
  "/cooling-technology",
  requireSignIn,
  isAdmin,
  createCoolingTechnologyController
);

// Update Speification - Cooling Technology
router.put(
  "/cooling-technology/:id",
  requireSignIn,
  isAdmin,
  updateCoolingTechnologyController
);

// Get All Specification - Cooling Technology
router.get("/cooling-technology", coolingTechnologyController);

//Get Single Specification - Cooling Technology
router.get("/cooling-technology/:id", singleCoolingTechnologyController);

//Delete Specification - Cooling Technology
router.delete(
  "/cooling-technology/:id",
  requireSignIn,
  isAdmin,
  deleteCoolingTechnologyController
);

// Create Speification - Refrigerants
router.post(
  "/refrigerator-type",
  requireSignIn,
  isAdmin,
  createRefrigeratorTypeController
);

// Update Speification - Refrigerants
router.put(
  "/refrigerator-type/:id",
  requireSignIn,
  isAdmin,
  updateRefrigeratorTypeController
);

// Get All Specification - Refrigerants
router.get("/refrigerator-type", refrigeratorTypeController);

//Get Single Specification - Refrigerants
router.get("/refrigerator-type/:id", singleRefrigeratorTypeController);

//Delete Specification - Refrigerants
router.delete(
  "/refrigerator-type/:id",
  requireSignIn,
  isAdmin,
  deleteRefrigeratorTypeController
);

// Create Speification - Refrigerants
router.post(
  "/refrigerants",
  requireSignIn,
  isAdmin,
  createRefrigerantController
);

// Update Speification - Refrigerants
router.put(
  "/refrigerants/:id",
  requireSignIn,
  isAdmin,
  updateRefrigerantController
);

// Get All Specification - Refrigerants
router.get("/refrigerants", refrigerantController);

//Get Single Specification - Refrigerants
router.get("/refrigerants/:id", singleRefrigerantController);

//Delete Specification - Refrigerants
router.delete(
  "/refrigerants/:id",
  requireSignIn,
  isAdmin,
  deleteRefrigerantController
);

// Create Speification - Warranty Type
router.post(
  "/warranty-type",
  requireSignIn,
  isAdmin,
  createWarrantyTypeController
);

// Update Speification - Warranty Type
router.put(
  "/warranty-type/:id",
  requireSignIn,
  isAdmin,
  updateWarrantyTypeController
);

// Get All Specification - Warranty Type
router.get("/warranty-type", warrantyTypeController);

//Get Single Specification - Warranty Type
router.get("/warranty-type/:id", singleWarrantyTypeController);

//Delete Specification - Warranty Type
router.delete(
  "/warranty-type/:id",
  requireSignIn,
  isAdmin,
  deleteWarrantyTypeController
);

export default router;

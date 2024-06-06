import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";
import brandModel from "../models/Spec Models/General Models/brandModel.js";
import refrigeratorTypeModel from "../models/Spec Models/General Models/refrigeratorTypeModel.js";
import panelDisplayModel from "../models/Spec Models/General Models/panelDisplayModel.js";
import fastIceModeModal from "../models/Spec Models/Cooling Features Models/fastIceModeModal.js";
import fastChillingModeModal from "../models/Spec Models/Cooling Features Models/fastChillingModeModal.js";
import bacterialGrowthPreventionModel from "../models/Spec Models/Freshness Models/bacterialGrowthPreventionModel.js";
import maintainFoodVitalsModels from "../models/Spec Models/Freshness Models/maintainFoodVitalsModels.js";
import coolingTechnologyModel from "../models/Spec Models/Technical Specification Models/coolingTechnologyModel.js";
import allRoundCoolingModeModal from "../models/Spec Models/Cooling Features Models/allRoundCoolingModeModal.js";

export const createProductController = async (req, res) => {
  try {
    const requiredFields = [
      "brand",
      "iotAndAppSupport",
      "description",
      "refrigeratorType",
      "model",
      "panelDisplay",
      "salesPackage",
      "weight",
      "height",
      "width",
      "depth",
      "freezerMount",
      "handleType",
      "baseDrawer",
      "bodyMaterial",
      "temperedGlass",
      "safeCleanBack",
      "otherDesignAndBodySpecs",
      "interiorLamp",
      "toughenedGlass",
      "iceTray",
      "chillerTray",
      "eggTray",
      "bottleShelves",
      "iceCubeBox",
      "doorBasket",
      "removableGasket",
      "shelfMaterial",
      "freezerShelves",
      "flexibleRack",
      "gasketType",
      "iceMakerType",
      "doorCount",
      "iceMaker",
      "otherInteriorFeatures",
      "totalCapacity",
      "freezerCapacity",
      "compressor",
      "refrigerant",
      "coolingTechnology",
      "inbuiltStabilizer",
      "operatesOnHomeInverter",
      "operatesOnSolarEnergy",
      "advancedInverterTechnology",
      "otherTechnicalSpecs",
      "frostFree",
      "temperatureControl",
      "moistureControl",
      "airCirculation",
      "expressFreezing",
      "convertibleCoolingMode",
      "convectionCooling",
      "coolpad",
      "doorCooling",
      "coolingMode",
      "sixthSenseTechnology",
      "fasterBottleCooling",
      "knobControl",
      "digiTouchCool",
      "fastIceMode",
      "fastChillingMode",
      "allRoundCoolingMode",
      "cyclopentaneInsulation",
      "otherCoolingFeatures",
      "voltageRequired",
      "starRating",
      "starRatingYear",
      "powerConsumption",
      "otherPowerFeatures",
      "warrantyType",
      "productWarranty",
      "compressorWarranty",
      "otherWarrantyDetails",
      "deodorizer",
      "bacteriaGrowthPrevention",
      "foodVitalsTechnology",
      "otherFreshnessFeatures",
      "shockProof",
      "insulation",
      "childLock",
      "antiRatBite",
      "otherSafetyFeatures",
      "doorAlarm",
      "easySlideShelf",
      "indicatorLight",
      "waterDispenser",
      "iceDispenser",
      "transparentDoor",
      "additionalDoorPockets",
      "wifiControl",
      "autoDoorOpening",
      "adjustableShelves",
      "iceScraper",
      "transparentFreezerDoor",
      "otherEaseOfUseFeatures",
    ];

    for (const field of requiredFields) {
      if (!req.fields[field]) {
        return res.status(500).send({ error: `${field} is Required` });
      }
    }

    const { photo } = req.files;

    if (!photo) {
      return res
        .status(500)
        .send({ error: "Photo is Required & should be less than 1 MB" });
    }

    const {
      description,
      iotAndAppSupport,
      amazonPrice,
      amazonRating,
      flipkartRating,
      cromaRating,
      flipkartPrice,
      cromaPrice,
      amazonLink,
      flipkartLink,
      cromaLink,
      brand,
      refrigeratorType,
      model,
      panelDisplay,
      salesPackage,
      weight,
      height,
      width,
      depth,
      freezerMount,
      handleType,
      baseDrawer,
      bodyMaterial,
      temperedGlass,
      safeCleanBack,
      otherDesignAndBodySpecs,
      interiorLamp,
      toughenedGlass,
      iceTray,
      chillerTray,
      eggTray,
      bottleShelves,
      iceCubeBox,
      doorBasket,
      antiBacteriaGasket,
      removableGasket,
      shelfMaterial,
      freezerShelves,
      flexibleRack,
      gasketType,
      iceMakerType,
      doorCount,
      iceMaker,
      otherInteriorFeatures,
      totalCapacity,
      freezerCapacity,
      compressor,
      refrigerant,
      coolingTechnology,
      inbuiltStabilizer,
      operatesOnHomeInverter,
      operatesOnSolarEnergy,
      advancedInverterTechnology,
      otherTechnicalSpecs,
      frostFree,
      temperatureControl,
      moistureControl,
      airCirculation,
      expressFreezing,
      convertibleCoolingMode,
      convectionCooling,
      coolpad,
      doorCooling,
      coolingMode,
      sixthSenseTechnology,
      fasterBottleCooling,
      knobControl,
      digiTouchCool,
      fastIceMode,
      fastChillingMode,
      allRoundCoolingMode,
      cyclopentaneInsulation,
      otherCoolingFeatures,
      voltageRequired,
      starRating,
      starRatingYear,
      powerConsumption,
      otherPowerFeatures,
      warrantyType,
      productWarranty,
      compressorWarranty,
      otherWarrantyDetails,
      deodorizer,
      bacteriaGrowthPrevention,
      foodVitalsTechnology,
      otherFreshnessFeatures,
      shockProof,
      insulation,
      childLock,
      antiRatBite,
      otherSafetyFeatures,
      doorAlarm,
      easySlideShelf,
      indicatorLight,
      waterDispenser,
      iceDispenser,
      transparentDoor,
      additionalDoorPockets,
      wifiControl,
      autoDoorOpening,
      adjustableShelves,
      iceScraper,
      transparentFreezerDoor,
      otherEaseOfUseFeatures,
    } = req.fields;

    const brandDetails = await brandModel.findById(brand);

    const brandName = brandDetails.name;
    const refrigeratorTypeDetails = await refrigeratorTypeModel.findById(
      refrigeratorType
    );
    const refrigeratorTypeName = refrigeratorTypeDetails.name;
    const name =
      brandName +
      " " +
      model +
      " " +
      totalCapacity +
      "L " +
      refrigeratorTypeName +
      " Refrigerator";
    const slug = slugify(name);

    const keyFeatures = [
      totalCapacity > 350 && `${totalCapacity} L Capacity`,
      doorCount > 1 && `${doorCount} Doors`,
      bottleShelves > 0 && `${bottleShelves} Bottle Shelves`,
      freezerShelves > 0 && `${freezerShelves} Freezer Shelves`,
      flexibleRack == 1 && "Flexible Rack",
      baseDrawer == 1 && "Base Drawer",
      starRating > 2 && `${starRating} Star Rating`,
      childLock == 1 && "Child Lock",
      doorAlarm == 1 && "Door Alarm",
      operatesOnHomeInverter == 1 && "Operates on Home Inverter",
      operatesOnSolarEnergy == 1 && "Operates on Solar Energy",
      expressFreezing == 1 && "Express Freezing",
      sixthSenseTechnology == 1 && "6th Sense Technology",
      easySlideShelf == 1 && "Easy Slide Shelf",
      waterDispenser == 1 && "Water Dispenser",
      iceDispenser > 1 && "Ice Dispenser",
      wifiControl == 1 && "Wifi Control",
      adjustableShelves == 1 && "Adjustable Shelves",
      iotAndAppSupport == 1 && "App Support",
      convertibleCoolingMode == 1 && "Convertible Cooling Mode",
      iceMaker == 1 && "Ice Maker",
      fasterBottleCooling == 1 && "Faster Bottle Cooling",
      knobControl == 1 && "Knob Control",
      deodorizer == 1 && "Deodorizer",
      iceCubeBox == 1 && "Ice Cube Box",
      doorBasket == 1 && "Door Basket",
      antiBacteriaGasket == 1 && "Anti Bacterial Gasket",
      removableGasket == 1 && "Removable Gasket",
      inbuiltStabilizer == 1 && "Inbuilt Stabilizer",
      toughenedGlass == 1 && "Toughened Glass",
      frostFree == 1 && "Frost Free",
      temperatureControl == 1 && "Temperature Control",
      moistureControl == 1 && "Moisture Control",
    ]
      .filter(Boolean)
      .slice(0, 10);

    const totalBadges = [
      totalCapacity > 350 && "Large Storage",
      doorCount > 1 && "User Friendly",
      bottleShelves > 0 && "User Friendly",
      freezerShelves > 0 && "User Friendly",
      flexibleRack == 1 && "User Friendly",
      baseDrawer == 1 && "User Friendly",
      starRating > 2 && "Energy Efficient",
      childLock == 1 && "Safety & Protection",
      doorAlarm == 1 && "User Friendly",
      operatesOnHomeInverter == 1 && "User Friendly",
      operatesOnSolarEnergy == 1 && "Energy Efficient",
      expressFreezing == 1 && "Advanced Cooling",
      sixthSenseTechnology == 1 && "Advanced Cooling",
      easySlideShelf == 1 && "User Friendly",
      waterDispenser == 1 && "User Friendly",
      iceDispenser > 1 && "User Friendly",
      wifiControl == 1 && "Smart Technology",
      adjustableShelves == 1 && "User Friendly",
      iotAndAppSupport == 1 && "Smart Technology",
      convertibleCoolingMode == 1 && "Advanced Cooling",
      iceMaker == 1 && "User Friendly",
      fasterBottleCooling == 1 && "Advanced Cooling",
      knobControl == 1 && "User Friendly",
      deodorizer == 1 && "Hygiene & Freshness",
      iceCubeBox == 1 && "User Friendly",
      doorBasket == 1 && "User Friendly",
      antiBacteriaGasket == 1 && "Hygiene & Freshness",
    ].filter(Boolean);

    const badges = [...new Set(totalBadges)];

    const faqs = [
      {
        question: "This is the first demo question for product pages",
        answer:
          "This is the first demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the second demo question for product pages",
        answer:
          "This is the second demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the third demo question for product pages",
        answer:
          "This is the third demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the fourth demo question for product pages",
        answer:
          "This is the fourth demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the fifth demo question for product pages",
        answer:
          "This is the fifth demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
    ];

    const productData = {
      ...req.fields,
      name,
      slug,
      badges,
      keyFeatures,
      faqs,
      photo: {
        data: fs.readFileSync(photo.path),
        contentType: photo.type,
      },
    };

    const product = new productModel(productData);
    await product.save();

    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in creating product",
      error: error.message,
    });
  }
};

// get all products
export const getProductsController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .select("-photo")
      .populate("brand")

      .populate("refrigeratorType")
      .populate("panelDisplay")
      .populate("freezerMount")
      .populate("handleType")
      .populate("bodyMaterial")
      .populate("shelfMaterial")
      .populate("gasketType")
      .populate("iceMakerType")
      .populate("compressor")
      .populate("refrigerant")
      .populate("coolingTechnology")
      .populate("airCirculation")
      .populate("fastIceMode")
      .populate("fastChillingMode")
      .populate("allRoundCoolingMode")
      .populate("warrantyType")
      .populate("bacteriaGrowthPrevention")
      .populate("foodVitalsTechnology")
      .populate("indicatorLight")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      total: products.length,
      message: "List of all products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error,
    });
  }
};

// get single product

export const getSingleProductController = async (req, res) => {
  try {
    const productId = req.params.pid;
    const product = await productModel
      .findOne({ _id: productId })
      .select("-photo")
      .populate("brand")

      .populate("refrigeratorType")
      .populate("panelDisplay")
      .populate("freezerMount")
      .populate("handleType")
      .populate("bodyMaterial")
      .populate("shelfMaterial")
      .populate("gasketType")
      .populate("iceMakerType")
      .populate("compressor")
      .populate("refrigerant")
      .populate("coolingTechnology")
      .populate("airCirculation")
      .populate("fastIceMode")
      .populate("fastChillingMode")
      .populate("allRoundCoolingMode")
      .populate("warrantyType")
      .populate("bacteriaGrowthPrevention")
      .populate("foodVitalsTechnology")
      .populate("indicatorLight");

    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single product",
      error,
    });
  }
};

//get single product by slug
export const getSingleProductBySlugController = async (req, res) => {
  try {
    const productSlug = req.params.slug;
    const product = await productModel
      .findOne({ slug: productSlug })
      .select("-photo")
      .populate("brand")

      .populate("refrigeratorType")
      .populate("panelDisplay")
      .populate("freezerMount")
      .populate("handleType")
      .populate("bodyMaterial")
      .populate("shelfMaterial")
      .populate("gasketType")
      .populate("iceMakerType")
      .populate("compressor")
      .populate("refrigerant")
      .populate("coolingTechnology")
      .populate("airCirculation")
      .populate("fastIceMode")
      .populate("fastChillingMode")
      .populate("allRoundCoolingMode")
      .populate("warrantyType")
      .populate("bacteriaGrowthPrevention")
      .populate("foodVitalsTechnology")
      .populate("indicatorLight");

    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single product",
      error,
    });
  }
};

// get photo

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting product photo",
      error,
    });
  }
};

//delete product controller

export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo");

    res.status(200).send({
      success: true,
      message: "Product deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting product",
      error,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const {
      description,
      iotAndAppSupport,
      amazonPrice,
      amazonRating,
      flipkartRating,
      cromaRating,
      flipkartPrice,
      cromaPrice,
      amazonLink,
      flipkartLink,
      cromaLink,
      brand,
      refrigeratorType,
      model,
      panelDisplay,
      salesPackage,
      weight,
      height,
      width,
      depth,
      freezerMount,
      handleType,
      baseDrawer,
      bodyMaterial,
      temperedGlass,
      safeCleanBack,
      otherDesignAndBodySpecs,
      interiorLamp,
      toughenedGlass,
      iceTray,
      chillerTray,
      eggTray,
      bottleShelves,
      iceCubeBox,
      doorBasket,
      antiBacteriaGasket,
      removableGasket,
      shelfMaterial,
      freezerShelves,
      flexibleRack,
      gasketType,
      iceMakerType,
      doorCount,
      iceMaker,
      otherInteriorFeatures,
      totalCapacity,
      freezerCapacity,
      compressor,
      refrigerant,
      coolingTechnology,
      inbuiltStabilizer,
      operatesOnHomeInverter,
      operatesOnSolarEnergy,
      advancedInverterTechnology,
      otherTechnicalSpecs,
      frostFree,
      temperatureControl,
      moistureControl,
      airCirculation,
      expressFreezing,
      convertibleCoolingMode,
      convectionCooling,
      coolpad,
      doorCooling,
      coolingMode,
      sixthSenseTechnology,
      fasterBottleCooling,
      knobControl,
      digiTouchCool,
      fastIceMode,
      fastChillingMode,
      allRoundCoolingMode,
      cyclopentaneInsulation,
      otherCoolingFeatures,
      voltageRequired,
      starRating,
      starRatingYear,
      powerConsumption,
      otherPowerFeatures,
      warrantyType,
      productWarranty,
      compressorWarranty,
      otherWarrantyDetails,
      deodorizer,
      bacteriaGrowthPrevention,
      foodVitalsTechnology,
      otherFreshnessFeatures,
      shockProof,
      insulation,
      childLock,
      antiRatBite,
      otherSafetyFeatures,
      doorAlarm,
      easySlideShelf,
      indicatorLight,
      waterDispenser,
      iceDispenser,
      transparentDoor,
      additionalDoorPockets,
      wifiControl,
      autoDoorOpening,
      adjustableShelves,
      iceScraper,
      transparentFreezerDoor,
      otherEaseOfUseFeatures,
    } = req.fields;
    const { photo } = req.files;

    //Validation

    switch (true) {
      case !brand:
        return res.status(500).send({ error: "Name is Required" });
      case !iotAndAppSupport:
        return res.status(500).send({ error: "IOT & App Support is Required" });
      case !refrigeratorType:
        return res.status(500).send({ error: "Refrigerator Type is Required" });
      case !model:
        return res.status(500).send({ error: "Model is Required" });
      case !panelDisplay:
        return res.status(500).send({ error: "Panel Display is Required" });
      case !salesPackage:
        return res.status(500).send({ error: "Sales Package is Required" });
      case !weight:
        return res.status(500).send({ error: "Weight is Required" });
      case !height:
        return res.status(500).send({ error: "Height is Required" });
      case !width:
        return res.status(500).send({ error: "Width is Required" });
      case !depth:
        return res.status(500).send({ error: "Depth is Required" });
      case !freezerMount:
        return res.status(500).send({ error: "Freezer Mount is Required" });
      case !handleType:
        return res.status(500).send({ error: "Handle Type is Required" });
      case !baseDrawer:
        return res.status(500).send({ error: "Base Drawer is Required" });
      case !bodyMaterial:
        return res.status(500).send({ error: "Body Material is Required" });
      case !temperedGlass:
        return res.status(500).send({ error: "Tempered Glass is Required" });
      case !safeCleanBack:
        return res.status(500).send({ error: "Safe Clean Back is Required" });
      case !otherDesignAndBodySpecs:
        return res
          .status(500)
          .send({ error: "Other Design & Body Specs are Required" });
      case !interiorLamp:
        return res.status(500).send({ error: "Interior Lamp is Required" });
      case !toughenedGlass:
        return res.status(500).send({ error: "Toughened Glass is Required" });
      case !iceTray:
        return res.status(500).send({ error: "Ice Tray is Required" });
      case !chillerTray:
        return res.status(500).send({ error: "Chiller Tray is Required" });
      case !eggTray:
        return res.status(500).send({ error: "Egg Tray is Required" });
      case !bottleShelves:
        return res.status(500).send({ error: "Bottle Shelves is Required" });
      case !iceCubeBox:
        return res.status(500).send({ error: "Ice Cube Box is Required" });
      case !doorBasket:
        return res.status(500).send({ error: "Door Basket is Required" });
      case !removableGasket:
        return res.status(500).send({ error: "Removable Gasket is Required" });
      case !shelfMaterial:
        return res.status(500).send({ error: "Shelf Material is Required" });
      case !freezerShelves:
        return res.status(500).send({ error: "Freezer Shelves are Required" });
      case !flexibleRack:
        return res.status(500).send({ error: "Flexible Rack is Required" });
      case !gasketType:
        return res.status(500).send({ error: "Gasket Type is Required" });
      case !iceMakerType:
        return res.status(500).send({ error: "Ice Maker Type is Required" });
      case !doorCount:
        return res.status(500).send({ error: "Door Count is Required" });
      case !iceMaker:
        return res.status(500).send({ error: "Ice Maker is Required" });
      case !otherInteriorFeatures:
        return res
          .status(500)
          .send({ error: "Other Interior Features are Required" });
      case !totalCapacity:
        return res.status(500).send({ error: "Total Capacity is Required" });
      case !freezerCapacity:
        return res.status(500).send({ error: "Freezer Capacity is Required" });
      case !compressor:
        return res.status(500).send({ error: "Compressor is Required" });
      case !refrigerant:
        return res.status(500).send({ error: "Refrigerant is Required" });
      case !coolingTechnology:
        return res
          .status(500)
          .send({ error: "Cooling Technology is Required" });
      case !inbuiltStabilizer:
        return res
          .status(500)
          .send({ error: "In Built Stabilizer is Required" });
      case !operatesOnHomeInverter:
        return res
          .status(500)
          .send({ error: "Operates on Home Inverter is Required" });
      case !operatesOnSolarEnergy:
        return res
          .status(500)
          .send({ error: "Operates on Solar Energy is Required" });
      case !advancedInverterTechnology:
        return res
          .status(500)
          .send({ error: "Advanced Inverter Technology is Required" });
      case !otherTechnicalSpecs:
        return res
          .status(500)
          .send({ error: "Other Technical Specs are Required" });
      case !frostFree:
        return res.status(500).send({ error: "Frost Free is Required" });
      case !temperatureControl:
        return res
          .status(500)
          .send({ error: "Temperature Control is Required" });
      case !moistureControl:
        return res.status(500).send({ error: "Mositure Control is Required" });
      case !airCirculation:
        return res.status(500).send({ error: "Air Circulation is Required" });
      case !expressFreezing:
        return res.status(500).send({ error: "Express Freezing is Required" });
      case !convertibleCoolingMode:
        return res
          .status(500)
          .send({ error: "Convertible Cooling Mode is Required" });
      case !convectionCooling:
        return res
          .status(500)
          .send({ error: "Convection Cooling is Required" });
      case !coolpad:
        return res.status(500).send({ error: "Coolpad is Required" });
      case !doorCooling:
        return res.status(500).send({ error: "Door Cooling is Required" });
      case !coolingMode:
        return res.status(500).send({ error: "Cooling Mode is Required" });
      case !sixthSenseTechnology:
        return res
          .status(500)
          .send({ error: "Sixth Sense Technology is Required" });
      case !fasterBottleCooling:
        return res
          .status(500)
          .send({ error: "Faster Bottle Cooling is Required" });
      case !knobControl:
        return res.status(500).send({ error: "Knob Control is Required" });
      case !digiTouchCool:
        return res.status(500).send({ error: "Digi Touch Cool is Required" });
      case !fastIceMode:
        return res.status(500).send({ error: "Fast Ice Mode is Required" });
      case !fastChillingMode:
        return res
          .status(500)
          .send({ error: "Fast Chilling Mode is Required" });
      case !allRoundCoolingMode:
        return res
          .status(500)
          .send({ error: "All Round Cooling Mode is Required" });
      case !cyclopentaneInsulation:
        return res
          .status(500)
          .send({ error: "Cyclopentane Insulation is Required" });
      case !otherCoolingFeatures:
        return res
          .status(500)
          .send({ error: "Other Cooling Features are Required" });
      case !voltageRequired:
        return res.status(500).send({ error: "Voltage is Required" });
      case !starRating:
        return res.status(500).send({ error: "Star Rating is Required" });
      case !starRatingYear:
        return res.status(500).send({ error: "Star Rating Year is Required" });
      case !powerConsumption:
        return res.status(500).send({ error: "Power Consumption is Required" });
      case !otherPowerFeatures:
        return res
          .status(500)
          .send({ error: "Other Power Features are Required" });
      case !warrantyType:
        return res.status(500).send({ error: "Warranty Type is Required" });
      case !productWarranty:
        return res.status(500).send({ error: "Product Warranty is Required" });
      case !compressorWarranty:
        return res
          .status(500)
          .send({ error: "Compressor Warranty is Required" });
      case !otherWarrantyDetails:
        return res
          .status(500)
          .send({ error: "Other Warranty Details are Required" });
      case !deodorizer:
        return res.status(500).send({ error: "Deodorizer is Required" });
      case !bacteriaGrowthPrevention:
        return res.status(500).send({
          error: "Bacterial Growth Prevention Technology is Required",
        });
      case !foodVitalsTechnology:
        return res
          .status(500)
          .send({ error: "Food Vitals Technology is Required" });
      case !otherFreshnessFeatures:
        return res
          .status(500)
          .send({ error: "Other Freshness Features are Required" });
      case !shockProof:
        return res.status(500).send({ error: "Shock Proof is Required" });
      case !insulation:
        return res.status(500).send({ error: "Insulation is Required" });
      case !childLock:
        return res.status(500).send({ error: "Child Lock is Required" });
      case !antiRatBite:
        return res.status(500).send({ error: "Anti Rat Bite is Required" });
      case !otherSafetyFeatures:
        return res
          .status(500)
          .send({ error: "Other Safety Features are Required" });
      case !doorAlarm:
        return res.status(500).send({ error: "Door Alarm is Required" });
      case !easySlideShelf:
        return res.status(500).send({ error: "Easy Slide Shelf is Required" });
      case !indicatorLight:
        return res.status(500).send({ error: "Indicator Light is Required" });
      case !waterDispenser:
        return res.status(500).send({ error: "Water Dispenser is Required" });
      case !iceDispenser:
        return res.status(500).send({ error: "Ice Dispenser is Required" });
      case !transparentDoor:
        return res.status(500).send({ error: "Transparent Door is Required" });
      case !additionalDoorPockets:
        return res
          .status(500)
          .send({ error: "Additional Door Pockets is Required" });
      case !wifiControl:
        return res.status(500).send({ error: "Wifi Control is Required" });
      case !autoDoorOpening:
        return res.status(500).send({ error: "Auto Door Opening is Required" });
      case !adjustableShelves:
        return res
          .status(500)
          .send({ error: "Adjustable Shelves are Required" });
      case !iceScraper:
        return res.status(500).send({ error: "Ice Scraper is Required" });
      case !transparentFreezerDoor:
        return res
          .status(500)
          .send({ error: "Transparent Freezer Door is Required" });
      case !otherEaseOfUseFeatures:
        return res
          .status(500)
          .send({ error: "Other Ease of Use Features are Required" });
      case !photo:
        return res
          .status(500)
          .send({ error: "Photo is Required & should be less than 1 MB" });
    }
    const brandDetails = await brandModel.findById(brand);

    const brandName = brandDetails.name;
    const refrigeratorTypeDetails = await refrigeratorTypeModel.findById(
      refrigeratorType
    );
    const refrigeratorTypeName = refrigeratorTypeDetails.name;
    const name =
      brandName +
      " " +
      model +
      " " +
      totalCapacity +
      "L " +
      refrigeratorTypeName +
      " Refrigerator";
    const slug = slugify(name);
    const badges = ["Badge 1", "Badge 2", "Badge 3", "Badge 4", "Badge 5"];
    const keyFeatures = [
      "Key Feature 1",
      "Key Feature 2",
      "Key Feature 3",
      "Key Feature 4",
      "Key Feature 5",
      "Key Feature 6",
      "Key Feature 7",
      "Key Feature 8",
      "Key Feature 9",
      "Key Feature 10",
    ];

    const faqs = [
      {
        question: "This is the first demo question for product pages",
        answer:
          "This is the first demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the second demo question for product pages",
        answer:
          "This is the second demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the third demo question for product pages",
        answer:
          "This is the third demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the fourth demo question for product pages",
        answer:
          "This is the fourth demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
      {
        question: "This is the fifth demo question for product pages",
        answer:
          "This is the fifth demo answer for product pages which will be used in the end of product page and can help in user acquisition via SEO and user retention by increasing authenticity and usefulness of website",
      },
    ];
    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, name, slug, badges, keyFeatures, faqs },
      { new: true }
    );
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating product",
    });
  }
};

//filter product controller
export const productFiltersController = async (req, res) => {
  try {
    const { brandChecked, refrigeratorTypeChecked, freezerMountChecked } =
      req.body;
    let args = {};
    if (brandChecked.length > 0) args.brand = brandChecked;
    if (refrigeratorTypeChecked.length > 0)
      args.refrigeratorType = refrigeratorTypeChecked;
    if (freezerMountChecked.length > 0) args.freezerMount = freezerMountChecked;

    const products = await productModel.find(args);

    res.status(200).send({
      success: true,
      message: "Products Filtered Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while filtering products",
      error,
    });
  }
};

export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const regex = { $regex: keyword, $options: "i" };
    const result = await productModel
      .find({
        $or: [
          { name: regex },
          { description: regex },
          { keyFeatures: regex },
          { badges: regex },
        ],
      })
      .select("-photo");
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in Search Product API",
      error,
    });
  }
};

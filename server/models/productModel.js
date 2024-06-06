import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    //General Informatioon & SEO Data
    name: {
      type: String,
      default: null,
      required: true,
    },
    slug: {
      type: String,
      default: null,
      requrired: true,
    },

    description: {
      type: String,
      default: null,
      required: true,
    },
    keyFeatures: {
      type: [String],
      default: [],
      required: true,
    },
    badges: {
      type: [String],
      default: [],
      required: true,
    },
    amazonPrice: {
      type: Number,
      default: null,
    },
    amazonRating: {
      type: Number,
      default: null,
    },

    flipkartPrice: {
      type: Number,
      default: null,
    },
    flipkartRating: {
      type: Number,
      default: null,
    },
    cromaPrice: {
      type: Number,
      default: null,
    },
    cromaRating: {
      type: Number,
      default: null,
    },
    amazonLink: {
      type: String,
      default: null,
    },
    flipkartLink: {
      type: String,
      default: null,
    },
    cromaLink: {
      type: String,
      default: null,
    },
    faqs: {
      type: [{ question: String, answer: String }], // Array of objects
      default: [],
    },

    //General Specs

    brand: {
      type: mongoose.ObjectId,
      ref: "Brand",
      default: null,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    refrigeratorType: {
      type: mongoose.ObjectId,
      ref: "Refrigerator Type",
      default: null,
      required: true,
    },

    model: {
      type: String,
      default: null,
      required: true,
    },

    panelDisplay: {
      type: mongoose.ObjectId,
      ref: "Panel Display",
      default: null,
      required: true,
    },

    salesPackage: {
      type: String,
      default: null,
      required: true,
    },

    //Design & Body Specs
    weight: {
      type: Number,
      default: null,
      required: true,
    },

    height: {
      type: Number,
      default: null,
      required: true,
    },

    width: {
      type: Number,
      default: null,
      required: true,
    },

    depth: {
      type: Number,
      default: null,
      required: true,
    },

    freezerMount: {
      type: mongoose.ObjectId,
      ref: "Freezer Mount",
      default: null,
      required: true,
    },

    handleType: {
      type: mongoose.ObjectId,
      ref: "Handle Type",
      default: null,
      required: true,
    },

    baseDrawer: {
      type: Boolean,
      default: null,
      required: true,
    },

    bodyMaterial: {
      type: mongoose.ObjectId,
      ref: "Body Material",
      default: null,
      required: true,
    },

    temperedGlass: {
      type: Boolean,
      default: null,
      required: true,
    },

    safeCleanBack: {
      type: Boolean,
      default: null,
      required: true,
    },

    otherDesignAndBodySpecs: {
      type: String,
      default: null,
      required: true,
    },

    //Interior Features

    interiorLamp: {
      type: Boolean,
      default: null,
      required: true,
    },

    toughenedGlass: {
      type: Boolean,
      default: null,
      required: true,
    },

    iceTray: {
      type: Boolean,
      default: null,
      required: true,
    },

    chillerTray: {
      type: Boolean,
      default: null,
      required: true,
    },

    eggTray: {
      type: Boolean,
      default: null,
      required: true,
    },

    bottleShelves: {
      type: Number,
      default: null,
      required: true,
    },

    iceCubeBox: {
      type: Boolean,
      default: null,
      required: true,
    },

    doorBasket: {
      type: Boolean,
      default: null,
      required: true,
    },

    antiBacteriaGasket: {
      type: Boolean,
      default: null,
      required: true,
    },

    removableGasket: {
      type: Boolean,
      default: null,
      required: true,
    },

    shelfMaterial: {
      type: mongoose.ObjectId,
      ref: "Shelf Material",
      default: null,
      required: true,
    },

    freezerShelves: {
      type: Number,
      default: null,
      required: true,
    },

    flexibleRack: {
      type: Boolean,
      default: null,
      required: true,
    },

    gasketType: {
      type: mongoose.ObjectId,
      ref: "Gasket Type",
      default: null,
      required: true,
    },

    iceMakerType: {
      type: mongoose.ObjectId,
      ref: "Ice Maker Type",
      default: null,
      required: true,
    },

    doorCount: {
      type: Number,
      default: null,
      required: true,
    },

    iceMaker: {
      type: Boolean,
      default: null,
      required: true,
    },

    otherInteriorFeatures: {
      type: String,
      default: null,
      required: true,
    },

    //Technical Specs

    totalCapacity: {
      type: Number,
      default: null,
      required: true,
    },

    freezerCapacity: {
      type: Number,
      default: null,
      required: true,
    },

    compressor: {
      type: mongoose.ObjectId,
      ref: "Compressor",
      default: null,
      required: true,
    },

    refrigerant: {
      type: mongoose.ObjectId,
      ref: "Refrigerant Type",
      default: null,
      required: true,
    },

    coolingTechnology: {
      type: mongoose.ObjectId,
      ref: "Cooling Technology",
      default: null,
      required: true,
    },

    inbuiltStabilizer: {
      type: Boolean,
      default: null,
      required: true,
    },

    operatesOnHomeInverter: {
      type: Boolean,
      default: null,
      required: true,
    },

    operatesOnSolarEnergy: {
      type: Boolean,
      default: null,
      required: true,
    },

    advancedInverterTechnology: {
      type: Boolean,
      default: null,
      required: true,
    },

    otherTechnicalSpecs: {
      type: String,
      default: null,
      required: true,
    },

    //Cooling Features

    frostFree: {
      type: Boolean,
      default: null,
      required: true,
    },
    temperatureControl: {
      type: Boolean,
      default: null,
      required: true,
    },

    moistureControl: {
      type: Boolean,
      default: null,
      required: true,
    },

    airCirculation: {
      type: mongoose.ObjectId,
      ref: "Air Circulation",
      default: null,
      required: true,
    },

    expressFreezing: {
      type: Boolean,
      default: null,
      required: true,
    },

    convertibleCoolingMode: {
      type: Boolean,
      ref: "Convertible Cooling Mode",
      default: null,
      required: true,
    },

    convectionCooling: {
      type: Boolean,
      default: null,
      required: true,
    },

    coolpad: {
      type: Boolean,
      default: null,
      required: true,
    },

    doorCooling: {
      type: Boolean,
      default: null,
      required: true,
    },

    coolingMode: {
      type: Number,
      ref: "Cooling Mode",
      default: null,
      required: true,
    },

    sixthSenseTechnology: {
      type: Boolean,
      default: null,
      required: true,
    },

    fasterBottleCooling: {
      type: Boolean,
      default: null,
      required: true,
    },

    knobControl: {
      type: Boolean,
      default: null,
      required: true,
    },

    digiTouchCool: {
      type: Boolean,
      default: null,
      required: true,
    },

    fastIceMode: {
      type: mongoose.ObjectId,
      ref: "Fast Ice Mode",
      default: null,
      required: true,
    },

    fastChillingMode: {
      type: mongoose.ObjectId,
      ref: "Fast Chilling Mode",
      default: null,
      required: true,
    },

    allRoundCoolingMode: {
      type: mongoose.ObjectId,
      ref: "All Round Cooling Mode",
      default: null,
      required: true,
    },

    cyclopentaneInsulation: {
      type: Boolean,
      default: null,
      required: true,
    },

    otherCoolingFeatures: {
      type: String,
      default: null,
      required: true,
    },

    //Power Features
    voltageRequired: {
      type: Number,
      default: null,
      required: true,
    },

    starRating: {
      type: Number,
      default: null,
      required: true,
    },

    starRatingYear: {
      type: Number,
      default: null,
      required: true,
    },

    powerConsumption: {
      type: Number,
      default: null,
      required: true,
    },

    otherPowerFeatures: {
      type: String,
      default: null,
      required: true,
    },
    //Warranty Details
    warrantyType: {
      type: mongoose.ObjectId,
      ref: "Warranty Type",
      default: null,
      required: true,
    },

    productWarranty: {
      type: Number,
      default: null,
      required: true,
    },

    compressorWarranty: {
      type: Number,
      default: null,
      required: true,
    },

    otherWarrantyDetails: {
      type: String,
      default: null,
      required: true,
    },
    //Freshness Features
    deodorizer: {
      type: Boolean,
      default: null,
      required: true,
    },

    bacteriaGrowthPrevention: {
      type: mongoose.ObjectId,
      ref: "Bacterial Growth Prevention",
      default: null,
      required: true,
    },

    foodVitalsTechnology: {
      type: mongoose.ObjectId,
      ref: "Food Vitals Technology",
      default: null,
      required: true,
    },

    otherFreshnessFeatures: {
      type: String,
      default: null,
      required: true,
    },
    //Safety Features
    shockProof: {
      type: Boolean,
      default: null,
      required: true,
    },

    insulation: {
      type: Boolean,
      required: true,
      default: null,
    },

    childLock: {
      type: Boolean,
      default: null,
      required: true,
    },

    antiRatBite: {
      type: Boolean,
      default: null,
      required: true,
    },

    otherSafetyFeatures: {
      type: String,
      default: null,
      required: true,
    },

    //Ease of Use Features
    doorAlarm: {
      type: Boolean,
      default: null,
      required: true,
    },

    easySlideShelf: {
      type: Boolean,
      default: null,
      required: true,
    },

    indicatorLight: {
      type: mongoose.ObjectId,
      ref: "Indicator Light",
      default: null,
      required: true,
    },

    waterDispenser: {
      type: Boolean,
      default: null,
      required: true,
    },

    iceDispenser: {
      type: Boolean,
      default: null,
      required: true,
    },
    transparentDoor: {
      type: Boolean,
      default: null,
      required: true,
    },

    additionalDoorPockets: {
      type: Boolean,
      default: null,
      required: true,
    },

    wifiControl: {
      type: Boolean,
      default: null,
      required: true,
    },

    autoDoorOpening: {
      type: Boolean,
      default: null,
      required: true,
    },

    adjustableShelves: {
      type: Boolean,
      default: null,
      required: true,
    },

    iceScraper: {
      type: Boolean,
      default: null,
      required: true,
    },

    transparentFreezerDoor: {
      type: Boolean,
      default: null,
      required: true,
    },
    iotAndAppSupport: {
      type: Boolean,
      default: null,
      required: true,
    },

    otherEaseOfUseFeatures: {
      type: String,
      default: null,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);

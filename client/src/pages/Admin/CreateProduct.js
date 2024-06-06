import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [amazonPrice, setAmazonPrice] = useState("");
  const [amazonRating, setAmazonRating] = useState("");
  const [flipkartRating, setFlipkartRating] = useState("");
  const [cromaRating, setCromaRating] = useState("");

  const [amazonLink, setAmazonLink] = useState("");
  const [flipkartPrice, setFlipkartPrice] = useState("");
  const [flipkartLink, setFlipkartLink] = useState("");
  const [cromaPrice, setCromaPrice] = useState("");
  const [cromaLink, setCromaLink] = useState("");
  const [model, setModel] = useState("");
  const [temperedGlass, setTemperedGlass] = useState("");
  const [bottleShelves, setBottleShelves] = useState("");
  const [salesPackage, setSalesPackage] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [baseDrawer, setBaseDrawer] = useState("");
  const [safeCleanBack, setSafeCleanBack] = useState("");
  const [iotAndAppSupport, setIotAndAppSupport] = useState("");
  const [otherDesignAndBodySpecs, setOtherDesignAndBodySpecs] = useState("");
  const [interiorLamp, setInteriorLamp] = useState("");
  const [toughenedGlass, setToughenedGlass] = useState("");
  const [iceTray, setIceTray] = useState("");
  const [chillerTray, setChillerTray] = useState("");
  const [eggTray, setEggTray] = useState("");
  const [iceCubeBox, setIceCubeBox] = useState("");
  const [doorBasket, setDoorBasket] = useState("");
  const [antiBacteriaGasket, setAntiBacteriaGasket] = useState("");
  const [removableGasket, setRemovableGasket] = useState("");
  const [freezerShelves, setFreezerShelves] = useState("");
  const [voltageRequired, setVoltageRequired] = useState("");
  const [flexibleRack, setFlexibleRack] = useState("");
  const [doorCount, setDoorCount] = useState("");
  const [iceMaker, setIceMaker] = useState("");
  const [otherInteriorFeatures, setOtherInteriorFeatures] = useState("");
  const [totalCapacity, setTotalCapacity] = useState("");
  const [inbuiltStabilizer, setInbuiltStabilizer] = useState("");
  const [operatesOnHomeInverter, setOperatesOnHomeInverter] = useState("");
  const [operatesOnSolarEnergy, setOperatesOnSolarEnergy] = useState("");
  const [advancedInverterTechnology, setAdvancedInverterTechnology] =
    useState("");
  const [otherTechnicalSpecs, setOtherTechnicalSpecs] = useState("");
  const [frostFree, setFrostFree] = useState("");
  const [temperatureControl, setTemperatureControl] = useState("");
  const [moistureControl, setMoistureControl] = useState("");
  const [expressFreezing, setExpressFreezing] = useState("");
  const [convectionCooling, setConvectionCooling] = useState("");
  const [coolpad, setCoolpad] = useState("");
  const [doorCooling, setDoorCooling] = useState("");
  const [sixthSenseTechnology, setSixthSenseTechnology] = useState("");
  const [fasterBottleCooling, setFasterBottleCooling] = useState("");
  const [knobControl, setKnobControl] = useState("");
  const [digiTouchCool, setDigiTouchCool] = useState("");
  const [cyclopentaneInsulation, setCyclopentaneInsulation] = useState("");
  const [otherCoolingFeatures, setOtherCoolingFeatures] = useState("");
  const [starRating, setStarRating] = useState("");
  const [starRatingYear, setStarRatingYear] = useState("");
  const [powerConsumption, setPowerConsumption] = useState("");
  const [otherPowerFeatures, setOtherPowerFeatures] = useState("");
  const [productWarranty, setProductWarranty] = useState("");
  const [compressorWarranty, setCompressorWarranty] = useState("");
  const [otherWarrantyDetails, setOtherWarrantyDetails] = useState("");
  const [deodorizer, setDeodorizer] = useState("");
  const [otherFreshnessFeatures, setOtherFreshnessFeatures] = useState("");
  const [shockProof, setShockProof] = useState("");
  const [insulation, setInsulation] = useState("");
  const [childLock, setChildLock] = useState("");
  const [otherSafetyFeatures, setOtherSafetyFeatures] = useState("");
  const [doorAlarm, setDoorAlarm] = useState("");
  const [easySlideShelf, setEasySlideShelf] = useState("");
  const [waterDispenser, setWaterDispenser] = useState("");
  const [iceDispenser, setIceDispenser] = useState("");
  const [transparentDoor, setTransparentDoor] = useState("");
  const [additionalDoorPockets, setAdditionalDoorPockets] = useState("");
  const [wifiControl, setWifiControl] = useState("");
  const [autoDoorOpening, setAutoDoorOpening] = useState("");
  const [adjustableShelves, setAdjustableShelves] = useState("");
  const [iceScraper, setIceScraper] = useState("");
  const [transparentFreezerDoor, setTransparentFreezerDoor] = useState("");
  const [otherEaseOfUseFeatures, setOtherEaseOfUseFeatures] = useState("");
  const [freezerCapacity, setFreezerCapacity] = useState("");
  const [antiRatBite, setAntiRatBite] = useState("");
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const getAllBrands = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/brands");
      if (data?.success) {
        setBrands(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting brands");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  const [photo, setPhoto] = useState("");
  const [refrigeratorTypes, setRefrigeratorTypes] = useState([]);
  const [refrigeratorType, setRefrigeratorType] = useState("");
  const getAllRefrigeratorTypes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/refrigerator-type");
      if (data?.success) {
        setRefrigeratorTypes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Refrigerator Type");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRefrigeratorTypes();
  }, []);
  const [panelDisplays, setPanelDisplays] = useState([]);
  const [panelDisplay, setPanelDisplay] = useState("");
  const getAllPanelDisplays = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/panel-display");
      if (data?.success) {
        setPanelDisplays(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting panel displays");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPanelDisplays();
  }, []);
  const [freezerMounts, setFreezerMounts] = useState([]);
  const [freezerMount, setFreezerMount] = useState("");
  const getAllFreezerMounts = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/freezer-mount");
      if (data?.success) {
        setFreezerMounts(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting freezer mount");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFreezerMounts();
  }, []);
  const [handleTypes, setHandleTypes] = useState([]);
  const [handleType, setHandleType] = useState("");
  const getAllHandleTypes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/handle-type");
      if (data?.success) {
        setHandleTypes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting handle type");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllHandleTypes();
  }, []);
  const [bodyMaterials, setBodyMaterials] = useState([]);
  const [bodyMaterial, setBodyMaterial] = useState("");
  const getAllBodyMaterials = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/body-material");
      if (data?.success) {
        setBodyMaterials(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Body Material");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBodyMaterials();
  }, []);
  const [shelfMaterials, setShelfMaterials] = useState([]);
  const [shelfMaterial, setShelfMaterial] = useState("");
  const getAllShelfMaterials = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/shelf-material");
      if (data?.success) {
        setShelfMaterials(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Shelf Material");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllShelfMaterials();
  }, []);
  const [gasketTypes, setGasketTypes] = useState([]);
  const [gasketType, setGasketType] = useState("");
  const getAllGasketTypes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/gasket-type");
      if (data?.success) {
        setGasketTypes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Gasket Type");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGasketTypes();
  }, []);
  const [iceMakerTypes, setIceMakerTypes] = useState([]);
  const [iceMakerType, setIceMakerType] = useState("");
  const getAllIceMakerTypes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/ice-maker-type");
      if (data?.success) {
        setIceMakerTypes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Ice Maker Type");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllIceMakerTypes();
  }, []);
  const [compressors, setCompressors] = useState([]);
  const [compressor, setCompressor] = useState("");
  const getAllCompressors = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/compressors");
      if (data?.success) {
        setCompressors(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting compressors");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCompressors();
  }, []);
  const [refrigerants, setRefrigerants] = useState([]);
  const [refrigerant, setRefrigerant] = useState("");
  const getAllRefrigerants = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/refrigerants");
      if (data?.success) {
        setRefrigerants(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Refrigerants");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRefrigerants();
  }, []);
  const [coolingTechnologies, setCoolingTechnologies] = useState([]);
  const [coolingTechnology, setCoolingTechnology] = useState("");
  const getAllCoolingTechnologies = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/cooling-technology");
      if (data?.success) {
        setCoolingTechnologies(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Cooling Technology");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCoolingTechnologies();
  }, []);
  const [airCirculations, setAirCirculations] = useState([]);
  const [airCirculation, setAirCirculation] = useState("");
  const getAllAirCirculations = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/air-circulation");
      if (data?.success) {
        setAirCirculations(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting air circulation");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAirCirculations();
  }, []);
  const [convertibleCoolingMode, setConvertibleCoolingMode] = useState("");

  const [coolingMode, setCoolingMode] = useState("");

  const [fastIceModes, setFastIceModes] = useState([]);
  const [fastIceMode, setFastIceMode] = useState("");
  const getAllFastIceModes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/fast-ice-mode");
      if (data?.success) {
        setFastIceModes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting fast ice modes");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFastIceModes();
  }, []);
  const [fastChillingModes, setFastChillingModes] = useState([]);
  const [fastChillingMode, setFastChillingMode] = useState("");
  const getAllFastChillingModes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/fast-chilling-mode");
      if (data?.success) {
        setFastChillingModes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Fast Chilling Mode");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFastChillingModes();
  }, []);
  const [allRoundCoolingModes, setAllRoundCoolingModes] = useState([]);
  const [allRoundCoolingMode, setAllRoundCoolingMode] = useState("");
  const getAllAllRoundCoolingModes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/all-round-cooling");
      if (data?.success) {
        setAllRoundCoolingModes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting All Round Cooling");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAllRoundCoolingModes();
  }, []);
  const [warrantyTypes, setWarrantyTypes] = useState([]);
  const [warrantyType, setWarrantyType] = useState("");
  const getAllWarrantyTypes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/warranty-type");
      if (data?.success) {
        setWarrantyTypes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting warranty types");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWarrantyTypes();
  }, []);
  const [bacteriaGrowthPreventions, setBacteriaGrowthPreventions] = useState(
    []
  );
  const [bacteriaGrowthPrevention, setBacteriaGrowthPrevention] = useState("");
  const getAllBacteriaGrowthPreventions = async () => {
    try {
      const { data } = await axios.get(
        "/api/v1/specs/bacterial-growth-prevention"
      );
      if (data?.success) {
        setBacteriaGrowthPreventions(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Bacterial Growth Prevetion");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBacteriaGrowthPreventions();
  }, []);
  const [foodVitalsTechnology, setFoodVitalsTechnology] = useState("");
  const [foodVitalsTechnologies, setFoodVitalsTechnologies] = useState([]);
  const getAllFoodVitalsTechnologies = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/food-vitals-technology");
      if (data?.success) {
        setFoodVitalsTechnologies(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Food Vitals Technology");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFoodVitalsTechnologies();
  }, []);
  const [indicatorLight, setIndicatorLight] = useState("");
  const [indicatorLights, setIndicatorLights] = useState([]);
  const getAllIndicatorLights = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/indicator-light");
      if (data?.success) {
        setIndicatorLights(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Indicator Lights");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllIndicatorLights();
  }, []);

  // create product function:
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("description", description);
      productData.append("amazonPrice", amazonPrice);
      productData.append("amazonRating", amazonRating);
      productData.append("flipkartRating", flipkartRating);
      productData.append("cromaRating", cromaRating);
      productData.append("amazonLink", amazonLink);
      productData.append("flipkartPrice", flipkartPrice);
      productData.append("flipkartLink", flipkartLink);
      productData.append("cromaPrice", cromaPrice);
      productData.append("cromaLink", cromaLink);
      productData.append("brand", brand);
      productData.append("refrigeratorType", refrigeratorType);
      productData.append("model", model);
      productData.append("panelDisplay", panelDisplay);
      productData.append("salesPackage", salesPackage);
      productData.append("weight", weight);
      productData.append("height", height);
      productData.append("width", width);
      productData.append("depth", depth);
      productData.append("freezerMount", freezerMount);
      productData.append("handleType", handleType);
      productData.append("baseDrawer", baseDrawer);
      productData.append("bodyMaterial", bodyMaterial);
      productData.append("temperedGlass", temperedGlass);
      productData.append("safeCleanBack", safeCleanBack);
      productData.append("otherDesignAndBodySpecs", otherDesignAndBodySpecs);
      productData.append("interiorLamp", interiorLamp);
      productData.append("toughenedGlass", toughenedGlass);
      productData.append("iceTray", iceTray);
      productData.append("chillerTray", chillerTray);
      productData.append("eggTray", eggTray);
      productData.append("bottleShelves", bottleShelves);
      productData.append("iceCubeBox", iceCubeBox);
      productData.append("doorBasket", doorBasket);
      productData.append("antiBacteriaGasket", antiBacteriaGasket);
      productData.append("removableGasket", removableGasket);
      productData.append("shelfMaterial", shelfMaterial);
      productData.append("freezerShelves", freezerShelves);
      productData.append("flexibleRack", flexibleRack);
      productData.append("gasketType", gasketType);
      productData.append("iceMakerType", iceMakerType);
      productData.append("doorCount", doorCount);
      productData.append("iceMaker", iceMaker);
      productData.append("otherInteriorFeatures", otherInteriorFeatures);
      productData.append("totalCapacity", totalCapacity);
      productData.append("freezerCapacity", freezerCapacity);
      productData.append("compressor", compressor);
      productData.append("refrigerant", refrigerant);
      productData.append("coolingTechnology", coolingTechnology);
      productData.append("inbuiltStabilizer", inbuiltStabilizer);
      productData.append("operatesOnHomeInverter", operatesOnHomeInverter);
      productData.append("operatesOnSolarEnergy", operatesOnSolarEnergy);
      productData.append(
        "advancedInverterTechnology",
        advancedInverterTechnology
      );
      productData.append("otherTechnicalSpecs", otherTechnicalSpecs);
      productData.append("frostFree", frostFree);
      productData.append("temperatureControl", temperatureControl);
      productData.append("moistureControl", moistureControl);
      productData.append("airCirculation", airCirculation);
      productData.append("expressFreezing", expressFreezing);
      productData.append("convertibleCoolingMode", convertibleCoolingMode);
      productData.append("convectionCooling", convectionCooling);
      productData.append("coolpad", coolpad);
      productData.append("doorCooling", doorCooling);
      productData.append("coolingMode", coolingMode);
      productData.append("sixthSenseTechnology", sixthSenseTechnology);
      productData.append("fasterBottleCooling", fasterBottleCooling);
      productData.append("knobControl", knobControl);
      productData.append("digiTouchCool", digiTouchCool);
      productData.append("fastIceMode", fastIceMode);
      productData.append("fastChillingMode", fastChillingMode);
      productData.append("allRoundCoolingMode", allRoundCoolingMode);
      productData.append("cyclopentaneInsulation", cyclopentaneInsulation);
      productData.append("otherCoolingFeatures", otherCoolingFeatures);
      productData.append("voltageRequired", voltageRequired);
      productData.append("starRating", starRating);
      productData.append("starRatingYear", starRatingYear);
      productData.append("powerConsumption", powerConsumption);
      productData.append("otherPowerFeatures", otherPowerFeatures);
      productData.append("warrantyType", warrantyType);
      productData.append("productWarranty", productWarranty);
      productData.append("compressorWarranty", compressorWarranty);
      productData.append("otherWarrantyDetails", otherWarrantyDetails);
      productData.append("deodorizer", deodorizer);
      productData.append("bacteriaGrowthPrevention", bacteriaGrowthPrevention);
      productData.append("foodVitalsTechnology", foodVitalsTechnology);
      productData.append("otherFreshnessFeatures", otherFreshnessFeatures);
      productData.append("shockProof", shockProof);
      productData.append("insulation", insulation);
      productData.append("childLock", childLock);
      productData.append("antiRatBite", antiRatBite);
      productData.append("otherSafetyFeatures", otherSafetyFeatures);
      productData.append("doorAlarm", doorAlarm);
      productData.append("easySlideShelf", easySlideShelf);
      productData.append("waterDispenser", waterDispenser);
      productData.append("iceDispenser", iceDispenser);
      productData.append("transparentDoor", transparentDoor);
      productData.append("additionalDoorPockets", additionalDoorPockets);
      productData.append("wifiControl", wifiControl);
      productData.append("autoDoorOpening", autoDoorOpening);
      productData.append("adjustableShelves", adjustableShelves);
      productData.append("iceScraper", iceScraper);
      productData.append("transparentFreezerDoor", transparentFreezerDoor);
      productData.append("otherEaseOfUseFeatures", otherEaseOfUseFeatures);
      productData.append("iotAndAppSupport", iotAndAppSupport);
      productData.append("photo", photo);
      productData.append("indicatorLight", indicatorLight);

      const { data } = await axios.post(
        "/api/v1/products/product",
        productData
      );
      if (data?.success) {
        console.log("Product Created Successfully");
        navigate("/dashboard/admin/products");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      console.log("Something went wrong while submitting product");
    }
  };
  return (
    <Layout title={"Products"}>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div>
              <h1> Create Product</h1>
            </div>
            <h3>General Information</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <div className="m-3 admin-menu-input">
                <label>Description</label>
                <input
                  type="text"
                  value={description}
                  placeholder="Description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Amazon Price</label>
                <input
                  type="number"
                  value={amazonPrice}
                  placeholder="Amazon Price"
                  className="form-control"
                  onChange={(e) => setAmazonPrice(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Amazon Rating</label>
                <input
                  type="number"
                  value={amazonRating}
                  placeholder="Amazon Rating"
                  className="form-control"
                  onChange={(e) => setAmazonRating(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Amazon Link</label>
                <input
                  type="text"
                  value={amazonLink}
                  placeholder="Amazon Link"
                  className="form-control"
                  onChange={(e) => setAmazonLink(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Flipkart Price</label>
                <input
                  type="number"
                  value={flipkartPrice}
                  placeholder="Flipkart Price"
                  className="form-control"
                  onChange={(e) => setFlipkartPrice(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Flipkart Rating</label>
                <input
                  type="number"
                  value={flipkartRating}
                  placeholder="Flipkart Rating"
                  className="form-control"
                  onChange={(e) => setFlipkartRating(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Flipkart Link</label>
                <input
                  type="text"
                  value={flipkartLink}
                  placeholder="Flipkart Link"
                  className="form-control"
                  onChange={(e) => setFlipkartLink(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Croma Price</label>
                <input
                  type="number"
                  value={cromaPrice}
                  placeholder="Croma Price"
                  className="form-control"
                  onChange={(e) => setCromaPrice(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Croma Rating</label>
                <input
                  type="number"
                  value={cromaRating}
                  placeholder="Croma Rating"
                  className="form-control"
                  onChange={(e) => setCromaRating(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Croma Link</label>
                <input
                  type="text"
                  value={cromaLink}
                  placeholder="Croma Link"
                  className="form-control"
                  onChange={(e) => setCromaLink(e.target.value)}
                />
              </div>
            </div>
            <h3>General Specs</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Brand</label>
              <div className="m-3 admin-menu-input">
                <Select
                  variant="borderless"
                  placeholder="Brand"
                  size="large"
                  showSearch
                  className="form-select"
                  onChange={(value) => {
                    setBrand(value);
                  }}
                >
                  {brands?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Refrigerator Type</label>
                <Select
                  variant="borderless"
                  placeholder="Refrigerator Type"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setRefrigeratorType(value);
                  }}
                >
                  {refrigeratorTypes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Model</label>
                <input
                  type="text"
                  value={model}
                  placeholder="Model"
                  className="form-control"
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Panel Display</label>
                <Select
                  variant="borderless"
                  placeholder="Panel Display"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setPanelDisplay(value);
                  }}
                >
                  {panelDisplays?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className=" admin-menu-input">
                <label>Sales Package</label>
                <input
                  type="text"
                  value={salesPackage}
                  placeholder="Sales Package"
                  className="form-control"
                  onChange={(e) => setSalesPackage(e.target.value)}
                />
              </div>
              <div className="mx-3 admin-menu-input">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

              <div className="m-3 admin-menu-input">
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </div>

            <h3>Design & Body Specs</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Weight</label>
              <div className="m-3 admin-menu-input">
                <input
                  type="number"
                  value={weight}
                  placeholder="Weight"
                  className="form-control"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Height</label>
                <input
                  type="number"
                  value={height}
                  placeholder="Height"
                  className="form-control"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Width</label>
                <input
                  type="number"
                  value={width}
                  placeholder="Width"
                  className="form-control"
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Depth</label>
                <input
                  type="number"
                  value={depth}
                  placeholder="Depth"
                  className="form-control"
                  onChange={(e) => setDepth(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Freezer Mount</label>
                <Select
                  variant="borderless"
                  placeholder="Freezer Mount"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFreezerMount(value);
                  }}
                >
                  {freezerMounts?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Handle Type</label>
                <Select
                  variant="borderless"
                  placeholder="Handle Type"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setHandleType(value);
                  }}
                >
                  {handleTypes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Base Drawer</label>
                <Select
                  variant="borderless"
                  placeholder="Base Drawer"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setBaseDrawer(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Body Material</label>
                <Select
                  variant="borderless"
                  placeholder="Body Material"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setBodyMaterial(value);
                  }}
                >
                  {bodyMaterials?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Tempered Glass</label>
                <Select
                  variant="borderless"
                  placeholder="Tempered Glass"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setTemperedGlass(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Safe Clean Back</label>
                <Select
                  variant="borderless"
                  placeholder="Safe Clean Back"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setSafeCleanBack(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Other Design & Body Specs</label>
                <input
                  type="text"
                  value={otherDesignAndBodySpecs}
                  placeholder="Other Design & Body Specs"
                  className="form-control"
                  onChange={(e) => setOtherDesignAndBodySpecs(e.target.value)}
                />
              </div>
            </div>
            <h3>Interior Features</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Interior Lamp</label>
              <div className="m-3 admin-menu-input">
                <Select
                  variant="borderless"
                  placeholder="Interior Lamp"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setInteriorLamp(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Toughened Glass</label>
                <Select
                  variant="borderless"
                  placeholder="Toughened Glass"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setToughenedGlass(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Ice Tray</label>
                <Select
                  variant="borderless"
                  placeholder="Ice Tray"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIceTray(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Chiller Tray</label>
                <Select
                  variant="borderless"
                  placeholder="Chiller Tray"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setChillerTray(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Egg Tray</label>
                <Select
                  variant="borderless"
                  placeholder="Egg Tray"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setEggTray(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Bottle Shelves</label>
                <input
                  type="number"
                  value={bottleShelves}
                  placeholder="Bottle Shelves"
                  className="form-control"
                  onChange={(e) => setBottleShelves(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Ice Cube Box</label>
                <Select
                  variant="borderless"
                  placeholder="Ice Cube Box"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIceCubeBox(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Door Basket</label>
                <Select
                  variant="borderless"
                  placeholder="Door Basket"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setDoorBasket(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Anti Bacterial Gasket</label>
                <Select
                  variant="borderless"
                  placeholder="Anti Bacterial Gasket"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAntiBacteriaGasket(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Removable Gasket</label>
                <Select
                  variant="borderless"
                  placeholder="Removable Gasket"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setRemovableGasket(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Shelf Material</label>
                <Select
                  variant="borderless"
                  placeholder="Shelf Material"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShelfMaterial(value);
                  }}
                >
                  {shelfMaterials?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Freezer Shelves</label>
                <input
                  type="number"
                  value={freezerShelves}
                  placeholder="Freezer Shelves"
                  className="form-control"
                  onChange={(e) => setFreezerShelves(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Flexbile Rack</label>
                <Select
                  variant="borderless"
                  placeholder="Flexible Rack"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFlexibleRack(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Gasket Type</label>
                <Select
                  variant="borderless"
                  placeholder="Gasket Type"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setGasketType(value);
                  }}
                >
                  {gasketTypes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Ice Maker Type</label>
                <Select
                  variant="borderless"
                  placeholder="Ice Maker Type"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIceMakerType(value);
                  }}
                >
                  {iceMakerTypes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Door Count</label>
                <input
                  type="number"
                  value={doorCount}
                  placeholder="Door Count"
                  className="form-control"
                  onChange={(e) => setDoorCount(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Ice Maker</label>
                <Select
                  variant="borderless"
                  placeholder="Ice Maker"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIceMaker(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Interior Features</label>
                <input
                  type="text"
                  value={otherInteriorFeatures}
                  placeholder="Other Interior Features"
                  className="form-control"
                  onChange={(e) => setOtherInteriorFeatures(e.target.value)}
                />
              </div>
            </div>
            <h3>Technical Specs</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Total Capacity</label>
              <div className="m-3 admin-menu-input">
                <input
                  type="number"
                  value={totalCapacity}
                  placeholder="Total Capacity"
                  className="form-control"
                  onChange={(e) => setTotalCapacity(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Freezer Capacity</label>
                <input
                  type="number"
                  value={freezerCapacity}
                  placeholder="Freezer Capacity"
                  className="form-control"
                  onChange={(e) => setFreezerCapacity(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Compressor</label>
                <Select
                  variant="borderless"
                  placeholder="Compressor"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCompressor(value);
                  }}
                >
                  {compressors?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Refrigerant</label>
                <Select
                  variant="borderless"
                  placeholder="Refrigerant"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setRefrigerant(value);
                  }}
                >
                  {refrigerants?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Cooling Technology</label>
                <Select
                  variant="borderless"
                  placeholder="Cooling Technology"
                  size="large"
                  showSearch
                  className="form-select"
                  onChange={(value) => {
                    setCoolingTechnology(value);
                  }}
                >
                  {coolingTechnologies?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Operates on Home Inverter</label>
                <Select
                  variant="borderless"
                  placeholder="Operates on Home Inverter"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setOperatesOnHomeInverter(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Operates on Solar Energy</label>
                <Select
                  variant="borderless"
                  placeholder="Operates on Solar Energy"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setOperatesOnSolarEnergy(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Advanced Inverter Technology</label>
                <Select
                  variant="borderless"
                  placeholder="Advanced Inverter Technology"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAdvancedInverterTechnology(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Technical Specs</label>
                <input
                  type="text"
                  value={otherTechnicalSpecs}
                  placeholder="Other Technical Specs"
                  className="form-control"
                  onChange={(e) => setOtherTechnicalSpecs(e.target.value)}
                />
              </div>
            </div>
            <h3>Cooling Features</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <div className="m-3 admin-menu-input">
                <label>Frost Free</label>
                <Select
                  variant="borderless"
                  placeholder="Frost Free"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFrostFree(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Temperature Control</label>
                <Select
                  variant="borderless"
                  placeholder="Temperature Control"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setTemperatureControl(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Moisture Control</label>
                <Select
                  variant="borderless"
                  placeholder="Moisture Control"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setMoistureControl(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Air Circulation</label>
                <Select
                  variant="borderless"
                  placeholder="Air Circulation"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAirCirculation(value);
                  }}
                >
                  {airCirculations?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Convertible Cooling Mode</label>
                <Select
                  variant="borderless"
                  placeholder="Convertible Cooling Mode"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setConvertibleCoolingMode(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Express Freezing</label>
                <Select
                  variant="borderless"
                  placeholder="Express Freezing"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setExpressFreezing(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Convection Cooling</label>
                <Select
                  variant="borderless"
                  placeholder="Convection Cooling"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setConvectionCooling(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Coolpad</label>
                <Select
                  variant="borderless"
                  placeholder="Coolpad"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCoolpad(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Door Cooling</label>
                <Select
                  variant="borderless"
                  placeholder="Door Cooling"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setDoorCooling(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <label>Cooling Modes</label>
              <div className="m-3 admin-menu-input">
                <input
                  type="number"
                  value={coolingMode}
                  placeholder="Cooling Mode"
                  className="form-control"
                  onChange={(e) => setCoolingMode(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Sixth Sense Technology</label>
                <Select
                  variant="borderless"
                  placeholder="Sixth Sense Technology"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setSixthSenseTechnology(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Faster Bottle Cooling</label>
                <Select
                  variant="borderless"
                  placeholder="Faster Bottle Cooling"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFasterBottleCooling(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Knob Control</label>
                <Select
                  variant="borderless"
                  placeholder="Knob Control"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setKnobControl(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Digi Touch Cool</label>
                <Select
                  variant="borderless"
                  placeholder="Digi Touch Cool"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setDigiTouchCool(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Fast Ice Mode</label>
                <Select
                  variant="borderless"
                  placeholder="Fast Ice Mode"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFastIceMode(value);
                  }}
                >
                  {fastIceModes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Fast Chilling Mode</label>
                <Select
                  variant="borderless"
                  placeholder="Fast Chilling Mode"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFastChillingMode(value);
                  }}
                >
                  {fastChillingModes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>All Round Cooling Mode</label>
                <Select
                  variant="borderless"
                  placeholder="All Round Cooling Mode"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAllRoundCoolingMode(value);
                  }}
                >
                  {allRoundCoolingModes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Cyclo Pentane Insulation</label>
                <Select
                  variant="borderless"
                  placeholder="Cyclo Pentane Insulation"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCyclopentaneInsulation(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Other Cooling Features</label>
                <input
                  type="text"
                  value={otherCoolingFeatures}
                  placeholder="Other Cooling Features"
                  className="form-control"
                  onChange={(e) => setOtherCoolingFeatures(e.target.value)}
                />
              </div>
            </div>

            <h3>Power Features</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Voltage Required</label>
              <div className="m-3 admin-menu-input">
                <input
                  type="number"
                  value={voltageRequired}
                  placeholder="Voltage Required "
                  className="form-control"
                  onChange={(e) => setVoltageRequired(e.target.value)}
                />
              </div>
              <div className="m-3 admin-menu-input">
                <label>Star Rating</label>
                <input
                  type="number"
                  value={starRating}
                  placeholder="Star Rating "
                  className="form-control"
                  onChange={(e) => setStarRating(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Power Consumption</label>
                <input
                  type="number"
                  value={powerConsumption}
                  placeholder="Power Consumption"
                  className="form-control"
                  onChange={(e) => setPowerConsumption(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Star Rating Year</label>
                <input
                  type="number"
                  value={starRatingYear}
                  placeholder="Star Rating Year"
                  className="form-control"
                  onChange={(e) => setStarRatingYear(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Power Features</label>
                <input
                  type="text"
                  value={otherPowerFeatures}
                  placeholder="Other Power Features"
                  className="form-control"
                  onChange={(e) => setOtherPowerFeatures(e.target.value)}
                />
              </div>
            </div>
            <h3>Warranty Details</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Warranty Type</label>
              <div className="m-3 admin-menu-input">
                <Select
                  variant="borderless"
                  placeholder="Warranty Type"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setWarrantyType(value);
                  }}
                >
                  {warrantyTypes?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Product Warranty</label>
                <input
                  type="number"
                  value={productWarranty}
                  placeholder="Product Warranty"
                  className="form-control"
                  onChange={(e) => setProductWarranty(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Compressor Warranty</label>
                <input
                  type="number"
                  value={compressorWarranty}
                  placeholder="Compressor Warranty"
                  className="form-control"
                  onChange={(e) => setCompressorWarranty(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Warranty Details</label>
                <input
                  type="text"
                  value={otherWarrantyDetails}
                  placeholder="Other Warranty Details"
                  className="form-control"
                  onChange={(e) => setOtherWarrantyDetails(e.target.value)}
                />
              </div>
            </div>

            <h3>Freshness Features</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Deodrizer</label>
              <div className="m-3 admin-menu-input">
                <Select
                  variant="borderless"
                  placeholder="Deodorizer"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setDeodorizer(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Bacterial Growth Prevention</label>
                <Select
                  variant="borderless"
                  placeholder="Bacterial Growth Prevention"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setBacteriaGrowthPrevention(value);
                  }}
                >
                  {bacteriaGrowthPreventions?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Food Vitals Technology</label>
                <Select
                  variant="borderless"
                  placeholder="Food Vitals Technology"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setFoodVitalsTechnology(value);
                  }}
                >
                  {foodVitalsTechnologies?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Freshness Features</label>
                <input
                  type="text"
                  value={otherFreshnessFeatures}
                  placeholder="Other Freshness Features"
                  className="form-control"
                  onChange={(e) => setOtherFreshnessFeatures(e.target.value)}
                />
              </div>
            </div>

            <h3> Safety Features</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <label>Shock Proof</label>
              <div className="m-3 admin-menu-input">
                <Select
                  variant="borderless"
                  placeholder="Shock Proof"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShockProof(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Insulation</label>
                <Select
                  variant="borderless"
                  placeholder="Insulation"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setInsulation(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Child Lock</label>
                <Select
                  variant="borderless"
                  placeholder="Child Lock"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setChildLock(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Anti Rat Bite</label>
                <Select
                  variant="borderless"
                  placeholder="Anti Rat Bite"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAntiRatBite(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Safety Features</label>
                <input
                  type="text"
                  value={otherSafetyFeatures}
                  placeholder="Other Safety Features"
                  className="form-control"
                  onChange={(e) => setOtherSafetyFeatures(e.target.value)}
                />
              </div>
            </div>
            <h3>Ease of Use Features</h3>
            <div className="m-1 w-75 d-flex flex-wrap">
              <div className="m-3 admin-menu-input">
                <label>Door Alarm</label>
                <Select
                  variant="borderless"
                  placeholder="Door Alarm"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setDoorAlarm(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Easy Side Shelf</label>
                <Select
                  variant="borderless"
                  placeholder="Easy Side Shelf"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setEasySlideShelf(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Indicator Light</label>
                <Select
                  variant="borderless"
                  placeholder="Indicator Light"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIndicatorLight(value);
                  }}
                >
                  {indicatorLights?.map((s) => (
                    <Option key={s._id} value={s._id}>
                      {s.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Water Dispenser</label>
                <Select
                  variant="borderless"
                  placeholder="Water Dispenser"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setWaterDispenser(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Ice Dispenser</label>
                <Select
                  variant="borderless"
                  placeholder="Ice Dispenser"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIceDispenser(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Transparent Door</label>
                <Select
                  variant="borderless"
                  placeholder="Transparent Door"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setTransparentDoor(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Additional Door Pockets</label>
                <Select
                  variant="borderless"
                  placeholder="Additional Door Pockets"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAdditionalDoorPockets(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Wifi Control</label>
                <Select
                  variant="borderless"
                  placeholder="Wifi Control"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setWifiControl(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Auto Door Opening</label>
                <Select
                  variant="borderless"
                  placeholder="Auto Door Opening"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAutoDoorOpening(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Adjustable Shelves</label>
                <Select
                  variant="borderless"
                  placeholder="Adjustable Shelves"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setAdjustableShelves(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Ice Scrapper</label>
                <Select
                  variant="borderless"
                  placeholder="Ice Scraper"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIceScraper(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>Transparent Freezer Door</label>
                <Select
                  variant="borderless"
                  placeholder="Transparent Freezer Door"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setTransparentFreezerDoor(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="m-3 admin-menu-input">
                <label>App Support</label>
                <Select
                  variant="borderless"
                  placeholder="App Support"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setIotAndAppSupport(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="m-3 admin-menu-input">
                <label>Other Ease of Use Features</label>
                <input
                  type="text"
                  value={otherEaseOfUseFeatures}
                  placeholder="Other Ease of Use Features"
                  className="form-control"
                  onChange={(e) => setOtherEaseOfUseFeatures(e.target.value)}
                />
              </div>

              <div className="m-3 admin-menu-input">
                <label>Inbuilt Stabilizer</label>
                <Select
                  variant="borderless"
                  placeholder="Inbuilt Stabilizer"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setInbuiltStabilizer(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
            </div>
            <div className="m-3">
              <button className="btn btn-primary" onClick={handleCreate}>
                CREATE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;

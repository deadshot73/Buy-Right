import React from "react";

const ProductPageSpecs = ({ p }) => {
  console.log({ p });
  return (
    <div
      className="container card product-page-specs my-2"
      style={{ border: "1px solid #a2abb5" }}
    >
      <div
        className="product-page-specifications-heading d-flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h3 className="m-2" style={{ color: "rgb(101, 112, 162)" }}>
          Key Specifications
        </h3>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          View All Specs
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  All Specifications
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 p-2">
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>General Information</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Brand</td>
                          <td className="text-center">{p?.brand.name}</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Type</td>
                          <td className="text-center">
                            {p?.refrigeratorType.name}
                          </td>
                        </tr>
                        <tr>
                          <td>Panel Display</td>
                          <td className="text-center">
                            {p?.panelDisplay.name}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Design & Body</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Weight</td>
                          <td className="text-center">{p?.weight} Kg</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Height</td>
                          <td className="text-center">{p?.height} cm</td>
                        </tr>
                        <tr>
                          <td>Freezer Mount</td>
                          <td className="text-center">
                            {p?.freezerMount.name}
                          </td>
                        </tr>
                        <tr>
                          <td>Handle Type</td>
                          <td className="text-center">{p?.handleType.name}</td>
                        </tr>

                        <tr>
                          <td>Base Drawer</td>
                          <td className="text-center">
                            {p?.baseDrawer ? "Yes" : "No"}
                          </td>
                        </tr>

                        <tr>
                          <td>Body Tempered Glass</td>
                          <td className="text-center">
                            {p?.temperedGlass ? "Yes" : "No"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Interior features</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Interior Lamp</td>
                          <td className="text-center">
                            {p?.interiorLamp ? "Yes" : "No"}
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>Ice Tray</td>
                          <td className="text-center">
                            {p?.iceTray ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Chiller Tray</td>
                          <td className="text-center">
                            {p?.chillerTray ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Egg Tray</td>
                          <td className="text-center">
                            {p?.eggTray ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Ice Cube Box</td>
                          <td className="text-center">
                            {p?.iceCubeBox ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Removable Gasket</td>
                          <td className="text-center">
                            {p?.removableGasket ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Flexible Rack</td>
                          <td className="text-center">
                            {p?.flexibleRack ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Ice Maker</td>
                          <td className="text-center">
                            {p?.iceMaker ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Ice Maker Type</td>
                          <td className="text-center">
                            {p?.iceMakerType.name}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Cooling Features</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Frost Free</td>
                          <td className="text-center">
                            {p?.frostFree ? "Yes" : "No"}
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>Temperature Control</td>
                          <td className="text-center">
                            {p?.temperatureControl ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Moisture Control</td>
                          <td className="text-center">
                            {p?.moistureControl ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Air Circulation</td>
                          <td className="text-center">
                            {p?.airCirculation.name}
                          </td>
                        </tr>
                        <tr>
                          <td>Express Freezing</td>
                          <td className="text-center">
                            {p?.expressFreezing ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Convection Cooling</td>
                          <td className="text-center">
                            {p?.convectionCooling ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Coolpad</td>
                          <td className="text-center">
                            {p?.coolpad ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Cooling Mode</td>
                          <td className="text-center">{p?.coolingMode}</td>
                        </tr>
                        <tr>
                          <td>6th Sense Technology</td>
                          <td className="text-center">
                            {p?.sixthSenseTechnology ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Knob Control</td>
                          <td className="text-center">
                            {p?.knobControl ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>All Round Cooling Mode</td>
                          <td className="text-center">
                            {p?.allRoundCoolingMode.name}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 p-2">
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Technical Specs</h5>
                    </div>
                    <table className="table">
                      <caption></caption>
                      <tbody>
                        <tr>
                          <td>Total Capacity</td>
                          <td className="text-center">{p?.totalCapacity} L</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Freezer Capacity</td>
                          <td className="text-center">
                            {p?.freezerCapacity > 0
                              ? p?.freezerCapacity + "L"
                              : "NA"}
                          </td>
                        </tr>

                        <tr>
                          <td>Compressor</td>
                          <td className="text-center">{p?.compressor.name}</td>
                        </tr>
                        <tr>
                          <td>Refrigerant</td>
                          <td className="text-center">{p?.refrigerant.name}</td>
                        </tr>
                        <tr>
                          <td>Cooling Technology</td>
                          <td className="text-center">
                            {p?.coolingTechnology.name}
                          </td>
                        </tr>
                        <tr>
                          <td>Inbuilt Stabilizer</td>
                          <td className="text-center">
                            {p?.inbuiltStabilizer ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Operates on Home Inverter</td>
                          <td className="text-center">
                            {p?.operatesOnHomeInverte ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Runs on Solar Energy</td>
                          <td className="text-center">
                            {p?.operatesOnSolarEnergy ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Advanced Inverter technology</td>
                          <td className="text-center">
                            {p?.advancedInverterTechnology ? "Yes" : "No"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Power Features</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Voltage Required</td>
                          <td className="text-center">
                            {p?.voltageRequired > 0
                              ? p?.voltageRequired + "V"
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Star Rating</td>
                          <td className="text-center">
                            {p?.starRating > 0 ? p?.starRating : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Star Rating Year</td>
                          <td className="text-center">
                            {p?.starRatingYear > 0 ? p?.starRatingYear : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Power Consumption</td>
                          <td className="text-center">
                            {p?.powerConsumption > 0
                              ? p?.powerConsumption + "W"
                              : "NA"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Warranty Details</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Warranty Type</td>
                          <td className="text-center">
                            {p?.warrantyType.name}
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>Product Warranty</td>
                          <td className="text-center">
                            {p?.productWarranty > 0
                              ? p?.productWarranty + "Years"
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Compressor Warranty</td>
                          <td className="text-center">
                            {p?.compressorWarranty > 0
                              ? p?.compressorWarranty + "Years"
                              : "NA"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Freshness</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Deodorizer</td>
                          <td className="text-center">
                            {p?.deodorizer ? "Yes" : "No"}
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>Bacterial Growth Prevention Technology</td>
                          <td className="text-center">
                            {p?.bacteriaGrowthPrevention.name}
                          </td>
                        </tr>
                        <tr>
                          <td>Food Vitals Technology</td>
                          <td className="text-center">
                            {p?.foodVitalsTechnology.name}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Safety Features</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Shock Proof</td>
                          <td className="text-center">
                            {p?.shockProof ? "Yes" : "No"}
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>Insulation</td>
                          <td className="text-center">
                            {p?.insulation ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Child Lock</td>
                          <td className="text-center">
                            {p?.childLock ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Anti Rat Bite</td>
                          <td className="text-center">
                            {p?.antiRatBite ? "Yes" : "No"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="product-page-specifications-category mx-1 px-1 py-1">
                      <h5>Ease of Use Features</h5>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Door Alarm</td>
                          <td className="text-center">
                            {p?.doorAlarm ? "Yes" : "No"}
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>Water Dispenser</td>
                          <td className="text-center">
                            {p?.waterDispenser ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Ice Dispenser</td>
                          <td className="text-center">
                            {p?.iceDispenser ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Transparent Door</td>
                          <td className="text-center">
                            {p?.transparentDoor ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Additional Door Pockets</td>
                          <td className="text-center">
                            {p?.additionalDoorPockets ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Wifi Control</td>
                          <td className="text-center">
                            {p?.wifiControl ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>Auto Door Open</td>
                          <td className="text-center">
                            {p?.autoDoorOpen ? "Yes" : "No"}
                          </td>
                        </tr>
                        <tr>
                          <td>IOT & App Support</td>
                          <td className="text-center">
                            {p?.iotAndAppSupport ? "Yes" : "No"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-2">
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>General Information</h5>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td className="text-center">{p?.brand.name}</td>
                <td />
              </tr>
              <tr>
                <td>Type</td>
                <td className="text-center">{p?.refrigeratorType.name}</td>
              </tr>
              {p?.panelDisplay.name !== "NA" && (
                <tr>
                  <td>Panel Display</td>
                  <td className="text-center">{p?.panelDisplay.name}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Design & Body</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.weight != 0 && (
                <tr>
                  <td>Weight</td>
                  <td className="text-center">{p?.weight} Kg</td>
                </tr>
              )}

              {p?.height != 0 && (
                <tr>
                  <td>Height</td>
                  <td className="text-center">{p?.height} cm</td>
                </tr>
              )}
              {p?.freezerMount.name !== "NA" && (
                <tr>
                  <td>Freezer Mount</td>
                  <td className="text-center">{p?.freezerMount.name}</td>
                </tr>
              )}
              {p?.handleType.name !== "NA" && (
                <tr>
                  <td>Handle Type</td>
                  <td className="text-center">{p?.handleType.name}</td>
                </tr>
              )}
              {p?.baseDrawer && (
                <tr>
                  <td>Base Drawer</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.temperedGlass && (
                <tr>
                  <td>Body Tempered Glass</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Interior Features</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.interiorLamp && (
                <tr>
                  <td>Interior Lamp</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.iceTray && (
                <tr>
                  <td>Ice Tray</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.chillerTray && (
                <tr>
                  <td>Chiller Tray</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.eggTray && (
                <tr>
                  <td>Egg Tray</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.iceCubeBox && (
                <tr>
                  <td>Ice Cube Box</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.removableGasket && (
                <tr>
                  <td>Removable Gasket</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.flexibleRack && (
                <tr>
                  <td>Flexible Rack</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.iceMaker && (
                <tr>
                  <td>Ice Maker</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.iceMakerType.name !== "NA" && (
                <tr>
                  <td>Ice Maker Type</td>
                  <td className="text-center">{p?.iceMakerType.name}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Cooling Features</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.frostFree && (
                <tr>
                  <td>Frost Free</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.temperatureControl && (
                <tr>
                  <td>Temperature Control</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.moistureControl && (
                <tr>
                  <td>Moisture Control</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.airCirculation.name !== "NA" && (
                <tr>
                  <td>Air Circulation</td>
                  <td className="text-center">{p?.airCirculation.name}</td>
                </tr>
              )}
              {p?.expressFreezing && (
                <tr>
                  <td>Express Freezing</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.convectionCooling && (
                <tr>
                  <td>Convection Cooling</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.coolpad && (
                <tr>
                  <td>Coolpad</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.coolingMode != 0 && (
                <tr>
                  <td>Cooling Mode</td>
                  <td className="text-center">{p?.coolingMode.name}</td>
                </tr>
              )}
              {p?.sixthSenseTechnology && (
                <tr>
                  <td>6th Sense Technology</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.knobControl && (
                <tr>
                  <td>Knob Control</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.allRoundCoolingMode.name !== "NA" && (
                <tr>
                  <td>All Round Cooling Mode</td>
                  <td className="text-center">{p?.allRoundCoolingMode.name}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6 p-2">
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Technical Specs</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.totalCapacity != 0 && (
                <tr>
                  <td>Total Capacity</td>
                  <td className="text-center">{p?.totalCapacity} L</td>
                </tr>
              )}
              {p?.freezerCapacity != 0 && (
                <tr>
                  <td>Freezer Capacity</td>
                  <td className="text-center">{p?.freezerCapacity} L</td>
                </tr>
              )}
              {p?.compressor.name !== "NA" && (
                <tr>
                  <td>Compressor</td>
                  <td className="text-center">{p?.compressor.name}</td>
                </tr>
              )}
              {p?.refrigerant.name !== "NA" && (
                <tr>
                  <td>refrigerant</td>
                  <td className="text-center">{p?.refrigerant.name}</td>
                </tr>
              )}
              {p?.coolingTechnology.name !== "NA" && (
                <tr>
                  <td>Cooling Technology</td>
                  <td className="text-center">{p?.coolingTechnology.name}</td>
                </tr>
              )}
              {p?.inbuiltStabilizer && (
                <tr>
                  <td>Inbuilt Stabilizer</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.operatesOnHomeInverter && (
                <tr>
                  <td>Operates on Home Inverter</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.operatesOnSolarEnergy && (
                <tr>
                  <td>Runs on Solar Energy</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.advancedInverterTechnology && (
                <tr>
                  <td>Advanced Inverter technology</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Power Features</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.voltageRequired != 0 && (
                <tr>
                  <td>Voltage Required</td>
                  <td className="text-center">{p?.voltageRequired} V</td>
                </tr>
              )}
              {p?.starRating != 0 && (
                <tr>
                  <td>Star Rating</td>
                  <td className="text-center">{p?.starRating}</td>
                </tr>
              )}
              {p?.starRatingYear != 0 && (
                <tr>
                  <td>Star Rating Year</td>
                  <td className="text-center">{p?.starRatingYear}</td>
                </tr>
              )}
              {p?.powerConsumption != 0 && (
                <tr>
                  <td>Power Consumption</td>
                  <td className="text-center">{p?.powerConsumption} W</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Warranty</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.warrantyType.name !== "NA" && (
                <tr>
                  <td>Warranty Type</td>
                  <td className="text-center">{p?.warrantyType.name}</td>
                </tr>
              )}
              {p?.productWarranty != 0 && (
                <tr>
                  <td>Product Warranty</td>
                  <td className="text-center">{p?.productWarranty}</td>
                </tr>
              )}
              {p?.compressorWarranty != 0 && (
                <tr>
                  <td>Compressor Warranty</td>
                  <td className="text-center">{p?.compressorWarranty}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Hygiene & Freshness</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.deodorizer && (
                <tr>
                  <td>Deodorizer</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.bacteriaGrowthPrevention.name !== "NA" && (
                <tr>
                  <td>Bacterial Growth Prevention Technology</td>
                  <td className="text-center">
                    {p?.bacteriaGrowthPrevention.name}
                  </td>
                </tr>
              )}
              {p?.foodVitalsTechnology.name !== "NA" && (
                <tr>
                  <td>Food Vitals Technology</td>
                  <td className="text-center">
                    {p?.foodVitalsTechnology.name}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Safety Features</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.shockProof && (
                <tr>
                  <td>Shock Proof</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.insulation && (
                <tr>
                  <td>Insulation</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.childLock && (
                <tr>
                  <td>Child Lock</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.antiRatBite && (
                <tr>
                  <td>Anti Rat Bite</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="product-page-specifications-category mx-1 px-1 py-1">
            <h5>Ease of Use Features</h5>
          </div>
          <table className="table">
            <tbody>
              {p?.doorAlarm && (
                <tr>
                  <td>Door Alarm</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.waterDispenser && (
                <tr>
                  <td>Water Dispenser</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.iceDispenser && (
                <tr>
                  <td>Ice Dispenser</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.transparentDoor && (
                <tr>
                  <td>Transparent Door</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.additionalDoorPockets && (
                <tr>
                  <td>Additional Door Pockets</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.wifiControl && (
                <tr>
                  <td>Wifi Control</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
              {p?.autoDoorOpen && (
                <tr>
                  <td>Auto Door Open</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}

              {p?.iotAndAppSupport && (
                <tr>
                  <td>IOT & App Support</td>
                  <td className="text-center">Yes</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSpecs;

const Plants = require("../models/plantModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const accountSid = "AC4ba10c9800cc008c4261a347964f53d9";
const authToken = "56de8a6040450a8776599f14f0bbb332";
const client = require("twilio")(accountSid, authToken)

exports.createPlants = catchAsyncErrors(async (req, res, next) => {
  const data = new Plants(req.body);
  res.json(data);
  data
    .save()
    .then(() => console.log("data saved"))
    .catch((err) => console.log(err));
});

exports.getPlants = catchAsyncErrors(async (req, res, next) => {
  const data = await Plants.find();
  res.send(data);
});

exports.getPlantDetails = catchAsyncErrors(async (req, res, next) => {
  const data = await Plants.findOne({ name: req.params.id });
  res.send(data);
});

exports.sendMessage = catchAsyncErrors(async(req, res, next) => {
  client.messages
    .create({
      body: "This is an automated message :')",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918368536432",
    })
    .then((message) => console.log(message));
})

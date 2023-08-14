const Enquiry_Schema = require("../modals/Enquiry");

const makeEnquiry = async (req, res) => {
  try {
    console.log("Start");
    const { name, phone_no, message, product_detail } = req.body;

    if (!name || !phone_no || !product_detail) {
      res.status(400).json({
        success: false,
        message: "Please Fill All The Required Fields",
      });
    }

    const enquiry_data = new Enquiry_Schema({
      name: name,
      phone_no: phone_no,
      message: message,
      product_detail: product_detail,
    });

    const result = await enquiry_data.save();
    res.status(200).json({ message: "Data saved !!", result: result });
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong !!");
  }
};


const getEnquiry = async (req, res) => {
try {
   const data = await Enquiry_Schema.find().populate('product_detail')
   res.status(200).json({message: 'Enquiry fethced !!', data: data})
}
catch(err) {
    console.log(err)
    return res.status(500).json({ message: "Internal Server Error !!" });
}
}
 
exports.makeEnquiry = makeEnquiry;
exports.getEnquiry = getEnquiry

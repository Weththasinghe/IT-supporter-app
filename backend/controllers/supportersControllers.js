import Support from "../models/SupportersModel.js";

// ADD Supporters 
const addSupporters = async(req,res) => {
    const name = req.body.name;
    const contact = req.body.contact;
    const task = req.body.task;
    const address = req.body.address;
    const email = req.body.email;

    const newSupporter = new Support({
        name,
        address,
        task,
        contact,
        email,
    })

    try {
        await newSupporter.save();
        res.json(newSupporter)
    } catch (err) {
        console.log(err)
    }
}

// @desc    Fetch all Supporter
// @route   GET /api/Supporter
// @access Public
const getSupporter = (async(req,res) => {

    const products = await Support.find()
  
    res.json({ products })
  })



export { addSupporters,getSupporter }
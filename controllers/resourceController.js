const Resource = require("../models/resourceModel.js");

exports.createResource = async()=>{
    const newResource = new Resource(req.body);
    try{
        await newResource.save();
        res.status(201).send(newResource);
    }catch(error){
        res.status(400).send(error);
    }
}

exports.getAllResources = async(req,res)=>{
    const resource = await Resource.findById(req.params.id);
    if(!resource){
        return res.status(404).send("Resource not found");
    }
    res.status(200).send(resource);
}

exports.getResourceById = async (req, res) => {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
        return res.status(404).send("Resource not found");
    }
    res.status(200).send(resource);
};

exports.updateResource = async (req, res) => {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resource) {
        return res.status(404).send("Resource not found");
    }
    res.status(200).send(resource);
};

exports.deleteResource = async (req, res) => {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
        return res.status(404).send("Resource not found");
    }
    res.status(200).send("Resource deleted");
};
const usersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
    res.json({
      massage: "Get all usersSuccess",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessahge: error.message,
    });
  }
};

const createUser = async (req, res) => {
    const data = req.body;
    
    if(!data.name || !data.email || !data.address){
        res.status(400).json({
            message: "Bad request",
            serverMessage: "Missing name, email or address",
        });
    }
  try {
    await usersModel.createUser(data);
  res.status(201).json({
    massage: "Create userSuccess",
    data: data,
  });
} catch (error) {
    res.status(500).json({
        message: "Internal server error",
        serverMessage: error,
        });
};
};

const updateUser = async(req, res) => {
  const { id } = req.params;
  const {body} = req;
  try{
    await usersModel.updateUser(body, id)
    res.json({
        massage: "Update userSuccess",
        data: {
            id: id,
            ...body,
        }
      });
  }catch (error) {
    res.status(500).json({
        message: "Internal server error",
        serverMessage: error,
        });
    }

};

const deleteUser = async(req, res) => {
  const { id } = req.params;
try{ 
    await usersModel.deleteUser(id)
    res.json({
        massage: "Delete userSuccess",
        data :[],
      });
   
  }catch (error) 
  {
    res.status(500).json({
        message: "Internal server error",
        serverMessahge: error,
        });
    }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};

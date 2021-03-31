const productService = require("./product.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    productService.create(body).then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Successfully Inserted",
          data: result
        });
      } else {
        res.json({
          success: 0,
          message: "Error Occurs in Insertion"
        });
      }
    });
  },
  list: (req, res) => {
    productService.list().then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Fetched",
          data: result
        });
      } else {
        res.json({
          success: 0,
          message: "Error Occurs in Fetching data"
        });
      }
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id).then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Successfully remove"
        });
      } else {
        res.json({
          success: 0,
          message: "Error Occurs in Removing"
        });
      }
    });
  }
};

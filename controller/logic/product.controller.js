/** Dto */

const productDto = require("../../model/dto/product.dto");


exports.createProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        qualification: req.body.qualification,
        category: req.body.category,
        trademark: req.body.trademark,
        discount: req.body.discount
    };
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
        });
   
};

exports.updateProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        qualification: req.body.qualification,
        category: req.body.category,
        trademark: req.body.trademark,
        discount: req.body.discount
    };
    productDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }

        res.status(201).json(
            {
                info: data
            }
        );

    });
};

exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};

exports.getById = (req, res, next) => {
    productDto.getById({_id: req.params.id}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};


exports.deleteProduct = (req, res, next) => {
    productDto.delete({_id: req.body.id}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}
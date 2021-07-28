const axios = require("axios");
const responsemodel = require("../helpers/responseModel");
axios.defaults.baseURL = `https://api.mercadolibre.com`;
const apiController = {
    searchProduct: async(req, res) => {
        try {
            const { q } = req.query;
            const url = `/sites/MLA/search?q=${q}`;
            const response = await axios.get(url);
            const { data } = response;
            const { results } = data;
            const items = [
                ...results.slice(0, 4).map((item) => responsemodel.items(item))
            ];
            const categories = responsemodel.categories(data);
            const author = responsemodel.author()
            res.send({...author, items, categories });
        } catch (err) {
            res.status(500).send(err);
        }
    },

    detailsProduct: async(req, res) => {
        try {
            const { id } = req.params;
            const url = `/items/${id}`;
            const urlDescription = `/items/${id}/description`;
            const response = await axios.get(url);
            const responseDescripton = await axios.get(urlDescription);
            const { data } = response;
            const { data: dataDescription } = responseDescripton;
            const { plain_text: description } = dataDescription;
            const author = responsemodel.author()
            const item = {
                ...responsemodel.items(data),
                description,
            };

            res.send({...author, item });
        } catch (err) {
            res.status(500).send(err);
        }
    },
};

module.exports = apiController;
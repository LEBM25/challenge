const responsemodel = {
    items: (result) => {
        const {
            id,
            title,
            price,
            currency_id: currency,
            thumbnail,
            shipping,
            condition,
            sold_quantity,
            address,
            pictures,
        } = result;

        const picture = thumbnail.replace("-O", "-I");
        let pictureDetail = [];
        if (pictures) {
            pictureDetail.push(
                ...pictures.map((item) => {
                    const { url } = item;
                    return { url };
                })
            );
        }
        const { state_name } = address || "";
        const { free_shipping } = shipping;
        const amounts = price.toString().split(".");
        const itemObject = {
            id,
            title,
            price: {
                currency,
                amount: +amounts[0],
                decimals: amounts.length === 1 ? 0 : +("0." + amounts[1]),
            },
            picture,
            condition,
            free_shipping,
            sold_quantity,
            state_name,
            pictureDetail,
        };

        return itemObject;
    },

    categories: (data) => {
        const { available_filters } = data;
        const categories = [];
        available_filters.forEach((item) => {
            if (item.id === "category") {
                item.values.sort((a, b) => b.results - a.results);
                categories.push(item.values[0].name);
            }
        });

        return categories;
    },

    author: () => {
        return {
            author: {
                name: "Lenin E",
                lastname: "Batista M",
            },
        };
    },
};

module.exports = responsemodel;
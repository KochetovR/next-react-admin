import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export const myDataProvider = {
    ...dataProvider,
    getList: (resource, params) => {
        const { filter, ...otherParams } = params;

        const updatedFilter = Object.keys(filter).reduce((acc, key) => {
            acc[`${key}_like`] = filter[key];
            return acc;
        }, {});

        return dataProvider.getList(resource, { filter: updatedFilter, ...otherParams });
    },

        // getList("users", {
        //         pagination: { page: 1, perPage: 10 },
        //         sort: { field: "id", order: "ASC" },
        //         filter: {}
        //     })
        //         .then(({ data, total }) => {
        //             console.log(data, "Fetched users");
        //             console.log(total, "Total users count");
        //         })
        //         .catch(error => {
        //             console.error("Error fetching users:", error);
        //         });
};
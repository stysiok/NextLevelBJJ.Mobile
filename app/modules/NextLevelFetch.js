export const GraphQLFetch = async(query) => {
    try {
        let response = await fetch('http://192.168.1.107:5000/graphql/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 query: query
            })
        });

        return await response.json();

    } catch (error) {
        console.log(error);
    }
};
import { faker } from '@faker-js/faker';
import itemsApriori from "../../fixtures/crear-post/apriori_mock_data.json";



const getItem = async (items) => await items[Math.floor(Math.random()*items.length)]

const fetchDataFaker = () =>  {
    const items = Array.from({ length: 100 }, () => ({
        "postTitle":faker.person.fullName(),
        "postDescription": faker.string.alpha({ length: { min: 5, max: 200 } }),
    }));

    return getItem(items);
}

async function fetchDataMookaro ()  {
    const fetData = async ()=>{
        return await fetch("https://my.api.mockaroo.com/posts.json?key=866d8d70",
        {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }}).then(res=>{
        return res
            .json()
            .then((json) => ({ status: res.status, response: json }))
        })
    }

    const {response} =  await fetData()
    return getItem(response);
}

const fetchData = async () => {
    let item;
    switch (Cypress.env('POOL_DATA')) {
        case 'random':
            item =  await fetchDataFaker()
        case 'dynamic':
            item = await fetchDataMookaro()
        default:
            item =  getItem(itemsApriori)
    }
    return item
}

export default  fetchData;
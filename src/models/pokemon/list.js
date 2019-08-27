import Axios from "axios";

const list = async (_, args) => {
    const { offset, limit } = args;

    const res = await Axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: { offset, limit }
    });

    return res.data
}

export default list;
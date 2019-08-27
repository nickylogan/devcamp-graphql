import axios from 'axios';

const detail = async (_, args) => {
    const { id, name } = args;
    let res;
    if (id) {
        res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    } else if (name) {
        res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
    
    return {
        id: res.data.id,
        name: res.data.name,
        base_experience: res.data.base_experience,
        height: res.data.height,
        is_default: res.data.is_default,
        order: res.data.order,
        weight: res.data.weight,
    }
}

export default detail;
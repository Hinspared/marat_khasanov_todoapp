import axios from 'axios';

// Access blocked by CORS policy
export const request = async () => {
  try {
    const typesArray: string[] = [];
    const { data } = await axios.get(`https://procorp.cz/test_01/types.json`);
    const types = Object.values(data.data)
      .map((type: any) => Object.values(type.attributes))
      .map((type: any) => type[0]);
    types.forEach((type: any) => typesArray.push(type));
    return typesArray;
  } catch (error) {}
};

export const getHomeData = async () => {
    const url = 'http://localhost:3001/clientes/new';
    const response = await fetch(url, {method: 'POST'});
    const jsonResponse = await response.json();
    return jsonResponse;
  }
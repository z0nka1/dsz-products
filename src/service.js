const endpoint = 'https://services.dev.dropshipzone.com.au/api/dsz-api';

export async function getAccessToken() {
  try {
    const resp = await fetch(`${endpoint}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test_account@dsz.com.au',
        password: 'asdf_123456'
      })
    });
    return await resp.json();
  } catch (err) {
    console.log('err', err);
  }
}

export async function getProducts(token, pageNo = 1, limit = 40) {
  try {
    const resp = await fetch(`${endpoint}/products?page_no=${pageNo}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Authorization': `jwt ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return await resp.json();
  } catch (err) {
    console.log('err', err);
  }
}
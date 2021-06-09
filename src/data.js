export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }


  firebase.firestore.collection('men').add({
    id: getUUID(),
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://shopse.netlify.app/static/23aa5640639869986cbc101a76839465/58556/MD_109_E_6064_4_922fe377c8.webp']
  });
  firebase.firestore.collection('men').add({
    id: getUUID(),
    title: 'Rex Damaged Slim Jeans, Grey',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://shopse.netlify.app/static/23aa5640639869986cbc101a76839465/58556/MD_109_E_6064_4_922fe377c8.webp']
  });
  firebase.firestore.collection('men').add({
    id: getUUID(),
    title: 'Tonic Crew T-Shirt',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://shopse.netlify.app/static/23aa5640639869986cbc101a76839465/58556/MD_109_E_6064_4_922fe377c8.webp']
  });
  firebase.firestore.collection('women').add({
    id: getUUID(),
    title: 'Tonic Crew T-Shirt',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://shopse.netlify.app/static/5636a1d5cc6a81cf8f437a9ef6d6fbaa/14b42/WJ_127_S_6395_5_e6bd5d6905.jpg']
  });
  firebase.firestore.collection('women').add({
    id: getUUID(),
    title: 'Tonic Crew T-Shirt',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://shopse.netlify.app/static/5636a1d5cc6a81cf8f437a9ef6d6fbaa/14b42/WJ_127_S_6395_5_e6bd5d6905.jpg']
  });
  firebase.firestore.collection('women').add({
    id: getUUID(),
    title: 'Tonic Crew T-Shirt',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://shopse.netlify.app/static/5636a1d5cc6a81cf8f437a9ef6d6fbaa/14b42/WJ_127_S_6395_5_e6bd5d6905.jpg']
  });

}
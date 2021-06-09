export function seedDatabase(firebase) {
/*   function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
/*     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    }); */
    /* eslint-enable */
  //} */

  firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/6207072/pexels-photo-6207072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6207069/pexels-photo-6207069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6207074/pexels-photo-6207074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
  });
  firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/7256511/pexels-photo-7256511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7256512/pexels-photo-7256512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7256514/pexels-photo-7256514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
  });
  firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/6213872/pexels-photo-6213872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6213873/pexels-photo-6213873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6213869/pexels-photo-6213869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
  });

     firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/5659215/pexels-photo-5659215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5659200/pexels-photo-5659200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
    });
     firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://salomon.ru/upload/iblock/7d3/7d3bb9518839b233d8ef09252434b6b6.jpg',
    'https://salomon.ru/upload/iblock/509/509ebfd2aa9ac1ac671a7cdbbbd64218.jpg',
    'https://salomon.ru/upload/iblock/651/651142eb052ef60734c1b8fee1a6c1f0.jpg'],
    });
     firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112016_804x.progressive.jpg?v=1622040951',
    'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112016_3_804x.progressive.jpg?v=1622040951',
    'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112016_2_804x.progressive.jpg?v=1622040951'],

    });
     firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://cdn.shopify.com/s/files/1/0274/4293/7933/products/69356_1_804x.progressive.jpg?v=1597100981',
    'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/69356_804x.progressive.jpg?v=1597100981',
    'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/69356_3_804x.progressive.jpg?v=1597100981'],

    });
     firebase.firestore.collection('men').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001109902_1_804x.progressive.jpg?v=1615816745',
    'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001109902_2_804x.progressive.jpg?v=1615816745',
    'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001109902_3_804x.progressive.jpg?v=1615816745'],

    });
    
    
    
    
    //women
    
    
    
     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/4205567/pexels-photo-4205567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4205566/pexels-photo-4205566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4205570/pexels-photo-4205570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
    
    });     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/6281953/pexels-photo-6281953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6281954/pexels-photo-6281954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6281996/pexels-photo-6281996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
   
    });     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/4315207/pexels-photo-4315207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4315215/pexels-photo-4315215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
    
    });     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://images.pexels.com/photos/5580168/pexels-photo-5580168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5580166/pexels-photo-5580166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5580170/pexels-photo-5580170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5580165/pexels-photo-5580165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'],
   
    });    
     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:[
    'https://charlotte-beaude.com/wp-content/uploads/2020/12/CB9970.jpg',
    'https://charlotte-beaude.com/wp-content/uploads/2020/12/CharlotteBeaude-lookbook-w2121-lr_web-23.jpg',
    'https://charlotte-beaude.com/wp-content/uploads/2020/12/CB9891.jpg'],
    
    });    
     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://charlotte-beaude.com/wp-content/uploads/2020/12/CB6525.jpg',
    'https://charlotte-beaude.com/wp-content/uploads/2020/10/CharlotteBeaude-lookbook-w2121-lr_web-19.jpg',
    'https://charlotte-beaude.com/wp-content/uploads/2020/12/CB6532.jpg'],
  
    });     firebase.firestore.collection('women').add({
    title: 'Manor Leather Biker Jacket',
    price: 3.5,
    colors:['black','white','grey'],
    size:['xs','s','m','L','xl','xxl'],
    category:'clothes',
    images:['https://charlotte-beaude.com/wp-content/uploads/2020/12/CB8756.jpg',
    'https://charlotte-beaude.com/wp-content/uploads/2020/12/CharlotteBeaude-lookbook-w2121-lr_web-29.jpg',
    'https://charlotte-beaude.com/wp-content/uploads/2020/12/CB8692.jpg'],
    });
}
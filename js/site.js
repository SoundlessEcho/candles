const cart = [];
function addToCart(id){
  const p = products.find(x=>x.id===id);
  cart.push(p);
  alert(p.name + " added to cart. (This demo uses a mock cart.)");
}
// Placeholder products data
const products = [
  {id:'p1',name:'Moonlit Amber',price:24.00},
  {id:'p2',name:'Lavender Spell',price:22.00},
  {id:'p3',name:'Vanilla Enchantment',price:20.00},
  {id:'p4',name:'Cedar & Smoke',price:26.00},
  {id:'p5',name:'Rose Gold Glow',price:28.00},
  {id:'p6',name:'Forest Whisper',price:23.00}
];
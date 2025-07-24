const products = [
  {
    id: 101,
    name: "หูฟังบลูทูธ Sony",
    category: "Electronics",
    price: 4590,
    stock: 15,
  },
  {
    id: 102,
    name: "คีย์บอร์ด Mechanical",
    category: "Electronics",
    price: 2800,
    stock: 8,
  },
  {
    id: 201,
    name: "หนังสือ The Pragmatic Programmer",
    category: "Books",
    price: 850,
    stock: 30,
  },
  {
    id: 202,
    name: "หนังสือ Clean Code",
    category: "Books",
    price: 799,
    stock: 0,
  }, // สินค้าหมด
  {
    id: 301,
    name: "แก้วกาแฟ Starbucks",
    category: "Lifestyle",
    price: 550,
    stock: 25,
  },
];

const user = {
  name: "สมศักดิ์",
  shoppingCart: [
    { productId: 101, quantity: 1 }, //หูฟัง Sony 1 อัน
    { productId: 201, quantity: 2 },
    { productId: 102, quantity: 1 },
    { productId: 202, quantity: 1 },
    { productId: 301, quantity: 1 },
  ],
};

function processCart(customer, productList){
    console.log(
        `======== เริ่มประมวลผลการสั่งซื้อของลูกค้า "${customer.name}" ========`
    );

    //วนลูปสินค้าในตระก้าเพื่อสร้าง array ใหม่
    const enrichedCart = customer.shoppingCart.map((item) =>{
        const productDetails = productList.find((p) => p.id === item.productId);

        //check ว่า สินค้าใน stock (productDetails.stock) มีพอให้ลูกค้าไหม (item.quantity)
        if(productDetails.stock < item.quantity){
            console.warn(`"${productDetails.name}" สินค้าไม่เพียงพอ`);
        } else {
            console.log(productDetails.name);
        }

        return {
            ...productDetails,
            quantity: item.quantity,
            subtotal: productDetails.price * item.quantity,
        };
    });
    
    const availableItems = enrichedCart.filter((item) => item.stock != 0);

    //คำนวณราคารวม totalPrice => reduce
    const totalPrice = availableItems.reduce((total,currentItem) => {
        return total += (currentItem.quantity * currentItem.price);
    },0);
    
    //เรียงรายการสินค้าจากราคาสูงไปต่ำ => sort
    const sortItem = availableItems.sort((a,b) => b.price - a.price);
    console.log(sortItem);

    //แสดงรายการที่สั่งซื้อ
    for (item of sortItem){
        console.log(`${item.name} x ${item.quantity} | ราคา: ${item.subtotal}`);
    }
    //แสดงราคารวม totalPrice
    console.log(`ราคารวมสุทธิ ${totalPrice}`);
}

processCart(user,products);

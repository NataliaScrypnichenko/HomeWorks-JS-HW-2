function Client(id, name, surname , email, phone, order){
    this.id =id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients=[
    new Client(1, 'Emily','James', 'cvvu@gmail.com', '+380967877654',['printer','phone','fridge']),
    new Client(2, 'Oliver','James', 'cvgjjvu@gmail.com', '+380967877654',['computer','laptop']),
    new Client(3, 'Jack','Smith', 'cvvtju@gmail.com', '+380967877657',['hairdryer']),
    new Client(4, 'Harry','Jones', 'cvjmnvu@gmail.com', '+380967877658',[ 'curling iron','phone']),
    new Client(5, 'Jacob','James', 'cvvuuu@gmail.com', '+380967877654',['kettle','iron', 'blender','mixer']),
    new Client(6, 'Lily','Williams', 'cvvj@gmail.com', '+3806678797654',['curling iron','phone']),
    new Client(7, 'Sophie','Davies', 'ckliu@gmail.com', '+3809378774654',['kettle','iron', 'blender','mixer','air conditioner','curling iron','phone']),
    new Client(8, 'Ava','Wilson', 'cvvuiou@gmail.com', '+380507877656',['kettle','iron', 'blender','mixer','air conditioner',]),
    new Client(9, 'Jessica','Evans', 'cvjjuvu@gmail.com', '+380967877653',['printer','phone','fridge']),
    new Client(10,'Jessica','Evans', 'cvjjuvu@gmail.com', '+380967877653',['kettle','iron', 'blender','mixer','air conditioner'])
];

clients.sort((a, b) => a.order.length-b.order.length);
console.log(clients.sort());

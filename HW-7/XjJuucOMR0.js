
function User(id, name, surname , email, phone){
    this.id = id;
    this.name=name;
    this.surname =surname;
    this.email =email;
    this.phone =phone;
}
const  user= new User(1, 'olla','James', 'cvvu@gmail.com', '+380967877654');
console.log(user);

let users=[
    new User(1, 'Emily','James', 'cvvu@gmail.com', '+380967877654'),
    new User(2, 'Oliver','James', 'cvgjjvu@gmail.com', '+380967877654'),
    new User(3, 'Jack','Smith', 'cvvtju@gmail.com', '+380967877657'),
    new User(4, 'Harry','Jones', 'cvjmnvu@gmail.com', '+380967877658'),
    new User(5, 'Jacob','James', 'cvvuuu@gmail.com', '+380967877654'),
    new User(6, 'Lily','Williams', 'cvvj@gmail.com', '+3806678797654'),
    new User(7, 'Sophie','Davies', 'ckliu@gmail.com', '+3809378774654'),
    new User(8, 'Ava','Wilson', 'cvvuiou@gmail.com', '+380507877656'),
    new User(9, 'Jessica','Evans', 'cvjjuvu@gmail.com', '+380967877653'),
    new User(10, 'Poppy','James', 'cvvnmjfu@gmail.com', '+3809678776564')
]
console.log(users);

const express = require("express");
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const user = {
        _id:faker.database.mongodbObjectId(),
        lastName: faker.person.lastName(),
        firstName:faker.person.firstName(),
        phoneNumber:faker.phone.number(),
        email:faker.internet.email(),
        password:faker.internet.password()

    };
    return user;
};

const createCompany = () => {
    const company = {
        _id:faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address:{
            street:faker.location.street(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()
        }
    };
    return company;
};
    
const companies=[];
const users=[

]

const app = express();
const port = 8000;

// req is short for request
// res is short for response

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
  });

  app.get("/api/companies/new", (req, res) => {
        res.json(  createCompany() );
    });

app.get("/api/users/new", (req, res) => {
        res.json(  createUser() );
    });
    app.get("/api/user/company", (req, res) => {
        const result=[]
        const company= createCompany()
        const user= createUser()
        result.push(company)
        result.push(user)
            res.json( result );
        });







app.listen( port, () => console.log(`Listening on port: ${port}`) );
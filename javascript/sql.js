const mysql = require("mysql2/promise");

const inserintodb = async ()=>{
    const connection = await mysql.createConnection({
        host:"sql12.freedatabase.com",
        user:"sql12607971",
        password:"I7dazNJ771",
        database:"sql12607971",
        port:3306,
    
    })
    try {
        await connection.query(
            "INSERT INTO vistors (FirstName, LastName, vistedDate, mailAddress, Message) VALUES('teja','gunji','2023-03-12','surya@gmail.com','hi bro')"
        )
        
    } catch (e) {
        console.log(e)
        
    }
};
inserintodb();
const mysql = require('mysql')

class CarroDB{
    
    static connect(){
        const conection = mysql.createConnection({
        host:"localhost",
        user:"root",
        passoword:"",
        database:"auto"
        })
        RTCPeerConnection.connect()
        return connection
    }
    //Realiza uma consulta no 3D
    static getCarros(callback){
        let connection= CarroDB.connect
        let sql = "select * from  carro"
        let query = connect.cuery(sql,function(err,results,fields){
            if(err) throw err 
            callback(results)

        })
            console.log(query.sql)
            connection.end()
    }
    //Realiza consulta pelo tipo
    static getCarrosTipp(tipo,callback){
        let connection = CarroDB.connection
        let sql="select * from carro where tipo = ' " + tipo +" '"
        let query = connection(sql, function(err,results,fields){
            if(err) throw err
            callback(results)

        })
        console.log(query.sql)
        connection.edn()
        }
        //Salvar no BD
        //Salva dados no banco
        static save(carro,callback){
            const connection=CarroDB.connect()
            let sql = "insert into carro set?"
            let query = connection.query(sql, carro, function(err,results,fields){
                if(err) throw err
                carro.id = results.insertId
                //Retorna pela função callback
                callback(carro)
            })
            console.log(query.sql)
            connection.end
        }
        //Atualiza registro do banco de dados
        static update (carro, callback){
            const connection = CarroDB.connect()
            let sql = "update carro set? where id = ?"
            let id = carro.id
            let query = connection.query(sql,[carro,id], function(err,results,fields){
                if(err) throw err
                callback(carro)
            })
            console.log(queyr.sql)
            connection.end
        }
        //Apagar registo pelo ID
        static delete(id,callback){
            let sql= "delete from carro where id = ?"
                let query = connection.querry(sql, id,function(err,results,fields){
                if(err) throw err
                callback(carro)
            })
            console.log(query,sql)
            connection.end()
        }
    }

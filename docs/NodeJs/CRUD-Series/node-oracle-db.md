---
slug: node-oracle-db
id: node-oracle-db
title: Node Oracle DB
authors: [vnk]
tags: [NodeJs, Oracle, Database, Javascript]
custom_edit_url: null
---
##### Step 1: 
Install OracleDB Package
```bash
$ npm i oracledb
```

#### Step 2: 
A basic oracle client should be installed on your machine.  
   Download it from here [Oracle Client](https://www.oracle.com/uk/database/technologies/instant-client/downloads.html)

*For Windows Machine* - Place the extracted files in the following path of nodejs code   
```diff
> node_modules/oracledb/build/Release/  
```

*For Linux Machine* - Place the extracted files in the lib folder in root path
```diff
> /lib  
```

### Sample CrudOperations Class
```js
//The CRUD operations on a dummy user table
const oracledb = require('oracledb')

class CrudOperations {
	constructor() {
		this.connectionString = process.env.CONNECTION_STRING
        this.username = process.env.USER_NAME
        this.password = process.env.PASSWORD
		this.options = { outFormat: oracledb.OBJECT }
	}
	
	select(user) {}
	insert(user) {}
	update(user) {}
	deleteOperation(user) {}
}
```

### Retrieve
```js
const oracledb = require('oracledb')

async select(user) {
	const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })
    const getSqlQuery = `SELECT * FROM dummyusertable 
                         WHERE email = '${user.email}'`
    try {
      console.log(getSqlQuery)
      const result = await connection.execute(getSqlQuery, {}, this.options)      
      return result.rows
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
}
```

### Insert a Single row
```js
const oracledb = require('oracledb')

async insert(user) {
	const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })
    const opts = this.options
    opts.autoCommit = true	
	const binds = {}
	
	const insertSqlQuery = `INSERT INTO dummyusertable(
                                  FIRST_NAME,
                                  LAST_NAME,
                                  EMAIL,
								  MODIFIED_TIMESTAMP
                                ) 
                                VALUES(
                                  '${user.first_name}',
                                  '${user.last_name}',
                                  '${user.email}',                                  
                                  SYSDATE                                  
                                )`
    try {
      console.log(insertSqlQuery)
      const result = await connection.execute(insertSqlQuery, binds, opts)     
      if (result.rowsAffected === 1) {
        return `${user.email} creation successfull!`
      } else {
        throw new Error('Unable to create user!')
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
}
```

### update
```js
const oracledb = require('oracledb')

async update(user) {
	const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })
    const opts = this.options
    opts.autoCommit = true

    const updateSqlQuery = `UPDATE dummyusertable SET first_name = 'asdf'
                            WHERE email = '${user.email}'`
    try {
      console.log(updateSqlQuery)
      const result = await connection.execute(updateSqlQuery, {}, opts)      
      if (result.rowsAffected === 1) {
        return `${user.email} status is updated successfully!`
      } else {
        throw new Error('Unable to update the status!')
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
```

### Delete
```js
const oracledb = require('oracledb')

async delete(user) {
	const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })
    const opts = this.options
    opts.autoCommit = true

    const updateSqlQuery = 'DELETE FROM dummyusertable WHERE modified_timestamp <= TRUNC(SYSDATE) - 30'
    try {
      console.log(updateSqlQuery)
      const result = await connection.execute(updateSqlQuery, {}, opts)      
      return result
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
  }
}
```


### Insert Many
```js
const oracledb = require('oracledb')

async insert(users) {
	const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })

  const insertbinds = []
  //Here we are trying to insert multiple users with one insert statement
  for(const i of users) {
    insertBinds.push({
      firstName: i.firstName,
      lastName: i.lastName,
      email: i.email
    })
  }
  
  const insertOptions = {
    autoCommit = true,
    batchErrors: true,
    outFormat: oracledb.OUT_FORMAT_OBJECT,
    binddefs: {
      firstName: {type: oracledb.STRING, maxSize: 30}, // {type: oracledb.NUMBER}
      lastName: {type: oracledb.STRING, maxSize: 30},
      email: {type: oracledb.STRING, maxSize: 30}
    }    
  }
	
	const insertSqlQuery = `INSERT INTO dummyusertable(
                                  FIRST_NAME,
                                  LAST_NAME,
                                  EMAIL,
								                  MODIFIED_TIMESTAMP
                                ) 
                                VALUES(
                                  :firstName,
                                  :lastName,
                                  :email,
                                  SYSDATE                                  
                                )`
    try {
      console.log(insertSqlQuery)
      const result = await connection.executeMany(insertSqlQuery, binds, options)
      console.log('Result - ', result)

      return result.rows
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
}
```

### Insert (OutBinds)
```js
const oracledb = require('oracledb')

async insert(user) {
	const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })
  
  const binds = { // we can get the userId upon insertion of the data
    user_id_out: {
      type: oracledb.NUMBER,
      dir: oracledb.BIND_OUT
    }
  }
  
	const options = { autoCommit: true }
	
	const insertSqlQuery = `INSERT INTO dummyusertable(
                                  FIRST_NAME,
                                  LAST_NAME,
                                  EMAIL,
								  MODIFIED_TIMESTAMP
                                ) 
                                VALUES(
                                  '${user.first_name}',
                                  '${user.last_name}',
                                  '${user.email}',                                  
                                  SYSDATE                                  
                                ) returning USER_ID into :user_id_out`
    try {
      console.log(insertSqlQuery)
      const result = await connection.execute(insertSqlQuery, insertBinds, options)
      console.log('Result - ', result)

      return result.outbinds.user_id_out[0]
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
}
```

### Update Many
```js
const oracledb = require('oracledb')

async update(user) {
	  const connection = await oracledb.getConnection({
      user: this.username,
      password: this.password,
      connectString: this.connectionString
    })

    const updateBinds = []
    //Here we are trying to update multiple users with one update statement
    for(const i of users) {
      updateBinds.push({
        firstName: i.firstName,        
        email: i.email
      })
    }
    
    const updateOptions = {
      autoCommit = true,
      batchErrors: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      binddefs: {
        firstName: {type: oracledb.STRING, maxSize: 30}, // {type: oracledb.NUMBER}        
        email: {type: oracledb.STRING, maxSize: 30}
      }    
    }

    const updateSqlQuery = `UPDATE dummyusertable 
                            SET first_name = :firstName
                            WHERE email = :email`
    try {
      console.log(updateSqlQuery)
      const result = await connection.executeMany(updateSqlQuery, updateBinds, options)
      
      console.log('Result - ', result)
      return result
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
       try {
        if(connection) {
          await connection.close()
        }
       } catch(err) {
          console.log(err.message)
       }
    }
```
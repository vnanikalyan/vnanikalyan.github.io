"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[7533],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(b,s(s({ref:n},u),{},{components:t})):r.createElement(b,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7522:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],l={slug:"node-oracle-db",id:"node-oracle-db",title:"Node Oracle DB",authors:["vnk"],tags:["NodeJs","Oracle","Database","Javascript"]},c=void 0,i={unversionedId:"NodeJs/CRUD-Series/node-oracle-db",id:"NodeJs/CRUD-Series/node-oracle-db",title:"Node Oracle DB",description:"Step 1: Install OracleDB Package",source:"@site/docs/NodeJs/CRUD-Series/node-oracle-db.md",sourceDirName:"NodeJs/CRUD-Series",slug:"/NodeJs/CRUD-Series/node-oracle-db",permalink:"/fr/docs/NodeJs/CRUD-Series/node-oracle-db",editUrl:"https://vnanikalyan.github.io/docs/docs/NodeJs/CRUD-Series/node-oracle-db.md",tags:[{label:"NodeJs",permalink:"/fr/docs/tags/node-js"},{label:"Oracle",permalink:"/fr/docs/tags/oracle"},{label:"Database",permalink:"/fr/docs/tags/database"},{label:"Javascript",permalink:"/fr/docs/tags/javascript"}],version:"current",frontMatter:{slug:"node-oracle-db",id:"node-oracle-db",title:"Node Oracle DB",authors:["vnk"],tags:["NodeJs","Oracle","Database","Javascript"]},sidebar:"mySidebar",previous:{title:"Node MySql DB",permalink:"/fr/docs/NodeJs/CRUD-Series/node-mysql-db"}},u=[{value:"Sample CrudOperations Class that uses oracledb",id:"sample-crudoperations-class-that-uses-oracledb",children:[],level:3},{value:"Retreive",id:"retreive",children:[],level:3},{value:"Insert a Single row",id:"insert-a-single-row",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Step 1:")," Install OracleDB Package"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"npm i oracledb")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Step 2:")," A basic oracle client should be installed on your machine.",(0,a.kt)("br",{parentName:"p"}),"\n","Download it from here ",(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/uk/database/technologies/instant-client/downloads.html"},"Oracle Client")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For Windows Machine")," - Place the extracted files in the following path of nodejs code   "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"node_modules/oracledb/build/Release/  ")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For Linux Machine")," - Place the extracted files in the lib folder in root path"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"/lib  ")),(0,a.kt)("h3",{id:"sample-crudoperations-class-that-uses-oracledb"},"Sample CrudOperations Class that uses oracledb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//The CRUD operations on a dummy user table\nconst oracledb = require('oracledb')\n\nclass CrudOperations {\n    constructor() {\n        this.connectionString = process.env.CONNECTION_STRING\n        this.username = process.env.USER_NAME\n        this.password = process.env.PASSWORD\n        this.options = { outFormat: oracledb.OBJECT }\n    }\n    \n    select(user) {}\n    insert(user) {}\n    update(user) {}\n    deleteOperation(user) {}\n}\n")),(0,a.kt)("h3",{id:"retreive"},"Retreive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const oracledb = require('oracledb')\n\nasync select(user) {\n    const connection = await oracledb.getConnection({\n      user: this.username,\n      password: this.password,\n      connectString: this.connectionString\n    })\n    const getSqlQuery = `SELECT * FROM dummyusertable \n                         WHERE email = '${user.email}'`\n    try {\n      console.log(getSqlQuery)\n      const result = await connection.execute(getSqlQuery, {}, this.options)\n      await connection.close()\n      return result.rows\n    } catch (error) {\n      console.log(error)\n      throw new Error(error)\n    }\n}\n")),(0,a.kt)("h3",{id:"insert-a-single-row"},"Insert a Single row"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const oracledb = require('oracledb')\n\nasync insert(user) {\n    const connection = await oracledb.getConnection({\n      user: this.username,\n      password: this.password,\n      connectString: this.connectionString\n    })\n    const opts = this.options\n    opts.autoCommit = true  \n    const binds = {}\n    \n    const insertSqlQuery = `INSERT INTO dummyusertable(\n                                  FIRST_NAME,\n                                  LAST_NAME,\n                                  EMAIL,\n                                  MODIFIED_TIMESTAMP\n                                ) \n                                VALUES(\n                                  '${user.first_name}',\n                                  '${user.last_name}',\n                                  '${user.email}',                                  \n                                  SYSDATE                                  \n                                )`\n    try {\n      console.log(insertSqlQuery)\n      const result = await connection.execute(insertSqlQuery, binds, opts)\n      await connection.close()\n      if (result.rowsAffected === 1) {\n        return `${user.email} creation successfull!`\n      } else {\n        throw new Error('Unable to create user!')\n      }\n    } catch (error) {\n      console.log(error)\n      throw new Error(error)\n    }\n}\n")),(0,a.kt)("h3",{id:"update"},"update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const oracledb = require('oracledb')\n\nasync update(user) {\n    const connection = await oracledb.getConnection({\n      user: this.username,\n      password: this.password,\n      connectString: this.connectionString\n    })\n    const opts = this.options\n    opts.autoCommit = true\n\n    const updateSqlQuery = `UPDATE dummyusertable SET first_name = 'asdf'\n                            WHERE email = '${user.email}'`\n    try {\n      console.log(updateSqlQuery)\n      const result = await connection.execute(updateSqlQuery, {}, opts)\n      await connection.close()\n      if (result.rowsAffected === 1) {\n        return `${user.email} status is updated successfully!`\n      } else {\n        throw new Error('Unable to update the status!')\n      }\n    } catch (error) {\n      console.log(error)\n      throw new Error(error)\n    }\n")),(0,a.kt)("h3",{id:"delete"},"Delete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const oracledb = require('oracledb')\n\nasync delete(user) {\n    const connection = await oracledb.getConnection({\n      user: this.username,\n      password: this.password,\n      connectString: this.connectionString\n    })\n    const opts = this.options\n    opts.autoCommit = true\n\n    const updateSqlQuery = 'DELETE FROM dummyusertable WHERE modified_timestamp <= TRUNC(SYSDATE) - 30'\n    try {\n      console.log(updateSqlQuery)\n      const result = await connection.execute(updateSqlQuery, {}, opts)\n      await connection.close()\n      return result\n    } catch (error) {\n      console.log(error)\n      throw new Error(error)\n    }\n  }\n}\n")))}p.isMDXComponent=!0}}]);
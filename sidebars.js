// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually  
  mySidebar: {    
    'Getting started': ['NodeJs/oops-in-js','NodeJs/array-funcs'],
    'CRUD Series': ['NodeJs/CRUD-Series/node-mongo-db', 'NodeJs/CRUD-Series/node-mysql-db', 'NodeJs/CRUD-Series/node-oracle-db']
  },
  aws: {    
    'SAA Certification': ['AWS/aws-saa'],
    'Cloudformation': ['AWS/cloudformation/aws-events-input']
  }
};

module.exports = sidebars;
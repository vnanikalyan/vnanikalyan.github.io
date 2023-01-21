// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually  
  mySidebar: {    
    'Getting started': ['NodeJs/oops-in-js','NodeJs/array-funcs'],
    'CRUD Series': ['NodeJs/CRUD-Series/node-mongo-db', 'NodeJs/CRUD-Series/node-mysql-db', 'NodeJs/CRUD-Series/node-oracle-db']
  },
  containers: {
    'Basics': ['Containers/container-basics'],
    'Custom Process': ['Containers/container-custom-process'],
    'Kubernetes': ['Containers/Kubernetes/kubernetes-jargon']
  },
  linux: {
    'Basics': ['Linux/linux-fundamentals'],
    'Hacking': ['Linux/hacking-tools']
    
  },
  aws: {
    'SAA Certification': ['AWS/aws-saa'],
    'Cloudformation': ['AWS/cloudformation/aws-events-input']
  }
};

module.exports = sidebars;
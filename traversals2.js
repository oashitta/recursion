const familyTree = {
  name: 'John',
  children: [
    {
      name: 'jim',
      children: []
    },
    {
      name: 'Jane',
      children: [
        {
          name: 'kyle',
          children: []
        },
        {
          name: 'sophia',
          children: []
        },
        {
          name: 'ben',
          children: [
            {name: 'frank',
          children:[]}
          ]
        }
      ]
    }
  ]
}

function printChildrenRecursive(t) {
  if (t.children.length === 0){
    return
  }
  t.children.forEach(child => {
    console.log(child.name)
    // recursively calling the child objects to print their children.
    printChildrenRecursive(child)
  })
}

console.log(printChildrenRecursive(familyTree))
// Task 5 - Two solutions is provided one "mercifull" and one "strict"
const hierarchy = {
    salesDepartment: {
        leader: {
            name: 'John Doe', wage: 700000,
            assistant: {
                name: 'Jane Doe', wage: 200000
            },
        },
        sellers: [{
            name: 'Maximillian Kuvi',
            wage: 300000
        },
        {
            name: 'Olav Ityr', wage: 330000
        },
        {
            name: 'Scot Sheila', wage: 380000
        },]
    }, techDepartment: {
        head: {
            name: 'Mats Eilert', wage: 800000,
            assistant: {
                name: 'Karina Boury', wage: 360000,
                HRContact: {
                    name: 'Johan Rufus', wage: 460000
                }
            },
        },
        developers: [{
            name: 'Hagop Darren',
            wage: 340000
        },
        {
            name: 'Fredrik Sverre', wage: 430000
        },
        {
            name: 'Crystal Manolo', wage: 680000
        }]
    }
}

const findEmployeMercifull = (name = "") => {
    // Since this solution is "mercifull" i sat the default value of the argument to an empty string
    const findings = []

    const employeSearch = (searchObject) => {
        // For loop through the hierarcyObject.
        for (prop in searchObject) {
            // If the property is name get the name
            if (prop === 'name') {
                // This is a "mercifull" function so we use "includes" to allow som space mistyping 
                // And weusing toLowerCase to allow "random" capitalisation of the name in the search
                if (searchObject[prop].toLowerCase().includes(name.toLowerCase())) {
                    const { name, wage } = searchObject
                    empolye = { name, wage }
                    findings.push(empolye)
                }
                // If the property is an object send it through the function again.
            } else if (typeof searchObject[prop] === 'object') {
                employeSearch(searchObject[prop])
            }
        }
    }
    employeSearch(hierarchy)
    // console.log(findings)
    return findings
}


const findEmployeStrict = (name) => {
    let employeFindings
    const employeSearch = (searchObject) => {
        // For loop through the object.
        for (prop in searchObject) {
            // If the property is name get the name.
            if (prop === 'name') {
                // Since this function is more "strict" we construct this function to not allow misspelling 
                // in the input or wrong capitalization of the name
                if (searchObject[prop] === name) {
                    const { name, wage } = searchObject
                    employeFindings = { name, wage }
                    return employeFindings
                }
                // If the property is an object send it through the function again.
            } else if (typeof searchObject[prop] === 'object') {
                employeSearch(searchObject[prop])
            }
        }
    }
    employeSearch(hierarchy)
    // console.log(employeFindings)
    return employeFindings
}

findEmployeMercifull("Doe")
findEmployeStrict("John Doe")
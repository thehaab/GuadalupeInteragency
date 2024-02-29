
const contactsStr = [
        {
         "Last Name": "Benavides",
         "First Name": "Druann",
         "Organization": "Texas A&M AgriLIfe Extension",
         "Email": "dru.benavides@ag.tamu.edu",
         "Phone Number ": "830-303-3889"
        },
        {
         "Last Name": "Anderson",
         "First Name": "Loralyn",
         "Organization": "Maximus\/ Outreach THSteps Texas Star Program",
         "Email": "loralynanderson@maximus.com",
         "Phone Number ": "210"
        },
        {
         "Last Name": "Eberhard",
         "First Name": "Katarina",
         "Organization": "San Antonio Council on Alcohol and Drug Awareness",
         "Email": "keberhard@sacada.org",
         "Phone Number ": "2102254741" 
        },
        {
         "Last Name": "Driffill",
         "First Name": "Lisa",
         "Organization": "Communities in Schools of South Central Texas",
         "Email": "ldriffill@cissct.org",
         "Phone Number ": "8306204247 x220"
        },
        {
         "Last Name": "Cloud",
         "First Name": "LeeAnn",
         "Organization": "Communities in Schools of South Central Texas",
         "Email": "lcloud@cissct.org"
        },
        {
         "Last Name": "Wetz",
         "First Name": "Susan",
         "Organization": "Communities in Schools of South Central Texas",
         "Email": "swetz@cissct.org"
        },
        {
         "Last Name": "Cantu",
         "First Name": "Julie",
         "Organization": "Community Council of South Central Texas",
         "Email": "jcantu@ccsct.org",
         "Phone Number ": "830-327-4194"
        },
        {
         "Last Name": "Krueger",
         "First Name": "Christina",
         "Organization": "Seguin Family Health Center",
         "Email": "ckrueger@chcsct.com",
         "Phone Number ": "830-379-9797 x 6612"
        },
        {
         "Last Name": "Meyers",
         "First Name": "Danna",
         "Organization": "Methodist Healthcare Ministries",
         "Email": "dmeyers@mhm.org",
         "Phone Number ": "830-379-4112x306"
        },
        {
         "Last Name": "Weyland",
         "First Name": "Barbara",
         "Organization": "RSVP of South Central Texas",
         "Email": "830-379-0300"
        },
        {
         "Last Name": "Waters",
         "First Name": "Melissa",
         "Organization": "The Salvation Army Seguin ",
         "Email": "melissa.waters@uss.salvationarmy.org",
         "Phone Number ": "830-556-7361 personal cell"
        },
        {
         "Last Name": "Laubach",
         "First Name": "Donna",
         "Organization": "South Tx Pregnancy Care Center",
         "Email": "dlaubach@southtxpcc.com",
         "Phone Number ": "210-854-3113 personal cell"
        },
        {
         "Last Name": "Vinson",
         "First Name": "Barbara",
         "Organization": "NAMI Guadalupe County",
         "Email": "bvinsonnamigc@gmail.com",
         "Phone Number ": "512-585-8968"
        },
        {
         "Last Name": "Beasley",
         "First Name": "Jenny",
         "Organization": "Artable Curiosities",
         "Email": "info@artablecuriosities.com",
         "Phone Number ": "830-340-1067"
        },
        {
         "Last Name": "Norman",
         "First Name": "Eric",
         "Organization": "Community Cycles Seguin",
         "Email": "eric@communitycyclesseguin.org",
         "Phone Number ": "830-308-7768"
        },
        {
         "Last Name": "Anderson",
         "First Name": "Joanne",
         "Organization": "WIC",
         "Email": "JAnderson@sanmarcostx.gov",
         "Phone Number ": "512-393-8040 option 5"
        },
        {
         "Last Name": "Torres",
         "First Name": "Kennya",
         "Organization": "Any Baby Can",
         "Email": "ktorres@abcsa.org"
        },
        {
         "Last Name": "Sparks",
         "First Name": "Megan",
         "Organization": "Any Baby Can",
         "Email": "msparks@abcsa.org"
        },
        {
         "Last Name": "Church",
         "First Name": "Travis",
         "Organization": "Community Cycles Seguin",
         "Email": "thehaab@gmail.com",
         "Phone Number ": "8134096131"
        },
        {
         "Last Name": "Silvius",
         "First Name": "Pete",
         "Organization": "Seguin ISD",
         "Email": "psilvius@seguin.k12.tx.us",
         "Phone Number ": "830-556-6045"
        },
        {
         "Last Name": "Hall",
         "First Name": "Kara",
         "Organization": "Seguin ISD Nursing Dept",
         "Email": "kmhall@seguin.k12.tx.us",
         "Phone Number ": "830-401-8718"
        },
        {
         "Last Name": "Marshall",
         "First Name": "Debbie",
         "Organization": "Community Health Centers Scentral Texas",
         "Email": "dmarshall@chcsct.com",
         "Phone Number ": "713.724.4889"
        },
        {
         "Last Name": "Villa",
         "First Name": "Dalia",
         "Organization": "Bluebonnet Trails Community Services",
         "Email": "dalia.villa@bbtrails.org",
         "Phone Number ": "830-837-3856"
        },
        {
         "Last Name": "Jabsen",
         "First Name": "Mara",
         "Organization": "Bluebonnet Trails Community Services",
         "Email": "mara.jabsen@bbtrails.org",
         "Phone Number ": "830.262.1219"
        },
        {
         "Last Name": "Meehan",
         "First Name": "Michele",
         "Organization": "Guadalupe County Children's Advocacy Center",
         "Email": "mmeehan@gccac.net",
         "Phone Number ": "830-303-4760"
        },
        {
         "Last Name": "Dimitri",
         "First Name": "Jade",
         "Organization": "CASA of Central Texas",
         "Email": "jdimitri@casacentex.org",
         "Phone Number ": "830-837-3026"
        },
        {
         "Last Name": "Adamez",
         "First Name": "Alma",
         "Organization": "Community Council of South Central Texas",
         "Email": "aadamez@ccsct.org",
         "Phone Number ": "830-253-4504"
        },
        {
         "Last Name": "Flores",
         "First Name": "Daniela",
         "Organization": "Community Council of South Central Texas",
         "Email": "Dflores@ccsct.org",
         "Phone Number ": "830-303-4376"
        },
        {
         "Last Name": "Harper",
         "First Name": "Tom",
         "Organization": "SACADA",
         "Email": "tharper@sacada.org",
         "Phone Number ": "210.225.4741"
        },
        {
         "Last Name": "Damerau",
         "First Name": "Gail",
         "Organization": "Guadalupe County Fair Association",
         "Email": "gcfairoffice@gmail.com",
         "Phone Number ": "830-914-3735"
        },
        {
         "Last Name": "Huizar",
         "First Name": "Brianne",
         "Organization": "San Antonio Council on Alcohol and Drug Awareness",
         "Email": "bhuizar@sacada.org",
         "Phone Number ": "210-225-4741"
        },
        {
         "Last Name": "Dyess",
         "First Name": "Jim",
         "Organization": "Community Cycles Seguin",
         "Email": "jimd@communitycyclesseguin.org",
         "Phone Number ": "713\/206-6218"
        },
        {
         "Last Name": "Bushnell",
         "First Name": "John",
         "Organization": "NAMI Guadalupe County",
         "Email": "bushnell@namiguadalupecounty.org"
        },
        {
         "Last Name": "Lumpkin",
         "First Name": "Brianne",
         "Organization": "Guadalupe County Sheriff's Office",
         "Email": "brian.lumpkin@co.guadalupe.tx.us",
         "Phone Number ": "512-203-4475"
        },
        {
         "Last Name": "Dillon",
         "First Name": "D. Blake",
         "Organization": "National Guard- Drug Demand Recution Outreach",
         "Email": "david.b.dillon2.mil@army.mil"
        },
        {
         "Last Name": "Ortiz",
         "First Name": "Zoey",
         "Organization": "National Guard- Drug Demand Recution Outreach",
         "Email": "zoey.l.ortiz.mil@army.mil"
        },
        {
         "Last Name": "Hart",
         "First Name": "Amy",
         "Organization": "TLU Campus Executive & Asst. Dir of Nursing",
         "Email": "ahart@tlu.edu"
        },
        {
         "Last Name": "Ricker",
         "First Name": "David",
         "Organization": "Communities in Schools of South Central Texas",
         "Email": "dricker@cissct.org"
        },
        {
         "Last Name": "Gutierrez",
         "First Name": "Jesikah",
         "Organization": "Connections Coalition Coordinator",
         "Email": "jgutierrez@connectionsifs.org"
        }
       
];

const contacts = contactsStr.map(contact => {
    return {
        name: `${contact['First Name']} ${contact['Last Name']}`,
        email: contact['Email'],
        phone: contact['Phone Number '] || 'N/A',
        organization: contact['Organization']
    };
});

// display list of unique organization names, ommitting duplicates, and diplay the contacts under each organization
// Get unique organization names
const uniqueOrganizations = [...new Set(contacts.map(contact => contact.organization))];

// Sort unique organizations alphabetically
uniqueOrganizations.sort();

const organizationList = document.getElementById('organization-list');

// Iterate through unique organizations
uniqueOrganizations.forEach(organization => {
    // Create a list item for each organization
    const orgListItem = document.createElement('li');
    orgListItem.innerHTML = `
        <h2>${organization}</h2>
    `;
    organizationList.appendChild(orgListItem);

    // Filter contacts for the current organization
    const contactsForOrganization = contacts.filter(contact => contact.organization === organization);

    // Create a list to display contacts under the organization
    const contactList = document.createElement('ul');
    orgListItem.appendChild(contactList);

    // Iterate through contacts for the current organization
    contactsForOrganization.forEach(contact => {
        const contactListItem = document.createElement('li');
        contactListItem.innerHTML = `
            <table>
                <tr>
                    <th>${contact.name}</th>
                </tr>
                <tr>
                    <td>Email: <a href="mailto:${contact.email}"> ${contact.email}</a></td>
                </tr>
                <tr>
                    <td>Phone: ${contact.phone}</td>
                </tr>
            </table>
        `;
        contactList.appendChild(contactListItem);
    });
});

// Create a search input field
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search contacts...');
document.body.insertBefore(searchInput, organizationList);

// Add event listener for the search input
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    // Clear previous search results
    organizationList.innerHTML = '';

    // Filter contacts based on search value and display results
    uniqueOrganizations.forEach(organization => {
        const contactsForOrganization = contacts.filter(contact => contact.organization === organization && contact.name.toLowerCase().includes(searchValue));

        if (contactsForOrganization.length > 0) {
            const orgListItem = document.createElement('li');
            orgListItem.innerHTML = `
                <h2>${organization}</h2>
            `;
            organizationList.appendChild(orgListItem);

            const contactList = document.createElement('ul');
            orgListItem.appendChild(contactList);

            contactsForOrganization.forEach(contact => {
                const contactListItem = document.createElement('li');
                contactListItem.innerHTML = `
                    <table>
                        <tr>
                            <th>${contact.name}</th>
                        </tr>
                        <tr>
                        <td>Email: <a href="mailto:${contact.email}"> ${contact.email}</a></td>
                        </tr>
                        <tr>
                            <td>Phone: ${contact.phone}</td>
                        </tr>
                    </table>
                `;
                contactList.appendChild(contactListItem);
            });
        }
    });
});

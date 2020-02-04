
const api_response = [
    {
        "FormID": 2,
        "FieldID": 1,
        "ClientFormName": "Soil Density",
        "FieldOrder": 1,
        "FormGroupId": 1,
        "FieldDataType": "DATE",
        "PickList": "NULL",
        "GhostText": "date tested",
        "FieldChars": 50,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "FieldName": "Date Tested",
        "Units": "dd/mm/yy",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "07/09/2019"
    },
    {
        "FormID": 2,
        "FieldID": 2,
        "ClientFormName": "Soil Density",
        "FieldOrder": 2,
        "FormGroupId": 1,
        "FieldDataType": "ARRAY",
        "PickList": "1.3|2.5|3.7",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "FieldName": "Gauge Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 0,
        "FieldValue": 1.3
    },
    {
        "FormID": 2,
        "FieldID": 3,
        "ClientFormName": "Soil Density",
        "FieldOrder": 3,
        "FormGroupId": 1,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 50,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "FieldName": "Density Standart",
        "Units": "",
        "ShowInApp": 1,
        "Required": 0,
        "FieldValue": "Some Density Standart"
    },
    {
        "FormID": 2,
        "FieldID": 4,
        "ClientFormName": "Soil Density",
        "FieldOrder": 4,
        "FormGroupId": 1,
        "FieldDataType": "FORM SELECT",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 25,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "FieldName": "Density Shots",
        "Units": "",
        "ShowInApp": 1,
        "Required": 0,
        "FieldValue": ""
    },
    {
        "FormID": 3,
        "FieldID": 1,
        "ClientFormName": " Density Shot",
        "FieldOrder": 1,
        "FormGroupId": 1,
        "FieldDataType": "ARRAY",
        "PickList": "Proctor 1|Proctor 2|Proctor 3",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Proctor",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Proctor"
    },
    {
        "FormID": 3,
        "FieldID": 2,
        "ClientFormName": "Density Shot",
        "FieldOrder": 2,
        "FormGroupId": 1,
        "FieldDataType": "ARRAY",
        "PickList": "A|B|C|D",
        "GhostText": "",
        "FieldChars": "NULL",
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Spec Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "D"
    },  
    {
        "FormID": 3,
        "FieldID": 3,
        "ClientFormName": "Density Shot",
        "FieldOrder": 3,
        "FormGroupId": 1,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 15,
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Test Location",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Somewhere there"
    },
    {
        "FormID": 3,
        "FieldID": 1,
        "ClientFormName": " Density Shot",
        "FieldOrder": 1,
        "FormGroupId": 2,
        "FieldDataType": "ARRAY",
        "PickList": "Proctor 1|Proctor 2|Proctor 3",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Proctor",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Proctor"
    },
    {
        "FormID": 3,
        "FieldID": 2,
        "ClientFormName": "Density Shot",
        "FieldOrder": 2,
        "FormGroupId": 2,
        "FieldDataType": "ARRAY",
        "PickList": "A|B|C|D",
        "GhostText": "",
        "FieldChars": "NULL",
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Spec Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "D"
    },
    {
        "FormID": 3,
        "FieldID": 3,
        "ClientFormName": "Density Shot",
        "FieldOrder": 3,
        "FormGroupId": 2,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 15,
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Test Location",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Somewhere there"
    },
    {
        "FormID": 3,
        "FieldID": 1,
        "ClientFormName": " Density Shot",
        "FieldOrder": 1,
        "FormGroupId": 3,
        "FieldDataType": "ARRAY",
        "PickList": "Proctor 1|Proctor 2|Proctor 3",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Proctor",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Proctor"
    },
    {
        "FormID": 3,
        "FieldID": 2,
        "ClientFormName": "Density Shot",
        "FieldOrder": 2,
        "FormGroupId": 3,
        "FieldDataType": "ARRAY",
        "PickList": "A|B|C|D",
        "GhostText": "",
        "FieldChars": "NULL",
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Spec Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "D"
    },
    {
        "FormID": 3,
        "FieldID": 3,
        "ClientFormName": "Density Shot",
        "FieldOrder": 3,
        "FormGroupId": 3,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 15,
        "ParentFormId": "2",
        "ParentFieldId": "4",
        "FieldName": "Test Location",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Somewhere there"
    }
]



api_response.forEach((row)=>{
    if (row.FormID === 2) {

    }
});

// form name
const formName = api_response[0].ClientFormName;
$('#ID2-form-name').append(`
        <h3>${formName}</h3>
        `);


// form data level 2
const form2data = api_response.filter(row => row.FormID === 2);
form2data.forEach(row => {
    $('#form-2-container').append(`
        ${row.FieldName}<br/>
        <input type="text" name=${row.FieldName} placeholder=${row.GhostText} />
        <br/>
    `);
    console.log(row.GhostText); 
}) 



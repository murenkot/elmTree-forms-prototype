
// const api_response = [
//     {
//         "FormId": 2,
//         "FieldId": 1,
//         "ClientFormName": "Soil Density",
//         "FieldOrder": 1,
//         "FormGroupId": 1,
//         "FieldDataType": "DATE",
//         "PickList": "NULL",
//         "GhostText": "date tested",
//         "FieldChars": 50,
//         "ParentFormId": "NULL",
//         "ParentFieldId": "NULL",
//         "ParentGroupId": 'NULL',
//         "SuperParentFieldId": "NULL",
//         "FieldName": "Date Tested",
//         "Units": "dd/mm/yy",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "07/09/2019"
//     },
//     {
//         "FormId": 2,
//         "FieldId": 2,
//         "ClientFormName": "Soil Density",
//         "FieldOrder": 2,
//         "FormGroupId": 1,
//         "FieldDataType": "ARRAY",
//         "PickList": "1.3|2.5|3.7",
//         "GhostText": "enter guaged number",
//         "FieldChars": "NULL",
//         "ParentFormId": "NULL",
//         "ParentFieldId": "NULL",
//         "ParentGroupId": 'NULL',
//         "SuperParentFieldId": "NULL",
//         "FieldName": "Gauge Number",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 0,
//         "FieldValue": 1.3
//     },
//     {
//         "FormId": 2,
//         "FieldId": 3,
//         "ClientFormName": "Soil Density",
//         "FieldOrder": 3,
//         "FormGroupId": 1,
//         "FieldDataType": "STRING",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": 50,
//         "ParentFormId": "NULL",
//         "ParentFieldId": "NULL",
//         "ParentGroupId": 'NULL',
//         "SuperParentFieldId": "NULL",
//         "FieldName": "Density Standart",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 0,
//         "FieldValue": "Some Density Standart"
//     },
//     {
//         "FormId": 2,
//         "FieldId": 4,
//         "ClientFormName": "Soil Density",
//         "FieldOrder": 4,
//         "FormGroupId": 1,
//         "FieldDataType": "FORM SELECT",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": 25,
//         "ParentFormId": "NULL",
//         "ParentFieldId": "NULL",
//         "ParentGroupId": 'NULL',
//         "SuperParentFieldId": "NULL",
//         "FieldName": "Density Shots",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 0,
//         "FieldValue": ""
//     },
//     {
//         "FormId": 3,
//         "FieldId": 1,
//         "ClientFormName": " Density Shot",
//         "FieldOrder": 1,
//         "FormGroupId": 1,
//         "FieldDataType": "ARRAY",
//         "PickList": "Proctor 1|Proctor 2|Proctor 3",
//         "GhostText": "enter guaged number",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Proctor",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "Proctor"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 2,
//         "ClientFormName": "Density Shot",
//         "FieldOrder": 2,
//         "FormGroupId": 1,
//         "FieldDataType": "ARRAY",
//         "PickList": "A|B|C|D",
//         "GhostText": "",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Spec Number",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "D"
//     },  
//     {
//         "FormId": 3,
//         "FieldId": 3,
//         "ClientFormName": "Density Shot",
//         "FieldOrder": 3,
//         "FormGroupId": 1,
//         "FieldDataType": "STRING",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": 15,
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Test Location",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "Somewhere there"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 4,
//         "ClientFormName": "Soil Density",
//         "FieldOrder": 4,
//         "FormGroupId": 1,
//         "FieldDataType": "FORM SELECT",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Baby T Button",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": ""
//     },
//     {
//         "FormId": 3,
//         "FieldId": 1,
//         "ClientFormName": " Density Shot",
//         "FieldOrder": 1,
//         "FormGroupId": 2,
//         "FieldDataType": "ARRAY",
//         "PickList": "Proctor 1|Proctor 2|Proctor 3",
//         "GhostText": "enter guaged number",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Proctor",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "Proctor"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 2,
//         "ClientFormName": "Density Shot",
//         "FieldOrder": 2,
//         "FormGroupId": 2,
//         "FieldDataType": "ARRAY",
//         "PickList": "A|B|C|D",
//         "GhostText": "",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Spec Number",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "D"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 3,
//         "ClientFormName": "Density Shot",
//         "FieldOrder": 3,
//         "FormGroupId": 2,
//         "FieldDataType": "STRING",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": 15,
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Test Location",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "Somewhere there"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 1,
//         "ClientFormName": " Density Shot",
//         "FieldOrder": 1,
//         "FormGroupId": 3,
//         "FieldDataType": "ARRAY",
//         "PickList": "Proctor 1|Proctor 2|Proctor 3",
//         "GhostText": "enter guaged number",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Proctor",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "Proctor"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 2,
//         "ClientFormName": "Density Shot",
//         "FieldOrder": 2,
//         "FormGroupId": 3,
//         "FieldDataType": "ARRAY",
//         "PickList": "A|B|C|D",
//         "GhostText": "",
//         "FieldChars": "NULL",
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Spec Number",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "D"
//     },
//     {
//         "FormId": 3,
//         "FieldId": 3,
//         "ClientFormName": "Density Shot",
//         "FieldOrder": 3,
//         "FormGroupId": 3,
//         "FieldDataType": "STRING",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": 15,
//         "ParentFormId": 2,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "Test Location",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "Somewhere there"
//     },  {
//         "FormId": 4,
//         "FieldId": 1,
//         "ClientFormName": "Baby T",
//         "FieldOrder": 1,
//         "FormGroupId": 1,
//         "FieldDataType": "STRING",
//         "PickList": "NULL",
//         "GhostText": "",
//         "FieldChars": 2,
//         "ParentFormId": 3,
//         "ParentFieldId": 4,
//         "ParentGroupId": 1,
//         "SuperParentFieldId": 2,
//         "FieldName": "I'm 3 layers deep",
//         "Units": "",
//         "ShowInApp": 1,
//         "Required": 1,
//         "FieldValue": "She's the best"
//     },

// ]


const api_response = [
    {
       "jobDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "tasks":[
          
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":1,
                "Title":"Date Tested",
                "DataType":"DATE",
                "Chars":50,
                "Required":1,
                "JobId":1,
                "FormId":2,
                "GhostText":"date tested",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"dd/mm/yyyy",
                "TaskId":1,
                "FieldValue":"07/19/1974",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":2,
                "Title":"Gauge Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":0,
                "JobId":1,
                "FormId":2,
                "GhostText":"enter guage number",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":1,
                "FieldValue":"1.3",
                "PickList":"1.3|2.5|3.7",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":3,
                "Title":"Density Standard",
                "DataType":"STRING",
                "Chars":50,
                "Required":1,
                "JobId":1,
                "FormId":2,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":1,
                "FieldValue":"Density Standard Value",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":4,
                "Title":"Density Shots",
                "DataType":"FORM SELECT",
                "Chars":25,
                "Required":1,
                "JobId":1,
                "FormId":2,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":1,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":1,
                "Title":"Proctor",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"Proctor 1",
                "PickList":"Proctor 1|Proctor 2|Proctor 3",
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":2,
                "Title":"Spec Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"A",
                "PickList":"A|B|C|D",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":3,
                "Title":"Test Location",
                "DataType":"STRING",
                "Chars":15,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"This was a great 1st shot",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":4,
                "Title":"Baby T Button",
                "DataType":"FORM SELECT",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"units",
                "TaskId":1,
                "FieldValue":"I love Tanya",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"She is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":1,
                "Title":"Proctor",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"Proctor 2",
                "PickList":"Proctor 1|Proctor 2|Proctor 3",
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":2,
                "Title":"Spec Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"B",
                "PickList":"A|B|C|D",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":3,
                "Title":"Test Location",
                "DataType":"STRING",
                "Chars":15,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"This was a great 2nd shot",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":4,
                "Title":"Baby T Button",
                "DataType":"FORM SELECT",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"units",
                "TaskId":1,
                "FieldValue":"More subform pre-filled data",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"",
                "TaskId":1,
                "FieldValue":"It is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"units",
                "TaskId":1,
                "FieldValue":"More subform pre-filled data",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"",
                "TaskId":1,
                "FieldValue":"It is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":2
             },
          
          
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":1,
                "Title":"Date Tested",
                "DataType":"DATE",
                "Chars":50,
                "Required":1,
                "JobId":1,
                "FormId":2,
                "GhostText":"date tested",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"dd/mm/yyyy",
                "TaskId":2,
                "FieldValue":"07/19/1974",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":2,
                "Title":"Gauge Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":0,
                "JobId":1,
                "FormId":2,
                "GhostText":"enter guage number",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":2,
                "FieldValue":"1.3",
                "PickList":"1.3|2.5|3.7",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":3,
                "Title":"Density Standard",
                "DataType":"STRING",
                "Chars":50,
                "Required":1,
                "JobId":1,
                "FormId":2,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":2,
                "FieldValue":"Density Standard Value",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":4,
                "Title":"Density Shots",
                "DataType":"FORM SELECT",
                "Chars":25,
                "Required":1,
                "JobId":1,
                "FormId":2,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":2,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":1,
                "Title":"Proctor",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"Proctor 1",
                "PickList":"Proctor 1|Proctor 2|Proctor 3",
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":2,
                "Title":"Spec Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"A",
                "PickList":"A|B|C|D",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":3,
                "Title":"Test Location",
                "DataType":"STRING",
                "Chars":15,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"This was a great 1st shot",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":4,
                "Title":"Baby T Button",
                "DataType":"FORM SELECT",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"units",
                "TaskId":2,
                "FieldValue":"I love Tanya",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"She is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":1,
                "Title":"Proctor",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"Proctor 2",
                "PickList":"Proctor 1|Proctor 2|Proctor 3",
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":2,
                "Title":"Spec Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"B",
                "PickList":"A|B|C|D",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":3,
                "Title":"Test Location",
                "DataType":"STRING",
                "Chars":15,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"This was a great 2nd shot",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":4,
                "Title":"Baby T Button",
                "DataType":"FORM SELECT",
                "Chars":null,
                "Required":1,
                "JobId":1,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":2,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"units",
                "TaskId":2,
                "FieldValue":"More subform pre-filled data",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"",
                "TaskId":2,
                "FieldValue":"It is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"units",
                "TaskId":2,
                "FieldValue":"More subform pre-filled data",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":1,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"",
                "TaskId":2,
                "FieldValue":"It is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":2
             }
          
       ],
       "jobName":"Placeholder Job Name 1",
       "jobId":1
    },
    {
       "jobDescription":"Placeholder Job Description 2",
       "tasks":[
          
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":1,
                "Title":"Date Tested",
                "DataType":"DATE",
                "Chars":50,
                "Required":1,
                "JobId":2,
                "FormId":2,
                "GhostText":"date tested",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"dd/mm/yyyy",
                "TaskId":1,
                "FieldValue":"07/19/1974",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":2,
                "Title":"Gauge Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":0,
                "JobId":2,
                "FormId":2,
                "GhostText":"enter guage number",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":1,
                "FieldValue":"1.3",
                "PickList":"1.3|2.5|3.7",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":3,
                "Title":"Density Standard",
                "DataType":"STRING",
                "Chars":50,
                "Required":1,
                "JobId":2,
                "FormId":2,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":1,
                "FieldValue":"Density Standard Value",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Soil Density",
                "ParentFormId":null,
                "FieldOrder":4,
                "Title":"Density Shots",
                "DataType":"FORM SELECT",
                "Chars":25,
                "Required":1,
                "JobId":2,
                "FormId":2,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":null,
                "ParentGroupId":null,
                "Units":"",
                "TaskId":1,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":1,
                "Title":"Proctor",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"Proctor 1",
                "PickList":"Proctor 1|Proctor 2|Proctor 3",
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":2,
                "Title":"Spec Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"A",
                "PickList":"A|B|C|D",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":3,
                "Title":"Test Location",
                "DataType":"STRING",
                "Chars":15,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"This was a great 1st shot",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":4,
                "Title":"Baby T Button",
                "DataType":"FORM SELECT",
                "Chars":null,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":2,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"units",
                "TaskId":1,
                "FieldValue":"I love Tanya",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":2,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"She is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":1,
                "Title":"Proctor",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"Proctor 2",
                "PickList":"Proctor 1|Proctor 2|Proctor 3",
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":2,
                "Title":"Spec Number",
                "DataType":"ARRAY",
                "Chars":null,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"B",
                "PickList":"A|B|C|D",
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":3,
                "Title":"Test Location",
                "DataType":"STRING",
                "Chars":15,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"This was a great 2nd shot",
                "PickList":null,
                "FieldId":3,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Density Shot",
                "ParentFormId":2,
                "FieldOrder":4,
                "Title":"Baby T Button",
                "DataType":"FORM SELECT",
                "Chars":null,
                "Required":1,
                "JobId":2,
                "FormId":3,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":1,
                "Units":"",
                "TaskId":1,
                "FieldValue":"",
                "PickList":null,
                "FieldId":4,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":2,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"units",
                "TaskId":1,
                "FieldValue":"More subform pre-filled data",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":2,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"",
                "TaskId":1,
                "FieldValue":"It is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":1
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":1,
                "Title":"Check Me Out",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":2,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"units",
                "TaskId":1,
                "FieldValue":"More subform pre-filled data",
                "PickList":null,
                "FieldId":1,
                "ShowInApp":1,
                "FormGroupId":2
             },
             {
                "FormName":"Baby T",
                "ParentFormId":3,
                "FieldOrder":2,
                "Title":"Im three layers deep",
                "DataType":"STRING",
                "Chars":2,
                "Required":1,
                "JobId":2,
                "FormId":4,
                "GhostText":"",
                "CustomerId":1,
                "ParentFieldId":4,
                "ParentGroupId":2,
                "Units":"",
                "TaskId":1,
                "FieldValue":"It is the best",
                "PickList":null,
                "FieldId":2,
                "ShowInApp":1,
                "FormGroupId":2
             }
          
       ],
       "jobName":"PLaceholder Job Name",
       "jobId":2
    }
 ]




// retrive data for a particular form to separate dataset
// const getDataSet = (FormId, FormGroupId, ParentGroupId, ParentFieldId) => {
//     let dataSet = api_response.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId && row.ParentFieldId === ParentFieldId && row.ParentGroupId === ParentGroupId);
//     return dataSet;
// };

// // get title of particular form
// const getTitle = (FormId, FormGroupId, ParentGroupId, ParentFieldId) => {
//     let dataSet = api_response.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId && row.ParentFieldId === ParentFieldId && row.ParentGroupId === ParentGroupId);
//     let title = dataSet[0].FormName;
//     return title;
// }

// const getFormDataSet = (FormId, FormGroupId, ParentFormId, ParentFieldId) => {
//     let dataSet = api_response.filter(row => 
//         row.FormId === FormId 
//         && row.FormGroupId === FormGroupId 
//         && row.ParentFormId === ParentFormId
//         && row.ParentFieldId === ParentFieldId
//         );
//     return [...dataSet];
// }

// const getRowData = (FormId, FormGroupId, ParentFormId, ParentFieldId, FieldId) => {
//     let dataSet = api_response.filter(row => 
//         row.FormId === FormId 
//         && row.FormGroupId === FormGroupId 
//         && row.ParentFormId === ParentFormId
//         && row.ParentFieldId === ParentFieldId
//         && row.FieldId === FieldId
//         );
//     return [...dataSet];
// }



const testInput = () => {
    console.log("something is changing");
}






/* RECURRING METHODS AND GLOBAL VARIABLES */
// retrive data for a particular form to separate dataset

// current task Id
var currentTaskId = '';

// here we'll store a sequence of open subforms so we can go back 
const formHistory = {};

// this list stores all section form Id in format "form-1-2" where 1 is FormId and 2 is FormGroupId. 
const sectionIdList = {};

let taskDataSet = [];

const setTaskDataSet = (TaskId) => {
    taskDataSet = job.tasks.filter(row => row.TaskId === TaskId);
    currentTaskId = TaskId;
}


const getDataSet = (FormId, FormGroupId, ParentGroupId, ParentFieldId) => {
    let dataSet = taskDataSet.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId && row.ParentFieldId === ParentFieldId && row.ParentGroupId === ParentGroupId);
    return dataSet;
};

// get title of particular form
const getTitle = (FormId, FormGroupId, ParentGroupId, ParentFieldId) => {
    let dataSet = taskDataSet.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId && row.ParentFieldId === ParentFieldId && row.ParentGroupId === ParentGroupId);
    let title = dataSet[0].FormName;
    return title;
}

const getFormDataSet = (FormId, FormGroupId, ParentFormId, ParentFieldId) => {
    let dataSet = taskDataSet.filter(row => 
        row.FormId === FormId 
        && row.FormGroupId === FormGroupId 
        && row.ParentFormId === ParentFormId
        && row.ParentFieldId === ParentFieldId
        );
    return [...dataSet];
}


const getRowData = (dataSet, FieldId) => {
    let row = dataSet.filter(row => row.FieldId === FieldId);
    return row;
}

const updateRow = (dataSet, FieldId, val) => {
    let row = dataSet.filter(row => row.FieldId === FieldId);
    row.FieldValue = val;   
} 

// set current form 
const setCurrentForm = (FormId, FormGroupId, ParentGroupId, ParentFieldId) => {
    currentForm.FormId = FormId;
    currentForm.FormGroupId = FormGroupId;
    currentForm.ParentFieldId = ParentFieldId;
    currentForm.ParentGroupId = ParentGroupId;
}

const setChildForm = (FormId, FormGroupId, ParentGroupId, ParentFieldId) => {
    childForm.FormId = FormId;
    childForm.FormGroupId = FormGroupId;
    childForm.ParentFieldId = ParentFieldId;
    childForm.ParentGroupId = ParentGroupId;
}

const setVisibleForm = (sectionId) => {
    visibleForm.sectionId = sectionId
}

const setParentForm = (currentSectionId) => {
    currentFormId = Number(currentSectionId.split('-')[1]);
    currentFormGroupId = Number(currentSectionId.split('-')[2]);
    currentParentGroupId = Number(currentSectionId.split('-')[3]);
    currentParentFieldId = Number(currentSectionId.split('-')[4]);

    let first_row = taskDataSet.filter(row => row.FormId === currentFormId && row.FormGroupId === currentFormGroupId && row.ParentGroupId === currentParentGroupId && row.ParentFieldId === currentParentFieldId )[0];
    FormId = first_row.ParentFormId;
    FormGroupId = currentParentGroupId;

    parentParentFieldId = first_row.ParentFieldId;
    
    parentForm.sectionId = 'form-' + parentFormId + '-' + parentFormGroupId;
}


// global variables:
const parentForm = {
    FormId: '',
    FormGroupId: '',
    ParentFieldId: '',
    ParentGroupId: '',
    sectionId: '',
    dataSet: getDataSet( this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId),
    };

const currentForm = {
    FormId: 2,
    FormGroupId: 1,
    ParentFieldId: 'NULL',
    ParentGroupId: 'NULL',
    // dataSet: function() { return api_response.filter(row => row.FormId === this.FormId && row.FormGroupId === this.FormGroupId)},
    dataSet: function() {return getDataSet(this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId)},
    title: function() {return getTitle(this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId)},
};

const childForm = {
    FormId: '',
    FormGroupId: '',
    ParentFieldId: '',
    ParentGroupId: '',
    dataSet: function() {return getDataSet(this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId)},
    title: function() {return getTitle(this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId)},
    };

const visibleForm = {
    FormId: '',
    FormGroupId: '',
    ParentFieldId: '',
    ParentGroupId: '',
    // sectionId: function() {return "form-" + this.FormId + "-" + this.FormGroupId},
    sectionId: '',
    dataSet: function() {return getDataSet(this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId)},
    title: function() {return getTitle(this.FormId, this.FormGroupId, this.ParentGroupId, this.ParentFieldId)},
}









/* INITIAL SETUP */
// build a job page (for this exemple we use just first job):
const job = api_response[0];
$('body').append(`
    <section id="job-${job.jobId}">
        <div class="form-name flex-container">
            <h3>${job.jobName}</h3>
        </div>
        <p>${job.jobDescription}</p>
        <div class="tasks-preview-container"></div>
    </section>
`)

// NOTE add preview for each tast
const taskIdList = [];

// task title is the name of the parent form. parent form is a form where ParentFieldId == null and ParentGroupId == 0; or FormId === 2;
const taskTitles = {};
job.tasks.forEach(row => {
    let taskId = row.TaskId;
    if (!taskIdList.includes(taskId)) {
        taskIdList.push(taskId)
        // taskTitle = task.filter(row => row.FormId === 2).FormName;
        taskTitles[taskId] = row.FormName;

        formHistory[taskId] = [];
        sectionIdList[taskId] = [];      
    }
});

taskIdList.forEach(task => {
    $(".tasks-preview-container").append(`
        <p id="task-preview/${task}">${taskTitles[task]}</p>
    `)
});


// build form for each task
taskIdList.forEach(TaskId => {
    setTaskDataSet(TaskId);
    let taskId = "task-" + taskDataSet[0].TaskId;
    $('#job-' + job.jobId).append(`
        <div id="${taskId}"></div>
    `)

    // to build <section> for each level of form
    // let's get a list of FormId
    let formIdList = [];
    taskDataSet.forEach(row => formIdList.push(row.FormId))
    const formIdListUnique = [...new Set(formIdList)].sort((a, b) => (a > b) ? 1 : -1);

    formIdListUnique.forEach((FormId)=>{
        let formGroupIdList = [];
        let dataSetByFormId = taskDataSet.filter(row => row.FormId === FormId);
        dataSetByFormId.forEach(row => formGroupIdList.push(row.FormGroupId));
        const formGroupIdListUnique = [...new Set(formGroupIdList)];

        formGroupIdListUnique.forEach(FormGroupId => {
            let parentGroupIdList = [];
            let dataSetX = taskDataSet.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId);
            dataSetX.forEach(row => parentGroupIdList.push(row.ParentGroupId));
            const parentGroupIdListUnique = [...new Set(parentGroupIdList)];


            parentGroupIdListUnique.forEach(ParentGroupId => {
                let parentFieldIdList = [];
                let dataSetY = taskDataSet.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId && row.ParentGroupId === ParentGroupId);
                dataSetY.forEach(row => parentFieldIdList.push(row.ParentFieldId));
                const parentFieldIdListUnique = [...new Set(parentFieldIdList)];
                parentFieldIdListUnique.forEach(ParentFieldId => {
                    // assign currentForm variable
                    setCurrentForm(FormId, FormGroupId, ParentGroupId, ParentFieldId);

                    // add section tag with unique ID that has a format "form-1-2-1-4" where 1 is FormId and 2 is FormGroupId and 1 is ParentGroupId and 4 is Parent
                    let sectionId = "form-" + TaskId + "-" + FormId + "-" + FormGroupId + "-" + ParentGroupId + "-" + ParentFieldId;
                    sectionIdList[TaskId].push(sectionId);
                    $('body').append(`
                    <section id="${sectionId}" class="hidden">
                        <div class="form-name flex-container">
                            <h3>${currentForm.title()}</h3>
                        </div>
                    </section>
                    `)


                    // get current form data set and sort it:
                    let dataSet = currentForm.dataSet().sort((a, b) => (a.FieldOrder > b.FieldOrder) ? 1 : -1);
                    dataSet.forEach(row => {
                    // if "FieldDataType" === "FORM SELECT" it means that form has a subform and it needs a subform preview
                    
                    if (row.DataType === "FORM SELECT") {
                        // let's find all children of current form
                        // get children FormId. 

                        /* alternativ way to find children FormId */
                        /* let dataSetChildren = api_response.filter(row => row.ParentFormId === FormId && row.ParentFormGroupId === FormGroupId);
                        let formIdListChildren = [];
                        dataSetChildren.forEach(row => formIdListChildren.push(row.FormId))
                        const formIdListChildrenUnique = [...new Set(formIdListChildren)]; */
                        let currentFieldId = row.FieldId;
                        let currentFormGroupId = row.FormGroupId;
                        let childrenDataSetByFormId = taskDataSet.filter(row => row.ParentFormId === FormId && row.ParentFieldId === currentFieldId && row.ParentGroupId === currentFormGroupId);

                        // if a form has children let's add a <div> for children preview with a lable

                        if (childrenDataSetByFormId.length) {
                            $('#'+ sectionId).append(`
                                <div class="form-preview-title"><span>${row.Title}</span></div>
                                <div class="form-preview-container"></div>                
                            `)

                            // unique children FormGroupId:
                            let childrenFormGroupIdList = [];
                            childrenDataSetByFormId.forEach(row => childrenFormGroupIdList.push(row.FormGroupId));
                            const childrenFormGroupIdListUnique = [...new Set(childrenFormGroupIdList)];

                            childrenFormGroupIdListUnique.forEach(childFormGroupId => {
                                let childParentGroupIdList = [];
                                let dataSetA = taskDataSet.filter(row => row.FormId === FormId + 1 && row.FormGroupId === childFormGroupId);
                                dataSetA.forEach(row => childParentGroupIdList.push(row.ParentGroupId));
                                const childParentGroupIdListUnique = [...new Set(childParentGroupIdList)];
                                childParentGroupIdListUnique.forEach(childParentGroupId => {
                                    let childParentFieldIdList = [];
                                    let dataSetB = taskDataSet.filter(row => row.FormId === FormId+1 && row.FormGroupId === childFormGroupId && row.ParentGroupId === childParentGroupId);
                                    dataSetB.forEach(row => childParentFieldIdList.push(row.ParentFieldId));
                                    const childParentFieldIdListUnique = [...new Set(childParentFieldIdList)];
                                    // add preview for each child:

                                    childParentFieldIdListUnique.forEach(childParentFieldId =>{
                                        let childFormId = FormId + 1;                            
                                        setChildForm(childFormId, childFormGroupId, childParentGroupId, childParentFieldId);
                                        childSectionId = "form-" + TaskId + '-' + childFormId + '-' + childFormGroupId + "-" + childParentGroupId + "-" + childParentFieldId;
                                        $('#'+ sectionId).find('.form-preview-container').append(`
                                            <div id="preview1/${childSectionId}" class="preview-container">
                                                <p id="preview2/${childSectionId}">${childForm.title()} ${childFormGroupId}</p>
                                            </div>
                                        `)

                                    });
                                });
                            })
                            // add button at the end
                            $('#'+ sectionId).append(`
                            <button type="button" id="addTo-${sectionId}">New ${row.Title}</button>
                            `)                        
                        }
                        
                    // for every other row we add just input field
                    } else {
                        $('#'+ sectionId).append(`
                        <div class="row">
                            <span>${row.Title}</span><br/>
                            <input id="${sectionId + "-" + row.FieldId}" 
                                type="text" 
                                name="${row.Title}" 
                                value="${row.FieldValue}" 
                                onchange=${function() {testInput()}} 
                                placeholder="${row.GhostText}"></input>
                        </div>
                    `)}  
                });

                    // add "Save" or "Submit" button
                    // if form is SuperParent (it's SuperParentFieldId === "NULL") we add "Submit" button
                    if (ParentGroupId === null) {
                        $('#'+ sectionId).append(`
                        <button type="button" id="submit-${sectionId}">Submit</button>
                    `)  
                    } else {
                        $('#'+ sectionId).append(`
                        <button type="button" id="save-${sectionId}">Save</button>
                    `)
                    }

                })
                
            })

        });

    });

})



// every form is hidden by default
// let's set up a visible form by default

// // let set up visible form. by default it'll be the smalest Form Id and its smallest FormGroupId
// let visibleFormId = sectionIdList[currentTaskId][0];
// console.log(sectionIdList);
// let visibleFormGroupId = taskDataSet.filter(row => row.FormId === visibleFormId)[0].FormGroupId;
// // setVisibleForm(visibleFormId, visibleFormGroupId);
// visibleFormId = "form-" + visibleFormId + "-" + visibleFormGroupId + "-NULL-NULL";
// setVisibleForm(visibleFormId);
// $('#' + visibleFormId).removeClass('hidden');



// NOTE FORM VALUES UPDATE
// create a copy of a superParentForm with all subforms in separete list of objects

// let's assume that we need to define (or pass) ID of the main form we are going to work with:
let superParentForm = {
    FormId: 2,
    FormGroupId: 1,
    ParentFormId: "NULL",
    ParentFieldId: "NULL",
}

let parentData = getDataSet(superParentForm.FormId, superParentForm.FormGroupId, superParentForm.ParentFormId, superParentForm.ParentFieldId)

// this is a fuull dataset that will be modified by user and send in api call when user submit a form
// data from subforms will be added to this dataset just in case user click "Save" button 
// const updatedForm = [...selectedData];

// a list of object where each object is a dataset for particulat form
const modifiedData = [];
// we add parentData to it by default 
modifiedData.push({
    formId: "form-" + superParentForm.FormId + "-" + superParentForm.FormGroupId + "-" + superParentForm.ParentFormId + "-" + superParentForm.ParentFieldId,
    saved: true,
    data: parentData,
})

console.log(modifiedData);


function getUpdatedInput(inputFieldId) {
    console.log("it's changing");   
    let newValue = $('#' + inputFieldId).val();
    console.log(newValue);
}


const getDataFromPage = (formId) => {
    let idArray = formId.split("-");
    let formDataSet = getDataSet(idArray[1], idArray[2], idArray[3], idArray[4]);
    let fieldIdList = [];
    formDataSet.forEach(row => fieldIdList.push(row.FieldId));
    fieldIdList.forEach(FieldId => {
        let newValue = $('#' + formId + "-" + FieldId).val();
        updateRow(formDataSet, FieldId, newValue);
    });
    modifiedData.push()
}

const saveForm = (formId) => {
    let newData = getDataFromPage(formId);
    modifiedData.push({
        formId: formId,
        data: newData,
    })
}



console.log(sectionIdList);


// NOTE SWITCHING BETWEEN FORMS
const switchForm = (event) => {
    // get id of clicked element
    let elementSelected = event.target.id;

    // if id="task-N"
    if (elementSelected.split("/")[0] === "task-preview"){
        let selectedTask = elementSelected.split("/")[1];
        let sectionId = sectionIdList[selectedTask][0];
        setTaskDataSet(selectedTask);
        setVisibleForm(sectionId);
        $('#' + sectionId).removeClass('hidden');
        $('#job-1').addClass('hidden');
        console.log(selectedTask);

    }

    // if id="back"
    if (elementSelected === "back") {
        console.log("going back");
        // new visible form will be the last form in formHistory array
        let newVisibleForm = '';
        if (formHistory[currentTaskId].length > 0) {
            newVisibleForm = formHistory[currentTaskId][formHistory[currentTaskId].length - 1];
        } else {
            newVisibleForm = "job-1";
        }

        // remove "hidden" class from the section with newVisibleForm id
        $('#' + newVisibleForm).removeClass('hidden');

        // and add "hidden" class to the current visible form
        $('#' + visibleForm.sectionId).addClass('hidden');
        
        // assign a new id to visible form
        visibleForm.sectionId = newVisibleForm;

        // remove last element in formHistory array
        formHistory[currentTaskId].pop(newVisibleForm);


    }
    // if form id was selected (preview form ID always contain "/" so it always can be splitted)
    
    if (elementSelected.split('/')[1]) {
        console.log("rrtrefvrgtrtegvf");
        console.log(elementSelected.split('/')[1]);
        let formIdSelected = elementSelected.split('/')[1];

        // verify if form Id is in the list of all forms sectionIdList
        console.log(sectionIdList[currentTaskId].includes(formIdSelected));
        if (sectionIdList[currentTaskId].includes(formIdSelected)) {
            
            console.log(visibleForm.sectionId);
            // remove "hidden" class from selected form Id
            $('#' + formIdSelected).removeClass('hidden');

            // and add "hidden" class to the current visible form
            $('#' + visibleForm.sectionId).addClass('hidden');

            // add current visible form Id to the history array
            formHistory[currentTaskId].push(visibleForm.sectionId);

            // assign a new visible form Id
            visibleForm.sectionId = formIdSelected;
 
        }
    }
    

}

// listener 
$(document).on('click', switchForm);







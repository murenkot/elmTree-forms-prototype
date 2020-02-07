
const api_response = [
    {
        "FormId": 2,
        "FieldId": 1,
        "ClientFormName": "Soil Density",
        "FieldOrder": 1,
        "FormGroupId": 1,
        "FieldDataType": "DATE",
        "PickList": "NULL",
        "GhostText": "date tested",
        "FieldChars": 50,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "ParentFormGroupId": '',
        "FieldName": "Date Tested",
        "Units": "dd/mm/yy",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "07/09/2019"
    },
    {
        "FormId": 2,
        "FieldId": 2,
        "ClientFormName": "Soil Density",
        "FieldOrder": 2,
        "FormGroupId": 1,
        "FieldDataType": "ARRAY",
        "PickList": "1.3|2.5|3.7",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "ParentFormGroupId": '',
        "FieldName": "Gauge Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 0,
        "FieldValue": 1.3
    },
    {
        "FormId": 2,
        "FieldId": 3,
        "ClientFormName": "Soil Density",
        "FieldOrder": 3,
        "FormGroupId": 1,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 50,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "ParentFormGroupId": '',
        "FieldName": "Density Standart",
        "Units": "",
        "ShowInApp": 1,
        "Required": 0,
        "FieldValue": "Some Density Standart"
    },
    {
        "FormId": 2,
        "FieldId": 4,
        "ClientFormName": "Soil Density",
        "FieldOrder": 4,
        "FormGroupId": 1,
        "FieldDataType": "FORM SELECT",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 25,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "ParentFormGroupId": '',
        "FieldName": "Density Shots",
        "Units": "",
        "ShowInApp": 1,
        "Required": 0,
        "FieldValue": ""
    },
    {
        "FormId": 3,
        "FieldId": 1,
        "ClientFormName": " Density Shot",
        "FieldOrder": 1,
        "FormGroupId": 1,
        "FieldDataType": "ARRAY",
        "PickList": "Proctor 1|Proctor 2|Proctor 3",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Proctor",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Proctor"
    },
    {
        "FormId": 3,
        "FieldId": 2,
        "ClientFormName": "Density Shot",
        "FieldOrder": 2,
        "FormGroupId": 1,
        "FieldDataType": "ARRAY",
        "PickList": "A|B|C|D",
        "GhostText": "",
        "FieldChars": "NULL",
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Spec Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "D"
    },  
    {
        "FormId": 3,
        "FieldId": 3,
        "ClientFormName": "Density Shot",
        "FieldOrder": 3,
        "FormGroupId": 1,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 15,
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Test Location",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Somewhere there"
    },
    {
        "FormId": 3,
        "FieldId": 4,
        "ClientFormName": "Soil Density",
        "FieldOrder": 4,
        "FormGroupId": 1,
        "FieldDataType": "FORM SELECT",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 25,
        "ParentFormId": "NULL",
        "ParentFieldId": "NULL",
        "ParentFormGroupId": '',
        "FieldName": "Baby T Button",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": ""
    },
    {
        "FormId": 3,
        "FieldId": 1,
        "ClientFormName": " Density Shot",
        "FieldOrder": 1,
        "FormGroupId": 2,
        "FieldDataType": "ARRAY",
        "PickList": "Proctor 1|Proctor 2|Proctor 3",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Proctor",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Proctor"
    },
    {
        "FormId": 3,
        "FieldId": 2,
        "ClientFormName": "Density Shot",
        "FieldOrder": 2,
        "FormGroupId": 2,
        "FieldDataType": "ARRAY",
        "PickList": "A|B|C|D",
        "GhostText": "",
        "FieldChars": "NULL",
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Spec Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "D"
    },
    {
        "FormId": 3,
        "FieldId": 3,
        "ClientFormName": "Density Shot",
        "FieldOrder": 3,
        "FormGroupId": 2,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 15,
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Test Location",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Somewhere there"
    },
    {
        "FormId": 3,
        "FieldId": 1,
        "ClientFormName": " Density Shot",
        "FieldOrder": 1,
        "FormGroupId": 3,
        "FieldDataType": "ARRAY",
        "PickList": "Proctor 1|Proctor 2|Proctor 3",
        "GhostText": "enter guaged number",
        "FieldChars": "NULL",
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Proctor",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Proctor"
    },
    {
        "FormId": 3,
        "FieldId": 2,
        "ClientFormName": "Density Shot",
        "FieldOrder": 2,
        "FormGroupId": 3,
        "FieldDataType": "ARRAY",
        "PickList": "A|B|C|D",
        "GhostText": "",
        "FieldChars": "NULL",
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Spec Number",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "D"
    },
    {
        "FormId": 3,
        "FieldId": 3,
        "ClientFormName": "Density Shot",
        "FieldOrder": 3,
        "FormGroupId": 3,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 15,
        "ParentFormId": 2,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "Test Location",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "Somewhere there"
    },  {
        "FormId": 4,
        "FieldId": 1,
        "ClientFormName": "Baby T",
        "FieldOrder": 1,
        "FormGroupId": 1,
        "FieldDataType": "STRING",
        "PickList": "NULL",
        "GhostText": "",
        "FieldChars": 2,
        "ParentFormId": 3,
        "ParentFieldId": 4,
        "ParentFormGroupId": 1,
        "FieldName": "I'm 3 layers deep",
        "Units": "",
        "ShowInApp": 1,
        "Required": 1,
        "FieldValue": "She's the best"
    },

]

// retrive data for a particular form to separate dataset
const getDataSet = (FormId, FormGroupId) => {
    let dataSet = api_response.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId);
    return dataSet
};

// get title of particular form
const getTitle = (FormId, FormGroupId) => {
    let dataSet = api_response.filter(row => row.FormId === FormId && row.FormGroupId === FormGroupId);
    let title = dataSet[0].ClientFormName;
    return title;
}

// set current form 
const setCurrentForm = (FormId, FormGroupId) => {
    currentForm.FormId = FormId;
    currentForm.FormGroupId = FormGroupId;
}

const setChildForm = (FormId, FormGroupId) => {
    childForm.FormId = FormId;
    childForm.FormGroupId = FormGroupId;
}

const setVisibleForm = (sectionId) => {
    visibleForm.sectionId = sectionId
}

const setParentForm = (currentSectionId) => {
    currentFormId = Number(currentSectionId.split('-')[1]);
    currentFormGroupId = Number(currentSectionId.split('-')[2]);

    let first_row = api_response.filter(row => row.FormId === currentFormId && row.FormGroupId === currentFormGroupId)[0];
    console.log(first_row);
    parentFormId = first_row.ParentFormId;
    parentFormGroupId = first_row.ParentFormGroupId;
    
    parentForm.sectionId = 'form-' + parentFormId + '-' + parentFormGroupId;
}


// global variables:
const parentForm = {
    FormId: '',
    FormGroupId: '',
    sectionId: '',
    dataSet: getDataSet(this.FormId, this.FormGroupId),
    };

const currentForm = {
    FormId: 3,
    FormGroupId: 1,
    // dataSet: function() { return api_response.filter(row => row.FormId === this.FormId && row.FormGroupId === this.FormGroupId)},
    dataSet: function() {return getDataSet(this.FormId, this.FormGroupId)},
    title: function() {return getTitle(this.FormId, this.FormGroupId)},
};

const childForm = {
    FormId: '',
    FormGroupId: '',
    dataSet: function() {return getDataSet(this.FormId, this.FormGroupId)},
    title: function() {return getTitle(this.FormId, this.FormGroupId)},
    };

const visibleForm = {
    FormId: '',
    FormGroupId: '',
    // sectionId: function() {return "form-" + this.FormId + "-" + this.FormGroupId},
    sectionId: '',
    dataSet: function() {return getDataSet(this.FormId, this.FormGroupId)},
    title: function() {return getTitle(this.FormId, this.FormGroupId)},
}

// this list stores all section form Id in format "form-1-2" where 1 is FormId and 2 is FormGroupId. 
const sectionIdList = [];


// to build <section> for each level of form
// let's get a list of FormId
let formIdList = [];
api_response.forEach(row => formIdList.push(row.FormId))
const formIdListUnique = [...new Set(formIdList)].sort((a, b) => (a > b) ? 1 : -1);;


formIdListUnique.forEach((FormId)=>{
    let formGroupIdList = [];
    let dataSetByFormId = api_response.filter(row => row.FormId === FormId);

    dataSetByFormId.forEach(row => formGroupIdList.push(row.FormGroupId))
    const formGroupIdListUnique = [...new Set(formGroupIdList)];
    formGroupIdListUnique.forEach(FormGroupId => {

        // assign currentForm variable
        setCurrentForm(FormId, FormGroupId)

        // add section tag with unique ID that has a format "form-1-2" where 1 is FormId and 2 is FormGroupId
        let sectionId = "form-" + FormId + "-" + FormGroupId;
        sectionIdList.push(sectionId);
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
            if (row.FieldDataType === "FORM SELECT") {
                // let's find all children of current form
                // get children FormId. 

                /* alternativ way to find children FormId */
                /* let dataSetChildren = api_response.filter(row => row.ParentFormId === FormId && row.ParentFormGroupId === FormGroupId);
                let formIdListChildren = [];
                dataSetChildren.forEach(row => formIdListChildren.push(row.FormId))
                const formIdListChildrenUnique = [...new Set(formIdListChildren)]; */

                let childFormId = FormId + 1;
                let currentFieldId = row.FieldChars.Id;
                let childrenDataSetByFormId = api_response.filter(row => row.FormId === childFormId && row.ParentFieldId === currentFieldId);

                // unique children FormGroupId:
                let childrenFormGroupIdList = [];
                childrenDataSetByFormId.forEach(row => childrenFormGroupIdList.push(row.FormGroupId));
                const childrenFormGroupIdListUnique = [...new Set(childrenFormGroupIdList)];

                // if a form has children let's add a <div> for children preview with a lable
                if (childrenFormGroupIdListUnique.length > 0){
                    $('#'+ sectionId).append(`
                    <div class="form-preview-title"><span>${row.FieldName}</span></div>
                    <div class="form-preview-container"></div>                
                    `)
                }
                let numberOfChildren = 0;
                // add preview for each child:
                childrenFormGroupIdListUnique.forEach(ChildFormGroupId => {
            
                    setChildForm(childFormId, ChildFormGroupId);
                    childSectionId = "form-" + childFormId + '-' + ChildFormGroupId;

                    $('#'+ sectionId).find('.form-preview-container').append(`
                        <div id="preview1/${childSectionId}" class="preview-container">
                            <p id="preview2/${childSectionId}">${childForm.title()} ${ChildFormGroupId}</p>
                        </div>
                    `)
                })

                // add button at the end
                $('#'+ sectionId).append(`
                    <button type="button" id="addTo-${sectionId}">New ${row.FieldName}</button>
                `)
            // for every other row we add just input field
            } else {
                $('#'+ sectionId).append(`
                <div class="row">
                    <span>${row.FieldName}</span><br/>
                    <input type="text" name=${row.FieldName} value="${row.FieldValue}" placeholder="${row.GhostText}"></input>
                </div>
            `)
            }  
        });
    });
});

// every form is hidden by default
// let's set up a visible form by default

// let set up visible form. by default it'll be the smalest Form Id and its smallest FormGroupId
let visibleFormId = formIdListUnique[0];
let visibleFormGroupId = api_response.filter(row => row.FormId === visibleFormId)[0].FormGroupId;
// setVisibleForm(visibleFormId, visibleFormGroupId);
visibleFormId = "form-" + visibleFormId + "-" + visibleFormGroupId;
setVisibleForm(visibleFormId);
$('#' + visibleFormId).removeClass('hidden');


console.log(visibleForm);



const switchForm = (event) => {
    let elementSelected = event.target.id;
    if (elementSelected === "back") {
        let newVisibleForm = parentForm.sectionId;
        $('#' + parentForm.sectionId).removeClass('hidden');
        $('#' + visibleForm.sectionId).addClass('hidden');
        console.log(newVisibleForm);
        setParentForm(newVisibleForm);
        setVisibleForm(newVisibleForm);

    }
    if (elementSelected.split('/')[1]) {
        let formIdSelected = elementSelected.split('/')[1];
        if (sectionIdList.includes(formIdSelected)) {
            $('#' + formIdSelected).removeClass('hidden');
            console.log(visibleForm.sectionId);
            $('#' + visibleForm.sectionId).addClass('hidden');
            setParentForm(formIdSelected);
            setVisibleForm(formIdSelected);

            console.log(parentForm);
        }
    }
    
   

    // make form 2 invisible
    // $('#FormID2').toggleClass('hidden');


    console.log(elementSelected);
}

// listener 
$(document).on('click', switchForm);






